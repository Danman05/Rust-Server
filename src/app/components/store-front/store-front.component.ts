import { Component } from '@angular/core';
import { StoreItem } from '../../interfaces/store-item';
import { MatDialog } from '@angular/material/dialog';
import { KitPreviewComponent } from '../kit-preview/kit-preview.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-store-front',
  standalone: true,
  imports: [MatSlideToggle, FormsModule, DecimalPipe],
  templateUrl: './store-front.component.html',
  styleUrl: './store-front.component.css'
})
export class StoreFrontComponent {
  constructor(private dialog: MatDialog) {}

  isChecked = false;

  items: StoreItem[] = [
    { title: "All-In", description: "Item_Description", price: 59.99, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", videoUrl: "../../../assets/video/Kit All-In.mp4" },
    { title: "MVP+", description: "Item_Description", price: 20, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", videoUrl: "" },
    { title: "MVP", description: "Item_Description", price: 17.5, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", videoUrl: "" },
    { title: "VIP+", description: "Item_Description", price: 12.89, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", videoUrl: "" },
    { title: "VIP", description: "Item_Description", price: 10, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", videoUrl: "" },
    { title: "Components", description: "Item_Description", price: 17.49, icon: "../../../assets/image/Metal Spring.png", category: "Undefined", videoUrl: "" },
    { title: "Auto Farmer", description: "Item_Description", price: 24.99, icon: "../../../assets/image/Jackhammer.png", category: "Special", videoUrl: ""},
    { title: "Extreme Farmer", description: "Item_Description", price: 5.99, icon: "../../../assets/image/Jackhammer.png", category: "Undefined", videoUrl: "" },
    { title: "Salvaged Farmer", description: "Item_Description", price: 3.99, icon: "../../../assets/image/Salvaged Pickaxe.png", category: "Undefined", videoUrl: "" },
  ]

  previewKit(item: StoreItem) {
    this.dialog.open(KitPreviewComponent, {
      data: item
    })
  }
}
