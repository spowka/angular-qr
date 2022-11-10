import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'QR_Code';
  public value: string = '';
  public downloadQr: string | undefined = '';

  public handleInputChange(): void {
    const canvas = document.querySelector('canvas');
    const img = canvas?.toDataURL('image/png');
    this.downloadQr = img;
  }

  public onDownload(): void {
    this.value = '';
  }  
}
