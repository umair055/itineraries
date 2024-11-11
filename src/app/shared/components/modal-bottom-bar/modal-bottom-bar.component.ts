import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-modal-bottom-bar',
  templateUrl: './modal-bottom-bar.component.html',
  styleUrl: './modal-bottom-bar.component.scss',
})
export class ModalBottomBarComponent {
  @Input() okText!: string;
  @Input() cancelText!: string;
  @Output() ok = new EventEmitter<MouseEvent>();
  @Output() cancel = new EventEmitter<MouseEvent>();

  onOk(): void {
    this.ok.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
