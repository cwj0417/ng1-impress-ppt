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
		},
		overview_1: {
			'id':'overview_1',
			'data-x':'850',
			'data-y':'3000',
			'data-rotate':'180',
			'data-scale':'5'
		},
		overview_2: {
			'id':'overview_2',
			'data-x':'1850',
			'data-y':'4000',
			'data-rotate':'0',
			'data-scale':'5'
		},
		service: {
			'id':'service',
			'data-x':'1850',
			'data-y':'4000',
			'data-rotate':'360',
			'data-scale':'5'
		}
	};
};