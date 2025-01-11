import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NewExperienceComponent } from "./components/experience/new-experience.component";
import { EditExperienceComponent } from "./components/experience/edit-experience.component";
import { NewEducationComponent } from "./components/education/new-education.component";
import { EditEducationComponent } from "./components/education/edit-education.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "new-experience", component: NewExperienceComponent },
  { path: "edit-experience/:id", component: EditExperienceComponent },
  { path: "new-education", component: NewEducationComponent},
  { path: "edit-education/:id", component: EditEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
