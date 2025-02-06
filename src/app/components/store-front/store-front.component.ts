import { Component } from '@angular/core';
import { StoreItem } from '../../interfaces/store-item';
import { MatDialog } from '@angular/material/dialog';
import { KitPreviewComponent } from '../kit-preview/kit-preview.component';
@Component({
  selector: 'app-store-front',
  standalone: true,
  imports: [],
  templateUrl: './store-front.component.html',
  styleUrl: './store-front.component.css'
})
export class StoreFrontComponent {
  constructor(private dialog: MatDialog) {}
  items: StoreItem[] = [
    {
      title: "All-In", description: "Item_Description", price: 59.99, icon: "../../../assets/Assault Rifle.png", category: "", videoUrl: "../../../assets/Kit All-In.mp4" },
    { title: "MVP+ Lifetime", description: "Item_Description", price: 20, icon: "../../../assets/Assault Rifle.png", category: "Undefined", videoUrl: "" },
    { title: "MVP Lifetime", description: "Item_Description", price: 17.5, icon: "../../../assets/Assault Rifle.png", category: "Undefined", videoUrl: "" },
    { title: "VIP+ Lifetime", description: "Item_Description", price: 12.89, icon: "../../../assets/Assault Rifle.png", category: "Undefined", videoUrl: "" },
    { title: "VIP Lifetime", description: "Item_Description", price: 10, icon: "../../../assets/Assault Rifle.png", category: "Undefined", videoUrl: "" },
    { title: "Components", description: "Item_Description", price: 17.49, icon: "../../../assets/Metal Spring.png", category: "Undefined", videoUrl: "" },
    { title: "Auto Farmer", description: "Uses: Infinity\nCooldown: 1 Hour", price: 24.99, icon: "../../../assets/Jackhammer.png", category: "Special", videoUrl: ""},
    { title: "Extreme Farmer", description: "Item_Description", price: 0, icon: "../../../assets/Jackhammer.png", category: "Undefined", videoUrl: "" },
    { title: "Salvaged Farmer", description: "Item_Description", price: 3.99, icon: "../../../assets/Salvaged Pickaxe.png", category: "Undefined", videoUrl: "" },
    { title: "Bow", description: "Item_Description", price: 0, icon: "../../../assets/Hunting Bow.png", category: "Free", videoUrl: "" },
    { title: "Food", description: "Item_Description", price: 0, icon: "../../../assets/Apple.png", category: "Free", videoUrl: "" },

  ]

  previewKit(item: StoreItem) {
    this.dialog.open(KitPreviewComponent, {
      data: item
    })
  }
}
