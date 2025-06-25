import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent{
   gridCols = 3;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      '(max-width: 599.98px)',    // phones
      '(min-width: 600px) and (max-width: 959.98px)',  // tablets
      '(min-width: 960px)'        // desktops
    ]).subscribe(result => {
      const breakpoints = result.breakpoints;

      if (breakpoints['(max-width: 599.98px)']) {
        this.gridCols = 1;
      } else if (breakpoints['(min-width: 600px) and (max-width: 959.98px)']) {
        this.gridCols = 2;
      } else if (breakpoints['(min-width: 960px)']) {
        this.gridCols = 3;
      }
    });
  
  }

  @ViewChild('imageModal') imageModal!: ImageModalComponent;
  menuOpen:boolean = false;
  openImageModal(event: Event) {
    const imageElement = event.target as HTMLImageElement;
    const imageSrc = imageElement.src.replace('thumbnail', 'fullsize'); // Adjust the path if needed
    this.imageModal.openModal(imageSrc);
  }

  menu()
  {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }
}
