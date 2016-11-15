import Koa from 'koa'
import routing from './routes'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import cors from './middleware/cors'
const app = new Koa();
app.use(cors)
app.use(logger())
app.use(bodyParser())
routing(app)
export default app

