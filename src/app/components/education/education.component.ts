import { Component, OnInit } from "@angular/core";
import { Education } from "src/app/model/education";
import { EducationService } from "src/app/service/education.service";
import { TokenService } from "src/app/service/token.service";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.loadEducation();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadEducation(): void {
    this.educationService.list().subscribe((data) => {
      this.education = data;
    },(err) => {
      alert("Error al cargar educación");
      console.error(err);
    },
  );
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educationService.delete(id).subscribe(
        (data) => {
          this.loadEducation();
        },
        (err) => {
          alert("error de eliminacion");
        }
      );
    }
  }
}
