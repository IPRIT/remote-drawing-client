import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { routerTransition } from "../../routing/app.routing.animations";
import { Presentation } from "../../shared/services/api/models/presentation";
import { ApiService } from "../../shared/services/api/api.service";
import { Observable } from "rxjs";
import * as firebase from 'firebase';
import { File } from "../../shared/services/api/models/file";
import { AngularFireDatabase } from "angularfire2/database";
import Promise from 'bluebird';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CreateComponent implements OnInit {

  private id: number;
  public qrDataUrl: string;
  private presentation: Observable<Presentation>;

  isFilesSelected = false;
  isFilesUploading = false;

  isProjectSaving = false;
  isProjectSaved = false;

  @ViewChild('fileSelector') fileSelector: ElementRef;

  storageRef: any;
  imagesPath: string = 'images';

  public presentationForm = {
    name: '',
    files: []
  };

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    public af: AngularFireDatabase,
  ) {
    this.presentation = this.route.params.flatMap(params => {
      return api.getPresentation( params.shortKey );
    });
    this.presentation.subscribe(result => {
      console.log(result);
      this.id = result.id;
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
    });
  }

  _buildChildImagePath(imageName) {
    return `${this.imagesPath}/${imageName}`;
  }
}
