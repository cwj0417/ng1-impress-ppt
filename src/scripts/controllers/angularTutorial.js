export default ($scope, debug, ppt) => {
	'ngInject';
	//vars
	$scope.appTitle = "angularTutorial";
	$scope.goto = (id) => {
		ppt.handle.goto(id);
	}
	$scope.config = {
		cover: ppt.config('cover',{x:-150000,y:0,s:100}),
		content: ppt.config('content', {x:0}),
		overview: ppt.config('overview', {s:10,x:0}),
		overview_1: ppt.config('overview_1', {rx:45,ry:45,s:1,x:-500}),
		overview_2: ppt.config('overview_2', {rx:60,ry:75,x:500}),
		service: ppt.config('service', {s:10,rx:0,ry:0,x:0,y:1000}),
		service_1: ppt.config('service_1', {s:1,rx:-45,ry:-30,x:-4000}),
		service_2: ppt.config('service_2', {s:1,rx:-45,ry:-45,x:-6000}),
		directive: ppt.config('directive', {s:10,rx:0,ry:0,x:0,y:2000}),
		directive_1: ppt.config('directive_1', {s:1,rz:180}),
		makeup: ppt.config('makeup', {s:10,rx:0,ry:0,x:0,y:3000,rz:360}),
		makeup_1: ppt.config('makeup_1', {s:10,ry:90}),
		promise: ppt.config('promise', {s:10,rx:0,ry:360,x:0,y:4000}),
		promise_1: ppt.config('promise_1', {s:1,rx:-120,rz:270,x:-4600}),
		promise_2: ppt.config('promise_2', {s:1,rx:-240,x:-5600}),
		promise_3: ppt.config('promise_3', {s:1,rx:-360,x:-6600})
	};
};