import express, { Request, Response, NextFunction } from 'express'
import * as dotenv from 'dotenv'

import routes from './routes/routes.js'
import { ddbbConnection } from './config/ddbb.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api', routes)

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(400).send(error.message)
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(ddbbConnection())
  console.log(`Server on PORT ${PORT}`)
})
