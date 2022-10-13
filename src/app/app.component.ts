import { Component } from '@angular/core';
import { Employes } from './models/employes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employesArray: Employes[] = [
    {id: 1, name:"Alex",country:"ECU"},
    {id: 2, name:"Olga",country:"ECU"},
    {id: 3, name:"Lenin",country:"ECU"}
  ];
  selectedEmployes: Employes = new Employes();
  openForEdit(employes:Employes){
    this.selectedEmployes = employes;

  }

  addOrEdit(){
    if (this.selectedEmployes.id === 0) {      
      this.selectedEmployes.id = this.employesArray.length+1;
      this.employesArray.push(this.selectedEmployes);      
    }
    this.selectedEmployes = new Employes();
  }
  delete(){
    if (confirm('Esta seguro de Eliminar!')) {      
      this.employesArray = this.employesArray.filter(X => X != this.selectedEmployes);
      this.selectedEmployes = new Employes();      
    }
  }

}
