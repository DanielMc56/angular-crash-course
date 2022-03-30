import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../../services/menu.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})




export class MenuComponent implements OnInit {
  
  @Output() onToggle: EventEmitter<any> = new EventEmitter();

  viewOptions: string[] =['Card View', 'Grid View'];
  selectedView = this.viewOptions[0];
  isDropDownBoxOpened= false;
  showView!: boolean;
  subscription!: Subscription;

  changeDropDownBoxValue = (args: any) => {
    this.selectedView = args.addedItems[0];
    this.isDropDownBoxOpened = false;
  }

  constructor() { 
  }

  ngOnInit(): void {
  }
  

  toggleViews(): void {
  this.onToggle.emit(this.viewOptions)
  }
}
