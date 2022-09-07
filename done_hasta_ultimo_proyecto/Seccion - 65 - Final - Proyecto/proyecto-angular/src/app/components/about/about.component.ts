import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../../assets/scss/components.scss']
})
// ../../assets/scss/components.scss
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public subtitle2: string;

  constructor() { 
    this.title = "Mario Cabrero Volarich"
    this.subtitle = "Desarrollador informático"
    this.subtitle2 = "cv2mario@gmail.com"
  }

  ngOnInit(): void {
  }

}
