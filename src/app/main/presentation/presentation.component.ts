import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Presentation } from "../../shared/services/api/models/presentation";
import { Observable, Subscription } from "rxjs";
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
export class PresentationComponent implements OnInit, OnDestroy {

  private id: number;
  private files: File[] = [];
  private shortKey: string;
  private presentation: Observable<Presentation>;

  private onSlideChangedSubscription: Subscription;
  private onImagesLoadedSubscription: Subscription;
  private onDrawSubscription: Subscription;

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

    this.onImagesLoadedSubscription = this.canvas.onImagesLoaded.filter(value => !!value).take(1).subscribe(_ => {
      this.canvas.showSlide(1);
    });
  }

  _attachEvents() {
    this.onSlideChangedSubscription = this.socketApi.onSlideChanged.distinctUntilChanged().subscribe((slideNumber: number) => {
      this.canvas.showSlide( slideNumber );
    });
    this.onDrawSubscription = this.socketApi.onDraw.subscribe(params => {
      this.canvas.draw( params );
    });
  }

  buildShareLink() {
    return `http://${config.frontendServer}/s/${this.shortKey}`;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.canvas.destroy();
    this.onImagesLoadedSubscription.unsubscribe();
    this.onSlideChangedSubscription.unsubscribe();
    this.onDrawSubscription.unsubscribe();
  }
}
