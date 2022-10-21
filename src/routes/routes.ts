import express from 'express'
import userRouter from './user-routes.js' // Route referent to USERS collection CRUD

const routes = express.Router()

// Main route
routes.use('/users', userRouter)

export default routes
