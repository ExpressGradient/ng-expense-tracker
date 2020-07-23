import { Component, OnInit } from "@angular/core";

import JSONActivities from './activities.json';

@Component({
  selector: 'activities',
  templateUrl: './activities.template.html',
  styleUrls: [ './activities.styles.css' ]
})
export class ActivitiesComponent implements OnInit {
  activities:object[];
  title: string;
  description: string;

  activitySubmit = () => {
    this.activities.push({
      'title': this.title,
      'description': this.description,
      'logs': []
    });
    window.sessionStorage.setItem('activities', JSON.stringify(this.activities));
  }

  constructor() {
  }

  ngOnInit() {
    if(!window.sessionStorage.getItem('activities')) {
      window.sessionStorage.setItem('activities', JSON.stringify(JSONActivities));
    }

    this.activities = JSON.parse(window.sessionStorage.getItem('activities'));
  }
}
