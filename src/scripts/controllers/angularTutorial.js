export default ($scope, debug, ppt) => {
	'ngInject';
	//vars
	$scope.appTitle = "angularTutorial";
	$scope.goto = (id) => {
		ppt.api().goto(id);
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
		overview: {
			'id':'overview',
			'data-x':'850',
			'data-y':'3000',
			'data-rotate':'90',
			'data-scale':'5'
		}
	};
};