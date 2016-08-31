import showdown from 'showdown';
export default () => {
	return {
		restrict:'AE',
		link:(scope, ele, attr) => {
			var converter = new showdown.Converter();
			angular.element(ele).html(converter.makeHtml(_.trim(angular.element(ele).html())));
		}
	}
}