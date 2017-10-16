import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from "angularfire2";
import { LocalStorageModule } from "angular-2-local-storage";

import { firebaseConfig } from "../environments/firebase.config";

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { MetaModule } from "./shared/services/meta/meta.module";
import { NoSanitizationService } from "./shared/services/no-sanitization/no-sanitization";
import { MainModule } from "./main/main.module";
import { NotFoundModule } from "./not-found/not-found.module";
import { AppRoutingModule } from "./routing/app.routing.module";
import { metaConfig } from "./routing/app.meta-config";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'AbRemoteDrawing'
    }),
    BrowserAnimationsModule,

    LocalStorageModule.withConfig({
      prefix: 'ab',
      storageType: 'localStorage'
    }),
    MetaModule.forRoot(metaConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,

    SharedModule,
    AppRoutingModule,

    MainModule,
    NotFoundModule
  ],
  providers: [
    { provide: DomSanitizer, useClass: NoSanitizationService }
  ],
  bootstrap: [ AppComponent ],
  exports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class AppModule { }
