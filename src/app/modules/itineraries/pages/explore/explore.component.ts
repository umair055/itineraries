import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { CustomDropdownMenuService } from '../../../../services/core/custom-dropdown-menu.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  ICONS = ICONS;

  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('itineraries');
  }

  constructor(public customMenuList: CustomDropdownMenuService) {}

  handleSearchStringChange($event: string) {}

  clear(): void {}
}
