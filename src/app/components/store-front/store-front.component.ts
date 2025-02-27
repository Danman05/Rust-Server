import { Component } from '@angular/core';
import { StoreItem } from '../../interfaces/store-item';
import { MatDialog } from '@angular/material/dialog';
import { KitPreviewComponent } from '../kit-preview/kit-preview.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { StoreDataService } from '../../services/store-data.service';
import { environment } from '../../../environments/environment.development';
@Component({
  selector: 'app-store-front',
  standalone: true,
  imports: [MatSlideToggle, FormsModule, DecimalPipe],
  templateUrl: './store-front.component.html',
  styleUrl: './store-front.component.css'
})
export class StoreFrontComponent {
  constructor(
    private dialog: MatDialog,
    private store_service: StoreDataService
  ) {}

  ngOnInit() {
    this.store_service.getItems().subscribe({
      next: (res) => { 
        this.items = res
      },
      error: (err) => console.log(err) 
    })
  }
  assets = environment.ASSETS_URL
  isChecked = false;
  items: StoreItem[] = []

  previewKit(item: StoreItem) {
    this.dialog.open(KitPreviewComponent, {
      data: item
    })
  }
}
