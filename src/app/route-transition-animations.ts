import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
	transition('One => Two, Two => Three, Three => Four, One => Four, One => Three, Two => Four', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 1 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('0.8s ease-in-out', style({ right: '100%', opacity: 1 }))]),
			query(':enter', [animate('0.8s ease-in-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('Four => Three, Three => Two, Two => One, Four => One, Three => One, Four => Two', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 1 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('0.8s ease-in-out', style({ left: '100%', opacity: 1 }))]),
			query(':enter', [animate('0.8s ease-in-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);
