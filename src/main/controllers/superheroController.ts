import express from 'express';
import { ISuperHeroService } from '../services/superheroServices';
import { validate } from '../middleware/validation';
import { superheroValidator } from '../models/superheroValidator';

export function SuperheroController(app: express.Application) {
    const superheroService = new ISuperHeroService();

    app.get('/api/superheroes', (req: express.Request, res: express.Response) => {
        const response = superheroService.getAllSuperheroesService();
        res.status(200).json(response);
    });

    // ensure request body is validated before calling the service
    app.post('/api/superheroes', validate(superheroValidator), (req: express.Request, res: express.Response) => {
        superheroService.saveSuperheroService(req.body);
        res.status(201).send();
    });
}