import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'activity',
  templateUrl: './group.template.html',
  styleUrls: [ './group.styles.css' ]
})
export class GroupComponent implements OnInit {
  groups: object[];
  group: object;
  from: string;
  to: string;
  amount: number;
  date: string;
  reason: string;

  constructor(private route: ActivatedRoute) {
  }

  logSubmit = () => {
    this.groups['logs'].push({
      'from': this.from,
      'to': this.to,
      'amount': this.amount,
      'date': this.date,
      'reason': this.reason
    });
    this.groups.forEach((act) => {
      if(act['title'] === this.group['title']) {
        act['logs'] = this.group['logs'];
      }
    });
    window.sessionStorage.setItem('activities', JSON.stringify(this.groups));
  }

  ngOnInit() {
    // window.alert(this.route.snapshot.paramMap.get('title'));
    this.groups = JSON.parse(window.sessionStorage.getItem('groups'));
    const title: string = decodeURIComponent(this.route.snapshot.paramMap.get('title'));
    this.groups.forEach((act) => {
      if(act['title'] === title) {
        this.group = act;
      }
    });
  }
}
