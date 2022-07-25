import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'angularapi';

  modalSwitch!: boolean;
//firebase//


//firebase//
    constructor(){

  }
ngOnInit(){

}





  abrirmodal(){
    this.modalSwitch=true;
  }

}


