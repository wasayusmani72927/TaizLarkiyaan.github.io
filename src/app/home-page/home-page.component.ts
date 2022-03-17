import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

declare var $: any;


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}


  ngOnInit() {
    this._snackBar.open("Are you ready to explore this land? Move your cursor to sightsee!","", {horizontalPosition: 'right', duration: 8000});
    $("img[usemap]:first").mapify({
      hoverClass: "drop-hover",
      popOver: {
        content: function (zone) {
          if (zone.attr("data-title") == "Essential Agreements")
            return "<strong>" + zone.attr("data-title") + "</strong>" + "</br> This charter has been found among other artifacts of unknown origin. The text, written on organic...";
          else if (zone.attr("data-title") == "Fashion Zine")
            return "<strong>" + zone.attr("data-title") + "</strong>" + "</br> These found pages appear to be part of a personal fashion catalogue or a fashion zine. There...";
          else if (zone.attr("data-title") == "Poster")
            return "<strong>" + zone.attr("data-title") + "</strong>" + "</br> Upon discovering what appears to be a poster on swimming lessons, we get a deeper insight...";
          else
            return "<strong>" + zone.attr("data-title") + "</strong>";
        },
        delay: 0.7,
        margin: "15px",
        height: "130px",
        width: "260px"
      },
      onAreaHighlight: function () {
        console.log("onAreaHighlight callback");
      },
      onMapClear: function () {
        console.log("onMapClear callback");
      }
    });


  }
}
