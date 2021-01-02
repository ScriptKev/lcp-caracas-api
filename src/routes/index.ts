import { RequestHandler, Router } from 'express'
const router = Router()
import { Routes } from '../api-services/users'

const Main: RequestHandler = router.get('/', (req, res) => {
  res.send({
    message: 'Go to /api/users',
    next: 'http://localhost:4000/api/users'
  })
})

const NotFound: RequestHandler = (req, res, next) => {
  res.status(404).send({
    message: '404 not found',
    next: 'http://localhost:4000/api'
  })
}

export {
  Main,
  Routes as UserRoutes,
  NotFound
}