import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import { Main, NotFound, UserRoutes } from './routes'
const app = express()

app.set('port', config.API.PORT)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) // la app entiende objetos json con las tipicas peticiones POST con datos
app.use(express.urlencoded({ extended: false })) // la app entiende los datos de los campos de formularios
app.use('/api', Main)
app.use('/api', UserRoutes)
app.use(NotFound)

export default app