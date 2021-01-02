import { Router } from 'express'
import * as UserCtrl from './controller'
const router = Router()

router.get('/users', UserCtrl.getUsers)
router.get('/users/:id', UserCtrl.getUser)
router.post('/users', UserCtrl.createUser)
router.put('/users/:id', UserCtrl.updateUser)
router.delete('/users/:id', UserCtrl.deleteUser)

export default router