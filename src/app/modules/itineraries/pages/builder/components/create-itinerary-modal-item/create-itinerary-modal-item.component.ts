import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ModalService } from "src/app/services/core/modal/modal.service";

@Component({
  selector: "app-create-itinerary-modal-item",
  templateUrl: "./create-itinerary-modal-item.component.html",
  styleUrl: "./create-itinerary-modal-item.component.css",
})
export class CreateItineraryModalItemComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<any>();
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() shortTitle!: boolean;
  titleList: string[] = [];
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.titleList = !this.shortTitle ? this.title.split(",") : [this.title];
    this.modalService.bottomToggleModal = false;
  }

  clickEventEmitter() {
    this.clickEvent.emit();
  }

  backButton() {
    this.modalService.bottomToggleModal = !this.modalService.bottomToggleModal;
  }
}
