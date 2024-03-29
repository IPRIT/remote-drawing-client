import { Routes } from "@angular/router";
import { MainComponent } from "../main/main.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { CreateComponent } from "../main/create/create.component";
import { PresentationComponent } from "../main/presentation/presentation.component";

export const routes: Routes = [{
  path: '',
  component: MainComponent,
  data: {
    meta: {
      useTitleSuffix: false,
      titleSuffix: '',
      'theme-color': '#01579b'
    }
  }
}, {
  path: 'create/:shortKey',
  component: CreateComponent,
  data: {
    meta: {
      useTitleSuffix: false,
      titleSuffix: '',
      'theme-color': '#01579b'
    }
  }
}, {
  path: 's/:shortKey',
  component: PresentationComponent,
  data: {
    meta: {
      useTitleSuffix: false,
      titleSuffix: '',
      'theme-color': '#01579b'
    }
  }
}, {
  path: '**',
  component: NotFoundComponent
}];