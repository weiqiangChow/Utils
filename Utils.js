/**
 *	create by weiqiangChow
 */

/**
 *	@param {any} data 
 *	@return: type of data
 */
export const dataType = (data) => {
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
}


/**
 *	color transform
 *	@param {Number}	 r g b: 取值 （0-255) 
 *	@return {String}  “#ffffff”
 */
export const rgbToHex = (r, g, b) => {
	const hex = ((r << 16) | (g << 8) | b).toString(16);
	return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex;
}
	

/**
 *	千分位控制以及补零
 *	@param {Number | String} num 要格式化的数字
 *	@param {Number} n 保留小数位
 */
export const formatNum = (num ,n) => {
	num = String(num.toFixed(n));
	const re = /(-?\d+)(\d{3})/;
	while(re.test(num)) {
		num = num.replace(re,"$1,$2");
	}  
	return num;
}

/**
 * 
 * @param {String} fileName 文件名称
 * @param {Blob} bolb 文件流
 */
export const downloadFile = (fileName, bolb) => {
    let userAgent = navigator.userAgent;
    let edge = userAgent.indexOf('Edge') > -1 && userAgent.indexOf('Chrome') > -1;
    if (!edge) {
      let blob = new Blob([bolb]);
      let downloadElement = document.createElement('a');
      let href = window.URL.createObjectURL(blob); // 创建下载的链接
      downloadElement.href = href;
      downloadElement.download = fileName; // 下载后文件名
      document.body.appendChild(downloadElement);
      downloadElement.click(); // 点击下载
      document.body.removeChild(downloadElement); // 下载完成移除元素
      window.URL.revokeObjectURL(href); // 释放掉blob对象
    }
}

/**
 *
 */
export const numberPatchZero = (value) => {
	var value=Math.round(parseFloat(value)*100)/100;
	var xsd=value.toString().split(".");
	if(xsd.length==1){
		value=value.toString()+".00";
		return value;
	}
	if(xsd.length>1){
		if(xsd[1].length<2){
			value=value.toString()+"0";
		}
		return value;
	}
}

