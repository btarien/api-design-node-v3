import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get((req, res) => {
    res.send({ message: 'get item' })
  })
  .post((req, res) => {
    res.send({ message: 'post item' })
  })

router
  .route('/:id')
  .get((req, res) => {
    res.send({ message: 'get item with id' })
  })
  .put((req, res) => {
    res.send({ message: 'delete item with id' })
  })
  .delete((req, res) => {
    res.send({ message: 'post item with id' })
  })

export default router
