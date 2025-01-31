import * as yup from "yup";

export const superheroValidator = yup.object({
    name: yup.string().required(),
    superpower: yup.string().required(),
    humilityScore: yup.number().required().min(0).max(10)
});