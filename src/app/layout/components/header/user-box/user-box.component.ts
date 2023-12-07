import { Component } from '@angular/core';
import { ThemeOptions } from 'src/app/theme-options';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent {
  constructor(public globals: ThemeOptions) {
  }
}
