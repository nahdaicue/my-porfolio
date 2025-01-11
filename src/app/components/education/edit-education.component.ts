import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Education } from "src/app/model/education";
import { EducationService } from "src/app/service/education.service";

@Component({
  selector: "app-edit-education",
  templateUrl: "./edit-education.component.html",
  styleUrls: ["./edit-education.component.css"],
})
export class EditEducationComponent implements OnInit{
  education: Education | null = null;

  constructor(
    private educationService: EducationService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  //OnInit
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.educationService.detail(id).subscribe(
      (data)=>{
        this.education = data;
      },(err)=>{
        alert("No se pudo encontrar el id");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    if (this.education) {
      this.educationService.update(id, this.education).subscribe(
        (data) => {
          alert("Se pudo actualizar correctamente");
          this.router.navigate(['']);
        },
        (err) => {
          alert("No se pudo actualizar");
          this.router.navigate(['']);
        }
      );
    } else {
      alert("No hay datos para actualizar");
    }
  }
}
