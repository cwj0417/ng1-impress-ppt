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
			api:handler
		})
	}
}