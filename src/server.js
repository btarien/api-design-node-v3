import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const router = express.Router()

router
  .route('/cat')
  .get((req, res) => {
    res.send({ message: 'get cat' })
  })
  .post((req, res) => {
    res.send({ message: 'post cat', body: req.body })
  })
router
  .route('/cat/:id')
  .get((req, res) => {
    res.send({ message: 'get cat with id' })
  })
  .post((req, res) => {
    res.send({ message: 'post cat with id', body: req.body })
  })

app.use('/', router)

app.get('/', (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'okay' })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server listening on port 3000')
  })
}
