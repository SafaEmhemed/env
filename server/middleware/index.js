import compose from 'koa-compose';
import convert from 'koa-convert';
import helmet from 'koa-helmet';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import config from '../../config/config';
import methodOverride from 'koa-methodoverride';
import handleError from './handle-error';

const middlewares = [
	helmet(),
	convert(cors()),
	convert(bodyParser()),
	convert(methodOverride())
];
console.log(config.environment);
if (config.environment === 'development'){
	middlewares.push(convert(logger()));
}

middlewares.push(handleError());
/**
 * Export
 */
export default function(){
	return compose(middlewares);
}
