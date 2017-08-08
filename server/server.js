import Koa from 'koa';
import router from './router';
import middleware from './middleware';
import config from '../config/config';
import IO from 'koa-socket';

const app = new Koa();
const io = new IO();
app.use(async(ctx, next) => {
	ctx.set('Access-Control-Allow-Credentials', 'true');
	ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');

	await next();
});
app.use(router.routes());

app.use(middleware());

io.on('message', (ctx, data) => {
	console.log(`message: ${data}`);
	io.broadcast('response', 'hi from server with Socket');
});
io.attach(app);

app.listen(config.server.port);

console.log(`App started on port ${config.server.port} with environment ${config.environment}`);
