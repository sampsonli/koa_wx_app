/**
 * Created by lichun on 2016/11/15.
 */
import Router from 'koa-router'
let route = new Router
route.get('/', (ctx)=> {
    ctx.body = {success:true}
})


export default function (app) {
    app.use(route.routes())
    app.use(route.allowedMethods())
}