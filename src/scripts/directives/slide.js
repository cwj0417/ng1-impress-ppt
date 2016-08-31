export default () => {
	return {
		restrict:'E',
		replace:!0,
		transclude:!0,
		template:'<div><ng-transclude></ng-transclude></div>',
		link:(scope, ele, attr) => {
			angular.element(ele).addClass('step');
			var config = scope.$eval(attr.config) || attr.config || {};
			for(let key in config) {
				angular.element(ele).attr(key, config[key]);
			}
		}
	}
}