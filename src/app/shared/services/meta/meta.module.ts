import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MetaService } from "./meta.service";
import { META_CONFIG } from "./meta.config";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MetaModule {
  static forRoot(metaConfig: any = { useTitleSuffix: false, defaults: {} }): ModuleWithProviders {
    return {
      ngModule: MetaModule,
      providers: [
        { provide: META_CONFIG, useValue: metaConfig},
        MetaService
      ]
    };
  }
}
