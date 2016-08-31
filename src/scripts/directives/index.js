import ppt from './ppt.js';
import slide from './slide.js';

export default angular.module('ppt.directives', [])
.directive('ppt', ppt)
.directive('slide', slide)
.name;