import { ISuperheroModel } from "../models/superheroModel";
import { ISuperHeroRepo } from "../repository/superheroRepository";

export class ISuperHeroService {
    private readonly superheroRepo: ISuperHeroRepo;

    constructor() {
        this.superheroRepo = new ISuperHeroRepo();
    }

    saveSuperheroService(superhero: ISuperheroModel): void {
        this.superheroRepo.saveSuperheroRepo(superhero);
    }

    getAllSuperheroesService(): ISuperheroModel[] {
        const allSuperheros = this.superheroRepo.getAllSuperheroesRepo();
        // sort the superheros by humility score in descending order
        return allSuperheros.sort((a, b) => b.humilityScore - a.humilityScore);
    }
}