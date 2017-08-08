/**
 * Created by mohn93 on 6/2/2017.
 */
import {
	REGISTER_PARALLAX,
	CLASS_STICKY_MENU,
	REGISTER_STICKY_MENU_APPEAR,
	REGISTER_SCROLL_TOP
} from './index';

/**
 * Register appear function menu
 */
export function registerAppear(func){
	return {
		type: REGISTER_STICKY_MENU_APPEAR,
		payload: func
	};
}

/**
 * Register parallax scroller
 */
export function registerParallax(ref){
	return {
		type: REGISTER_PARALLAX,
		payload: ref
	};
}

/**
 * Change menu class
 */
export function addClass(c){
	return {
		type: CLASS_STICKY_MENU,
		payload: c
	};
}

/**
 * scroll top constroller
 */
export function registerScrollTop(c){
	return {
		type: REGISTER_SCROLL_TOP,
		payload: c
	};
}
