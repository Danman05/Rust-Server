import { Component, inject } from '@angular/core';
import { MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoreItem } from '../../interfaces/store-item';
@Component({
  selector: 'app-kit-preview',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './kit-preview.component.html',
  styleUrl: './kit-preview.component.css'
})
export class KitPreviewComponent {
  data: StoreItem = inject(MAT_DIALOG_DATA)


  formatDescription(description: string): string {
    return description.replace(/\n/g, '<br>');
  }
}
