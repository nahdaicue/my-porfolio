export class Experience {

    id?: number;
    nameExp: string;
    descriptionExp: string;

    constructor(nameExp:string, descriptionExp: string){
        this.nameExp= nameExp;
        this.descriptionExp = descriptionExp;
    }
}
