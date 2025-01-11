import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Experience } from "src/app/model/experience";
import { ExperienceServiceService } from "src/app/service/experience-service.service";

@Component({
  selector: "app-edit-experience",
  templateUrl: "./edit-experience.component.html",
  styleUrls: ["./edit-experience.component.css"],
})
export class EditExperienceComponent implements OnInit{
  // modifico null
  expWork = new Experience ("","");

  constructor(
    private expService: ExperienceServiceService,
    private activatedRouter: ActivatedRoute,// Accede a los parámetros de la URL
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.detail(id).subscribe(
      data=> {
        this.expWork= data;
      }, err =>{
        alert("Error al cargar experiencia")
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.update(id , this.expWork).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar experiencia")
      }
    )
  }
}
