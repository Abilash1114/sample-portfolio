import { AfterViewInit, Component } from '@angular/core';
declare function text() :any
declare function me() :any
declare function sec() :any
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    text();
    me();
    sec();
  }

}
