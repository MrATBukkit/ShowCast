import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    divIf = false;
    names: string[] = ['Hermann', 'Sweety', 'Florian'];
    ngOnInit(): void {
      setTimeout(() => {
          this.title = 'this is a test';
          this.divIf = true;
          this.names.push('Alex');
      }, 10000);
    }
}
