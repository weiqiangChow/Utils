const UtilsLibrary = {
	dataType: (data) => {
		const defaultTypeObj = {
			"[object String]": 'String',
			"[object Number]": 'Number',
			"[object Object]": 'Object',
			"[object Null]": 'Null',
			"[object Undefined]": 'Undefined',
			"[object Array]": 'Array',
			"[object Set]": 'Set',
			"[object Symbol]": 'Symbol',
			"[object Function]": 'Function',
			"[object Date]": 'Date',
			"[object HTMLDocument]" : 'HTMLDocument'
		};
		return defaultTypeObj[Object.prototype.toString.call(data)];
	},
};

export defautl UtilsLibrary;
