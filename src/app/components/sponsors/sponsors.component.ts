import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('#myCarousel').carousel({
          interval: 4000
      })

      $('.carousel .item').each(function(){
          var next = $(this).next();
          if (!next.length) {
              next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));

          for (var i=0;i<4;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
              }

              next.children(':first-child').clone().appendTo($(this));
          }
      });
  }

}
