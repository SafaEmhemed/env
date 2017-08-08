/**
 * Created by mohn93 on 6/1/2017.
 */

import Router from 'koa-router';
import send from 'koa-send';
import convert from 'koa-convert';
import path from 'path';
// Routes
import api from './api';

const router = new Router();

// UI

router.get('/', async (ctx) => {
  // hook the '/' path to '/dist/index.html' folder
	console.log(ctx.path);
	await convert(send)(ctx, '/', { root: path.resolve(path.join(__dirname, '/../../dist/index.html')) });
});

router.get('/(.*)\\.(.*)', async (ctx) => {
  // hook the '/***.**' path to '/dist/' folder
	console.log(ctx.path);
	await convert(send)(ctx, ctx.path, { root: path.resolve(path.join(__dirname, '/../../dist/')) });
});

router.use(api.routes());

export default router;
