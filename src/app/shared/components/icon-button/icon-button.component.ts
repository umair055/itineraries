import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent implements OnInit{
  @Input() iconPath!: string;
  @Input() text!: string;
  @Input() customClass: string = "";
  @Input() height: string = '12';
  @Input() width: string = '13';
  @Input() disabled: boolean = false;
  @Input() type!: string;
  @Output() clickFunction = new EventEmitter<any>();
  constructor() {
    console.log('icon button component');

  }

  ngOnInit(): void {
    console.log(this.iconPath)
  }

  clickFunc(){
    this.clickFunction.emit();
  }
}
