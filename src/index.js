import 'impress.js';
import 'highlight.js';

import angularAnimate from 'angular-animate';
import angularUIBootstrap from 'angular-ui-bootstrap';

import env from './scripts/common/env.js';
import debug from './scripts/common/debug.js';

import directives from './scripts/directives/index.js';
import services from './scripts/services/index.js';

export const angularTutorial = angular.module('angularTutorial', [
angularAnimate,
angularUIBootstrap,
env,
debug,
directives,
services
]);

import config from './scripts/common/config.js';
angularTutorial.config(config);

import appCtrl from './scripts/controllers/angularTutorial.js';
angularTutorial.controller('angularTutorial', appCtrl);

if(module.hot){
	module.hot.accept();
}
