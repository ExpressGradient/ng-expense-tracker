import { Component, OnInit } from "@angular/core";

import JSONGroups from "./groups.json";

@Component({
  selector: 'groups',
  templateUrl: './groups.template.html',
  styleUrls: [ './groups.styles.css' ]
})
export class GroupsComponent implements OnInit {
  groups:object[];
  title: string;
  friends: string;

  groupSubmit = () => {
    this.groups.push({
      'title': this.title,
      'friends': this.friends,
      'logs': []
    });
    window.sessionStorage.setItem('groups', JSON.stringify(this.groups));
  }

  constructor() {
  }

  ngOnInit() {
    if(!window.sessionStorage.getItem('groups')) {
      window.sessionStorage.setItem('groups', JSON.stringify(JSONGroups));
    }

    this.groups = JSON.parse(window.sessionStorage.getItem('groups'));
  }
}
