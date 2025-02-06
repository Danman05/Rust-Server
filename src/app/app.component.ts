import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KitPreviewComponent } from "./components/kit-preview/kit-preview.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KitPreviewComponent, MatDialogModule, StoreFrontComponent, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RustWeb';

  constructor( private dialog:MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(KitPreviewComponent, {
      width: '500px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
