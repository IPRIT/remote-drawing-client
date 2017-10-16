import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Presentation } from "../../shared/services/api/models/presentation";
import { Observable } from "rxjs";
import { SocketApiService } from "../../shared/services/socket.io/socket-api.service";
import { ApiService } from "../../shared/services/api/api.service";
import { config } from "../../../environments/config";
import { CanvasService } from "../../shared/services/canvas/canvas.service";
import { File } from "../../shared/services/api/models/file";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  private id: number;
  private files: File[] = [];
  private shortKey: string;
  private presentation: Observable<Presentation>;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private socketApi: SocketApiService,
    private canvas: CanvasService
  ) {
    this.presentation = this.route.params.flatMap(params => {
      this.shortKey = params.shortKey;
      return api.getPresentation( params.shortKey );
    });
    this.presentation.subscribe(result => {
      this.id = result.id;
      this.files = result.Files;
      this.socketApi.joinServer().then(_ => {
        return this.socketApi.joinRoom({ id: this.id });
      }).then(_ => {
        this._attachEvents();
        this.canvas.init(result);
      });
    });

    this.canvas.onImagesLoaded.filter(value => !!value).subscribe(_ => {
      this.canvas.showSlide(1);
    });
  }

  _attachEvents() {
    this.socketApi.onSlideChanged.subscribe((slideNumber: number) => {
      this.canvas.showSlide( slideNumber );
    });
  }

  buildShareLink() {
    return `http://${config.frontendServer}/s/${this.shortKey}`;
  }

  ngOnInit() {
  }
}
