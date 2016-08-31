import ppt from './ppt.js';
import slide from './slide.js';
import markdown from './markdown.js';

export default angular.module('ppt.directives', [])
.directive('ppt', ppt)
.directive('slide', slide)
.directive('markdown', markdown)
.name;