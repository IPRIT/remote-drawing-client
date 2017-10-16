import { Injectable } from '@angular/core';
import { File } from "../api/models/file";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class CanvasService {

  public game: any;
  public files: File[] = [];

  public onImagesLoaded = new BehaviorSubject(false);

  private _frames = 0;
  private _cursors: any;
  private _image: any;

  constructor(
  ) {
  }

  init(params) {
    this.files = params && params.Files || [];
    this._createGameInstance();
    this._attachEvents();
  }

  showSlide(number) {
    if (!this.parent) {
      return;
    }
    console.log(`Showing ${number} slide`);
    let game = this.game;
    let currentImage = this._image;
    if (currentImage) {
      currentImage.destroy();
    }
    let image = this._image = game.add.image(0, 0, `slide${number}`);
    image.anchor.setTo(.5, .5);
    image.position.set(this.screenWidth / 2, this.screenHeight / 2);
    let imageWidth = image.width;
    let imageHeight = image.height;
    let screenWidth = this.screenWidth;
    let screenHeight = this.screenHeight;
    let heightRatio = screenHeight / imageHeight;
    let widthRatio = screenWidth / imageWidth;

    if (widthRatio < heightRatio) {
      image.scale.set(widthRatio, widthRatio);
    } else {
      image.scale.set(heightRatio, heightRatio);
    }
  }

  _createGameInstance() {
    let optimalSize = this.optimalGameSize;
    this.game = new Phaser.Game(optimalSize.width, optimalSize.height, Phaser.AUTO, 'presentation-canvas', {
      preload: this._preload.bind(this),
      create: this._create.bind(this),
      update: this._update.bind(this),
      render: this._render.bind(this)
    });
    this.game.classInstance = this;
  }

  _preload() {
    let game = this.game;
    game.load.crossOrigin = 'anonymous';
    let files = this.files;
    for (let fileIndex = 0; fileIndex < files.length; ++fileIndex) {
      game.load.image(`slide${fileIndex + 1}`, files[ fileIndex ].fileUrl);
    }
  }

  _create() {
    this.onImagesLoaded.next( true );

    let game = this.game;
    game.stage.backgroundColor = '#FFFFFF';
    game.time.advancedTiming = true;

    this._cursors = game.input.keyboard.createCursorKeys();

    game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    game.scale.setResizeCallback(() => this._resize(), game);
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
  }

  _update() {
    this._frames++;
  }

  _render() {
    this.game.debug.cameraInfo(this.game.camera, 32, 32);
  }

  _attachEvents() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
  }

  _resize() {
    let game = this.game;
    game.paused = false;
    if (this._image && this.parent) {
      this._image.position.set(this.screenWidth / 2, this.screenHeight / 2);
    }
  }

  get optimalGameSize() {
    const maxSideSize = 1200;
    let width = this.screenWidth;
    let height = this.screenHeight;
    let ratio = width / height;
    if (width > height) {
      width = maxSideSize;
      height = width / ratio;
    } else {
      ratio = height / width;
      height = maxSideSize;
      width = height / ratio;
    }
    return { width, height };
  }

  get parent(): any {
    return document.querySelector('#presentation-canvas');
  }

  get screenWidth() {
    return this.parent.clientWidth;
  }

  get screenHeight() {
    return this.parent.clientHeight;
  }
}