export default ($scope, debug, ppt) => {
	'ngInject';
	//vars
	$scope.appTitle = "angularTutorial";
	$scope.goto = (id) => {
		ppt.handle.goto(id);
	}
	$scope.config = {
		cover: ppt.config('cover'),
		content: ppt.config('content', {x:1000,y:1000}),
		overview: ppt.config('overview', {rx:90}),
		overview_1: ppt.config('overview_1', {x:3000}),
		overview_2: ppt.config('overview_2', {x:4000}),
		service: ppt.config('service', {x:6000})
	};
};