import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  persona: Persona = new Persona("Nahuel"," ","");

  constructor(private personaService: PersonaService){}
  
  ngOnInit(): void {
  this.personaService.getPersona().subscribe(data => {
    if (data.length > 0) {
      this.persona = data[0]; // Obtén la primera persona del arreglo.
    }
    console.log('Datos recibidos:', this.persona);
  }, error => {
    console.error('Error al obtener los datos:', error);
  });
}

}
