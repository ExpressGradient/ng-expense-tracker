import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'activity',
  templateUrl: './activity.template.html',
  styleUrls: [ './activity.styles.css' ]
})
export class ActivityComponent implements OnInit {
  activities: object[];
  activity: object;
  from: string;
  to: string;
  amount: number;
  date: string;
  reason: string;

  constructor(private route: ActivatedRoute) {
  }

  logSubmit = () => {
    this.activity['logs'].push({
      'from': this.from,
      'to': this.to,
      'amount': this.amount,
      'date': this.date,
      'reason': this.reason
    });
    this.activities.forEach((act) => {
      if(act['title'] === this.activity['title']) {
        act['logs'] = this.activity['logs'];
      }
    });
    window.sessionStorage.setItem('activities', JSON.stringify(this.activities));
  }

  ngOnInit() {
    // window.alert(this.route.snapshot.paramMap.get('title'));
    this.activities = JSON.parse(window.sessionStorage.getItem('activities'));
    const title: string = decodeURIComponent(this.route.snapshot.paramMap.get('title'));
    this.activities.forEach((act) => {
      if(act['title'] === title) {
        this.activity = act;
      }
    });
  }
}
