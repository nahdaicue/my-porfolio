import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent {
nameStudy: string= "";
descriptionStudy:string = "";

constructor(private educationService:EducationService, private router:Router){}

onCreate() {
const education = new Education (this.nameStudy, this.descriptionStudy);
this.educationService.save(education).subscribe(
  (data)=>{
    alert("Educación añadida");
    this.router.navigate(['']);
  },(err)=>{
    alert("No se pudo añadir educación");
    this.router.navigate(['']);
  }
)
}

}
