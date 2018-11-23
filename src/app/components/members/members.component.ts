import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

    membersArray: boolean[] = [] ;
  constructor() { }

  ngOnInit() {
      this.membersArray.push(true);
      for (let j = 0 ; j < 24 ; j++ ) {
          this.membersArray.push(false);
      }
  }

}
