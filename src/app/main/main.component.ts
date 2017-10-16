import { Component } from '@angular/core';
import { routerTransition } from "../routing/app.routing.animations";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { ApiService } from "../shared/services/api/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'ab-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class MainComponent {

  public items: AngularFireList<any[]>;
  private itemsNs: string = '/';

  constructor(
    public af: AngularFireDatabase,
    private api: ApiService,
    private router: Router
  ) {
    this.items = af.list(`${this.itemsNs}`);
  }

  createSession(event) {
    this.api.createPresentation().then(presentation => {
      this.router.navigate([ 'create', presentation.shortKey ]);
    });
  }
}
