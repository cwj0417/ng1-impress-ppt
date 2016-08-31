export default () => {
	var handler = null, targetId = null;
	var init = () => {
		(targetId != null) && (handler = impress(targetId), handler.init());
	};
	return {
		target: (id => {
			targetId = id;
		}),
		$get: () => ({
			init:init,
<<<<<<< HEAD
			api:() => {
				return handler;
			}
=======
			api:handler
>>>>>>> 63a127c2519aa4394b697f666afcad8a9dab5838
		})
	}
}