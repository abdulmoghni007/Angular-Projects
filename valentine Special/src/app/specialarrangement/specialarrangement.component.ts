import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-specialarrangement',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl:'./specialarrangement.component.html',
  styleUrl: './specialarrangement.component.css'
})
export class SpecialarrangementComponent {
  service:any;
  restaurant:any;
  people:any;
  Date:any;
 mobile:any;

 book(){

 }



}
