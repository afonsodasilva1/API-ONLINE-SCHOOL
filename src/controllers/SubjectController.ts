import { Request, Response } from "express";

export class SubjectController{
    async create (req: Request, res: Response)
    {
        //Criar disciplina 
        const { name } = req.body

        if(!name)
        {
             return res.status(400).json({msm: 'O nome é obrigatório'})
        }

        try
        {
            
        }catch (error)
        {
            console.log(error)

            res.status(500).json({msg: 'Internal Server Error'})
        }
    }
}