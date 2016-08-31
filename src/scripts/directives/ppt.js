export default (ppt) => {
	'ngInject';
	return {
		restrict:'E',
		template:'<div><ng-transclude></ng-transclude></div>',
		replace:true,
		transclude:true,
		link: (scope, ele, attr) => {
			angular.element(ele).attr('id', attr.name || 'ppt');
			ppt.init();
		}
	}
}