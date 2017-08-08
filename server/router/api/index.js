
import Router from 'koa-router';
// Routes
import Users from './routes/user/index';

const router = new Router({
	prefix: '/api'
});

router.use(Users.routes());

export default router;
