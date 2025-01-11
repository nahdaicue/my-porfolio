import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Experience } from "src/app/model/experience";
import { ExperienceServiceService } from "src/app/service/experience-service.service";

@Component({
  selector: "app-new-experience",
  templateUrl: "./new-experience.component.html",
  styleUrls: ["./new-experience.component.css"],
})
export class NewExperienceComponent implements OnInit {
  // Constructor
  constructor(
    private expService: ExperienceServiceService,
    private router: Router
  ) {}

  // Variables
  nameExp: string = "";
  descriptionExp: string = "";

  ngOnInit(): void {}

  
  onCreate(): void {
    const exp = new Experience(this.nameExp, this.descriptionExp);
    this.expService.save(exp).subscribe(
      (data: Experience) => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      (err: HttpErrorResponse) => {
        alert('Error al cargar');
        console.error(err);
      }
    );
  }
  
}