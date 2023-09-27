import express ,{json} from 'express'
import ownerRouter from './owners.js'
import resturentRouter from './resturant.js'
import ratingRouter from './rating.js'

const server = express()

server.use(json())
server.use("/api/owners",ownerRouter)
server.use("/api/resturents",resturentRouter)
server.use("/api/ratings",ratingRouter)

export default server