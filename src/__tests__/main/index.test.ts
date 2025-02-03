import request from "supertest";
import app from "../../main";

describe("Superheros API Validation", () => {
    it("should get the superheros successfully", async () => {
        const response = await request(app)
            .get("/api/superheroes")
            .send();

        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull();
    });

    it("should throw error at creation because the humility score is not valid", async () => {
        const response = await request(app)
            .post("/api/superheroes")
            .send(
                {
                    "name": "Batman",
                    "superpower": "money",
                    "humilityScore": 20
                }
            );

        expect(response.status).toBe(400);
        expect(response.body.error).toContain("humilityScore must be less than or equal to 10");
    });
});
