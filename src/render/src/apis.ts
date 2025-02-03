export const retrieveSuperherosList = async (): Promise<{
    name: string;
    superpower: string;
    humilityScore: number;
}[]> => {
    const response = await fetch('/api/superheroes');
    const data = await response.json();
    return data;
}

export const saveSuperhero = async (superhero: { name: string, superpower: string, humilityScore: number }): Promise<void> => {
    await fetch('/api/superheroes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(superhero),
    });
}