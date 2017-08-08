
import Router from 'koa-router';

const router = new Router({
	prefix: '/users'
});

router.post('/', async (ctx) => {
 // const { firstName, lastName, username, password } = ctx.request.body;

  // create user and respond to the client
	ctx.body = { res: 'done creating user' };

	ctx.status = 201;
});

router.get('/', async (ctx) => {
  // get user and respond to the client
	ctx.body = 'Hello from Server with api request';
	ctx.status = 200;
});

export default router;
