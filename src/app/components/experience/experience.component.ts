import { Component, OnInit } from "@angular/core";
import { Experience } from "src/app/model/experience";
import { ExperienceServiceService } from "src/app/service/experience-service.service";
import { TokenService } from "src/app/service/token.service";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent implements OnInit {
  exp: Experience[] = [];

  constructor(
    private expService: ExperienceServiceService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.loadExp();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExp(): void {
    this.expService.lista().subscribe({
      next: (data) => {
        this.exp = data;
      },
      error: (err) => {
        alert("Error al cargar experiencias");
        console.error(err);
      },
    });
  }

  delete(id?: number) {
    if (id !== undefined) {
      this.expService.delete(id).subscribe(
        (data) => {
          this.loadExp();
        },
        (err) => {
          alert("No se pudo eliminar la experiencia");
        }
      );
    }
  }
}
