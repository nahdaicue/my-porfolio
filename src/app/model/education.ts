export class Education {
  id?: number;
  nameEducation: string;
  descriptionEducation: string;

  constructor(nameEducation: string, descriptionEducation: string) {
    this.nameEducation = nameEducation;
    this.descriptionEducation = descriptionEducation;
  }
}
