export default ($scope, debug, ppt) => {
	'ngInject';
	//vars
	var api = ppt.api;
	$scope.appTitle = "angularTutorial";
	$scope.goto = (id) => {
		api.goto(id);
	}
	$scope.config = {
		cover: {
			'id':'cover',
			'data-x':'-1000',
			'data-y':'-1500'
		},
		content: {
			'id':'content',
			'data-x':'0',
			'data-y':'0',
			'data-scale':'4'
		},
		cat_1: {
			'id':'cat_1',
			'data-x':'850',
			'data-y':'3000',
			'data-rotate':'90',
			'data-scale':'5'
		}
	};
};