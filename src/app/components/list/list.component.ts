import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: any; //variavel global de usuários
  constructor( private crudService: CrudService ) { }

  async ngOnInit() {
    // service de listagem de usuários
    var users = await this.crudService.list()
    this.users = users['data'];
  }

}
