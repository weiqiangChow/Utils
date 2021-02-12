const UtilsLibrary = {
	/* 
	 *	data: any 
	 *	return: type of data
	 */
	dataType: (data) => {
		const defaultTypeObj = {
			"[object String]": 'String',
			"[object Number]": 'Number',
			"[object Object]": 'Object',
			"[object Null]": 'Null',
			"[object Undefined]": 'Undefined',
			"[object Array]": 'Array',
			"[object Set]": 'Set',
			"[object Map]": 'Map',
			"[object WeakMap]": 'WeakMap',
			"[object Symbol]": 'Symbol',
			"[object Function]": 'Function',
			"[object Date]": 'Date',
			"[object HTMLDocument]": 'HTMLDocument',
			"[object Boolean]": 'Boolean',
			"[object Arguments]": 'Arguments',
			"[object Error]": 'Error',
			"[object RegExp]": 'RegExp',
			"[object ArrayBuffer]": 'ArrayBuffer',
			"[object DataView]": 'DataView',
			"[object Int8Array]": 'Int8Array',
			"[object Int16Array]": 'Int16Array',
			"[object Int32Array]": 'Int32Array',
			"[object Uint8Array]": 'Uint8Array',
			"[object Uint8ClampedArray]": 'Uint8ClampedArray',
			"[object Float32Array]": 'Float32Array',
			"[object Float64Array]": 'Float64Array',
			"[object Uint16Array]": 'Uint16Array',
			"[object Uint32Array]": 'Uint32Array',
		};
		return defaultTypeObj[Object.prototype.toString.call(data)];
	},
	/* 
	 *	r g b: 取值 （0-255) 
	 *	return: “#ffffff”
	 */
	rgbToHex: (r, g, b) => {
	  	const hex = ((r << 16) | (g << 8) | b).toString(16);
		return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex;
	}
};

export defautl UtilsLibrary;
