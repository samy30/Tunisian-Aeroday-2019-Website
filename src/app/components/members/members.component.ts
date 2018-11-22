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

  changeMember(index){
      for (let j = 0 ; j <= 24 ; j++ ) {
          this.membersArray[j] = false;
      }
      this.membersArray[index] = true;
      console.log(this.membersArray);
      let description = document.getElementById('description' + index);
      let description0 = document.getElementById('description0');
      description0.style.display = 'none' ;
      description.style.display = 'block' ;
  }

}
