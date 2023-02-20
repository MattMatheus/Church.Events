import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'church-events';
  
  constructor(private modalService: NgbModal) {    
    console.log(environment.production);
  }

  public open(modal:any): void {
    this.modalService.open(modal);
  }

}
