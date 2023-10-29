import express, {Request, Response} from 'express'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(() => {
    const app = express()
    

    app.use(express.json())

    app.get('/', (_request: Request, response: Response) =>{
        response.json({message: 'Olá, Mundo'})
    })

    return app.listen(process.env.PORT)
})