import express, {Request, Response} from 'express'
import { AppDataSource } from './data-source'
import routes from '../routes';

AppDataSource.initialize().then(() => {
    
    const app = express()

    app.use(express.json())

    app.use(routes)

    return app.listen(`Server is running in ${process.env.PORT}`)
})