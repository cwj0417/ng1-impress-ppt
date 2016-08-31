export default () => {
	class pptConfig {
		constructor(id = 'invalid_id', x, y, z, s, r, rx, ry, rz) {
			this['id'] = id;
			this['data-x'] = x;
			this['data-y'] = y;
			this['data-z'] = z;
			this['data-scale'] = s;
			this['data-rotate'] = r;
			this['data-rotate-x'] = rx;
			this['data-rotate-y'] = ry;
			this['data-rotate-z'] = rz;
		}
	}
	let latest = new pptConfig(null, 0, 0, 0, 1, 0, 0, 0, 0);
	return {
		handle:null,
		config:(id, opt = {}) => {
			return latest = new pptConfig(
				id,
				opt.x || latest['data-x'],
				opt.y || latest['data-y'],
				opt.z || latest['data-z'],
				opt.s || latest['data-scale'],
				opt.r || latest['data-rotate'],
				opt.rx || latest['data-rotate-x'],
				opt.ry || latest['data-rotate-y'],
				opt.rz || latest['data-rotate-z'],
				);
		}
	}
}