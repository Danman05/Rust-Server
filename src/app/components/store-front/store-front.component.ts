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
  // items: StoreItem[] = [
  //   { title: "All-In", description: "Item_Description", price: 59.99, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", video_url: "../../../assets/video/Kit All-In.mp4", tebex_url: "", duration: "", id: "" },
  //   { title: "MVP+", description: "Item_Description", price: 20, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", video_url: "", tebex_url: "", duration: "", id: "" },
  //   { title: "MVP", description: "Item_Description", price: 17.5, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", video_url: "", tebex_url: "", duration: "", id: "" },
  //   { title: "VIP+", description: "Item_Description", price: 12.89, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", video_url: "", tebex_url: "", duration: "", id: "" },
  //   { title: "VIP", description: "Item_Description", price: 10, icon: "../../../assets/image/Assault Rifle.png", category: "Undefined", video_url: "", tebex_url: "", duration: "", id: "" },
  //   { title: "Components", description: "Item_Description", price: 17.49, icon: "../../../assets/image/Metal Spring.png", category: "Undefined", video_url: "", tebex_url: "", duration: "", id: "" },
  //   { title: "Auto Farmer", description: "Item_Description", price: 24.99, icon: "../../../assets/image/Jackhammer.png", category: "Special", video_url: "", tebex_url: "", duration: "", id: "" },
  //   { title: "Extreme Farmer", description: "Item_Description", price: 5.99, icon: "../../../assets/image/Jackhammer.png", category: "Undefined", video_url: "", tebex_url: "", duration: "", id: "" },
  //   { title: "Salvaged Farmer", description: "Item_Description", price: 3.99, icon: "../../../assets/image/Salvaged Pickaxe.png", category: "Undefined", video_url: "", tebex_url: "", duration: "", id: ""},
  // ]

  previewKit(item: StoreItem) {
    this.dialog.open(KitPreviewComponent, {
      data: item
    })
  }
}
