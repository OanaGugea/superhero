import * as fs from 'fs';
import { ISuperheroModel } from "../models/superheroModel";

export class ISuperHeroRepo {

    private readonly databaseName = "output.json";

    saveSuperheroRepo(superhereo: ISuperheroModel): void {
        // Append the JSON object to the file
        fs.appendFile(this.databaseName, `${JSON.stringify(superhereo)}\n`, (err) => {
            if (err) {
                console.error("Error appending to file", err);
            } else {
                console.log("Data successfully appended to", this.databaseName);
            }
        });
    }

    getAllSuperheroesRepo(): ISuperheroModel[] {
        // Read the file and the data saved in it
        const data = fs.readFileSync(this.databaseName, 'utf8');
        // Split the data by newline and parse each line as JSON only if it has content
        const parsedData = data.split("\n").map((line) => {
            if (line.length > 0) {
                return JSON.parse(line);
            }
            return null;

        })
        // Filter out the null values
        return parsedData.filter((line) => line !== null);
    }
}