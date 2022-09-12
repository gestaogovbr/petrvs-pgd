import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
  @Input() url: string = "./assets/images/profile.png";
  @Input() urlError: string = "./assets/images/profile.png";
  @Input() size: number = 25;
  @Input() hint?: string;
  @Input() click?: () => void;

  constructor() { }

  ngOnInit(): void {
  }

  public onError(event: ErrorEvent) {
    (event.target as any).src = this.urlError
    //return "this.src='" +  + "'";
  }

  public onClick(event: Event) {
    if(this.click) this.click();
  }

}
