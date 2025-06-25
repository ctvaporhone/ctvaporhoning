import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
  @Input() imageSrc!: string;
  isOpen = false;

  openModal(imageSrc: string) {
    this.imageSrc = imageSrc;
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
