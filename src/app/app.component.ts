import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  exibir: boolean;
  labelButton: string = 'Exibir';

  toggleShow(): void {
    this.exibir = !this.exibir;

    if (this.exibir) {
      this.labelButton = 'Ocultar';
    }

    if (!this.exibir) {
      this.labelButton = 'Exibir';
    }
  }
}
