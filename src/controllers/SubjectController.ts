import { Request, Response } from "express";

export class SubjectController{
    async create (req: Request, res: Response)
    {
        //Criar disciplina 
        const { name } = req.body
    }
}