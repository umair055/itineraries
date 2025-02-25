import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-serach-clear-history',
  templateUrl: './serach-clear-history.component.html',
  styleUrl: './serach-clear-history.component.scss',
})
export class SerachClearHistoryComponent {
  toggleModal = false;
  cssClasses = ['custom-modal-class'];
  ICONS = ICONS;

  openModal(): void {
    // Add your custom CSS classes
    this.toggleModal = true;
  }

  closeModal(): void {
    this.toggleModal = false;
  }
}
