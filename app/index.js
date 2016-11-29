import Koa from 'koa'
import routing from './routes'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import server from 'koa-static'
import path from 'path'
import cors from './middleware/cors'
const app = new Koa();
app.use(cors)
app.use(logger())
app.use(server(path.join(__dirname, '../../static'),{
// app.use(server('/home/project/sampsonapp/dist/',{
    gzip: true,
    maxage: 60 * 30
}))
app.use(bodyParser())
routing(app)
export default app

