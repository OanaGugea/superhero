import express from 'express';
import { AnyObjectSchema } from "yup";

export const validate = (schema: AnyObjectSchema) => async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        req.body = await schema.validate(req.body, { abortEarly: false, stripUnknown: true });
        next();
    } catch (err: any) {
        res.status(400).json({ error: err.errors });
    }
};
