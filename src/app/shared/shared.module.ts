import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbImageComponent } from './components/ab-image/ab-image.component';
import { AbBackgroundComponent } from './components/ab-background/ab-background.component';
import { RouterModule } from "@angular/router";
import { PhotoViewerComponent } from "./components/photo-viewer/photo-viewer.component";
import { PhotoViewerService } from "./components/photo-viewer/photo-viewer.service";
import { AbImageService } from "./components/ab-image/ab-image.service";
import { PhotoViewerMaxPhotoHeightDirective } from './components/photo-viewer/photo-viewer-max-photo-height.directive';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { ApiService } from "./services/api/api.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    AbImageComponent,
    AbBackgroundComponent,
    PhotoViewerComponent,
    PhotoViewerMaxPhotoHeightDirective
  ],
  providers: [
    PhotoViewerService,
    AbImageService,
    ApiService
  ],
  exports: [
    AbImageComponent,
    AbBackgroundComponent,
    PhotoViewerComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
