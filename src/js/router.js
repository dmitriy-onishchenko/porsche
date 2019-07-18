import {Router} from 'ninelines-router';
import helpers from './helpers';
import timeline from './timeline';
import transition from './transition';

let router = new Router({
	onStart() {
		return new Promise((resolve, reject) => {
			if (helpers.canInteract()) {
				helpers.canInteract(false);
				resolve();
			} else {
				reject();
			}
		});
	},
	onEnter(fromState, toState) {
		if (helpers.isIE()) {
			return Promise.resolve();
		}

		return transition(fromState, toState);
	},
	onComplete() {
		helpers.canInteract(true);

		return Promise.resolve();
	},
	onNotFound() {
		document.location = '/';

		return Promise.reject();
	},
});

router.addRoute({
	path: '/',
	name: 'home',
});

router.addRoute({
	path: '/timeline/:id',
	name: 'timeline',
	onBeforeEnter(fromState, toState) {
		if (!timeline.exists(toState.params.id)) {
			return router.trigger('notFound');
		}

		return Promise.resolve();
	},
});

router.bindLinks();

router.resolve(location.pathname + location.search + location.hash, {
	method: 'none',
});

history.scrollRestoration = 'manual';

window.addEventListener('popstate', () => {
	if (helpers.canInteract()) {
		router.resolve(location.pathname + location.search + location.hash, {
			method: 'none',
		});
	} else {
		location.reload();
	}
});

export default router;
