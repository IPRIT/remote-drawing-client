import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { routerTransition } from "../../routing/app.routing.animations";
import { Presentation } from "../../shared/services/api/models/presentation";
import { ApiService } from "../../shared/services/api/api.service";
import { Observable } from "rxjs";
import * as firebase from 'firebase';
import { File } from "../../shared/services/api/models/file";
import { AngularFireDatabase } from "angularfire2/database";
import Promise from 'bluebird';
import { config } from "../../../environments/config";
import { SocketApiService } from "../../shared/services/socket.io/socket-api.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CreateComponent implements OnInit {

  private id: number;
  private shortKey: string;
  private presentation: Observable<Presentation>;

  qrDataUrl: string;

  isFilesSelected = false;
  isFilesUploading = false;

  isProjectSaving = false;
  isProjectSaved = false;

  @ViewChild('fileSelector') fileSelector: ElementRef;
  @ViewChild('shareLink') shareLink: ElementRef;

  storageRef: any;
  imagesPath: string = 'images';

  public presentationForm = {
    name: '',
    files: []
  };

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private socketApi: SocketApiService,
    private router: Router,
    public af: AngularFireDatabase
  ) {
    this.presentation = this.route.params.flatMap(params => {
      return api.getPresentation( params.shortKey );
    });
    this.presentation.subscribe(result => {
      console.log(result);
      this.id = result.id;
      this.shortKey = result.shortKey;
      this.presentationForm.name = result.name;
      this.presentationForm.files = result.Files;
    });
  }

  ngOnInit() {
  }

  selectFiles(event) {
    this.fileSelector.nativeElement.click();
  }

  handleFileSelection(evt) {
    this.storageRef = firebase.storage().ref();
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.disabled = true;
    let files = evt.target.files;

    this.isFilesSelected = true;
    this.isFilesUploading = true;

    Promise.resolve(files).map(file => {
      let metadata = {
        'contentType': file.type
      };
      let photo: File = {};
      return Promise.all([
        this.storageRef.child(
          this._buildChildImagePath(`_${Math.random().toString(16).replace('.', '')}${file.name.slice(0, 10)}`)
        ).put(file, metadata),
        photo,
        file
      ]);
    }, { concurrency: 3 }).map(([ snapshot, photo, file ]) => {
      photo.fileUrl = snapshot.downloadURL;
      photo.fileName = snapshot.metadata.name;
      return photo;
    }, { concurrency: 3 }).map(photo => {
      console.log('Photo:', photo);
      this.presentationForm.files.push( photo );
    }, { concurrency: 3 }).catch(error => {
      console.error('Upload failed:', error);
    }).finally(() => {
      this.isFilesSelected = false;
      this.isFilesUploading = false;
    });
  }

  saveProject() {
    this.isProjectSaving = true;
    this.api.updatePresentation( this.id, this.presentationForm ).then(_ => {
      return this.api.getQrCode( this.id );
    }).then(result => {
      this.qrDataUrl = result.qr || '';
      this.isProjectSaved = true;
      this.isProjectSaving = false;
      this.shareLink.nativeElement.focus();
      this.shareLink.nativeElement.select();
      return this.socketApi.joinServer();
    }).then(_ => {
      return this.socketApi.joinRoom({ id: this.id });
    }).then(_ => {
      this.socketApi.onCloseQrLayer().subscribe(_ => {
        this.router.navigate([ 's', this.shortKey ]);
      });
    });
  }

  buildShareLink() {
    return `http://${config.frontendServer}/s/${this.shortKey}`;
  }

  _buildChildImagePath(imageName) {
    return `${this.imagesPath}/${imageName}`;
  }
}
