/**
 * Created by lichun on 2016/11/15.
 */
import Router from 'koa-router'
let route = new Router
route.get('/api/hello', (ctx)=> {
    ctx.body = {success:'I love you'}
})


export default function (app) {
    app.use(route.routes())
    app.use(route.allowedMethods())
}