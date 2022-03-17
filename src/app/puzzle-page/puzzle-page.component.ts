import {
  Component,
  OnInit
} from '@angular/core';
import {
  Lightbox
} from 'ngx-lightbox';

@Component({
  selector: 'app-puzzle-page',
  templateUrl: './puzzle-page.component.html',
  styleUrls: ['./puzzle-page.component.scss'],
})
export class PuzzlePageComponent implements OnInit {
  _albums = [{
    src: "./../../assets/EA1.jpg",
    thumb: "./../../assets/EA1.jpg"
  }, {
    src: "./../../assets/EA2.jpg",
    thumb: "./../../assets/EA2.jpg"
  }, {
    src: "./../../assets/EA3.jpg",
    thumb: "./../../assets/EA3.jpg"
  }];
  private _album: [];
  constructor(private _lightbox: Lightbox) {}

  ngOnInit(): void {}
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
