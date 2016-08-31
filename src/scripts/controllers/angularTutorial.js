export default ($scope, debug, ppt) => {
	'ngInject';
	//vars
<<<<<<< HEAD
	$scope.appTitle = "angularTutorial";
	$scope.goto = (id) => {
		ppt.api().goto(id);
=======
	var api = ppt.api;
	$scope.appTitle = "angularTutorial";
	$scope.goto = (id) => {
		api.goto(id);
>>>>>>> 63a127c2519aa4394b697f666afcad8a9dab5838
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
<<<<<<< HEAD
		overview: {
			'id':'overview',
=======
		cat_1: {
			'id':'cat_1',
>>>>>>> 63a127c2519aa4394b697f666afcad8a9dab5838
			'data-x':'850',
			'data-y':'3000',
			'data-rotate':'90',
			'data-scale':'5'
		}
	};
};