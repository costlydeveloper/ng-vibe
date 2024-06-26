import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { IMenuItem, MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'ng-vibe-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [RouterLink, RouterLinkActive, NgClass, MenuItemComponent],
})
export class SidebarComponent {
  menuItems: IMenuItem[] = [
    new MenuItem('Drawer', true, 'drawer'),
    new MenuItem('Dialog', true, 'dialog'),
    new MenuItem('Toastify', true, 'toastify'),
    new MenuItem('Timer', true, 'timer'),
    new MenuItem('Color', true, 'color'),
    new MenuItem('Service Locator', true, 'service-locator'),
  ];

  menuType = (item: IMenuItem): IMenuItem => item;
}
