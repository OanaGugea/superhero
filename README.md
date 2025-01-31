# superhero

This repository is a simple NodeJS application for superheros management. The data is saved in a local file (output.json).

There are 2 API's available:
- GET /api/superheroes -> that returns the list of known superheros sorted descending by humility score
- POST /api/superheroes -> creates a new superhero based on the request. The request should have the following structure:

```json
{
    "name": "<superheroName>",
    "superpower": "<superpower>",
    "humilityScore": 9
}
```

Start the application with the server running on port 3000:

```bash
npm start
```

<u>Team collaboration:</u> in order to extend this API or improve it I would discuss with the team, decide on what we want and document the expected inputs and outputs and then based on this I woul start the implementation.

<u>If I had more time, I would:</u> 
- create the whole CRUD operations for the superhero entity
- save the data in a database (probably relational, based on the current description, because we can retrieve the data directly sorted)
- add a validation on name to ensure unicity


