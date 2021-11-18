/**
 *	create by weiqiangChow
 *	！！！ 注意事项
 *		以下所有方法并不是兼容所有浏览器，如需兼容所有浏览器，
 *		请使用者注意方法中使用的 API 是否被浏览器支持。
 *		也可自行优化方法 API 或者自行 polyfill
 */

/**
 * js类型检查
 * @param {any} data
 * @return: type of data
 */
export const dataType = data => {
    const defaultTypeObj = {
        '[object String]': 'String',
        '[object Number]': 'Number',
        '[object Object]': 'Object',
        '[object Null]': 'Null',
        '[object Undefined]': 'Undefined',
        '[object Array]': 'Array',
        '[object Set]': 'Set',
        '[object Map]': 'Map',
        '[object WeakMap]': 'WeakMap',
        '[object Symbol]': 'Symbol',
        '[object Function]': 'Function',
        '[object Date]': 'Date',
        '[object HTMLDocument]': 'HTMLDocument',
        '[object Boolean]': 'Boolean',
        '[object Arguments]': 'Arguments',
        '[object Error]': 'Error',
        '[object RegExp]': 'RegExp',
        '[object ArrayBuffer]': 'ArrayBuffer',
        '[object DataView]': 'DataView',
        '[object Int8Array]': 'Int8Array',
        '[object Int16Array]': 'Int16Array',
        '[object Int32Array]': 'Int32Array',
        '[object Uint8Array]': 'Uint8Array',
        '[object Uint8ClampedArray]': 'Uint8ClampedArray',
        '[object Float32Array]': 'Float32Array',
        '[object Float64Array]': 'Float64Array',
        '[object Uint16Array]': 'Uint16Array',
        '[object Uint32Array]': 'Uint32Array',
    }
    return defaultTypeObj[Object.prototype.toString.call(data)]
}

/**
 *	color transform
 *	@param {Number}	 r g b: 取值 （0-255)
 *	@return {String}  “#ffffff”
 */
export const rgbToHex = (r, g, b) => {
    const hex = ((r << 16) | (g << 8) | b).toString(16)
    return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
}

/**
 *  金额千分位控制以及补零
 *	@param {Number | String} num 要格式化的数字
 *	@param {Number} n 保留小数位
 */
export const formatNum = (num, n) => {
    num = String(num.toFixed(n))
    const re = /(-?\d+)(\d{3})/
    while (re.test(num)) {
        num = num.replace(re, '$1,$2')
    }
    return num
}

/**
 * 二进制文件下载
 * @param {String} fileName 文件名称
 * @param {Blob} bolb 文件流
 */
export const downloadFile = (fileName, bolb) => {
    let userAgent = navigator.userAgent
    let edge =
        userAgent.indexOf('Edge') > -1 && userAgent.indexOf('Chrome') > -1
    if (!edge) {
        let blob = new Blob([bolb])
        let downloadElement = document.createElement('a')
        let href = window.URL.createObjectURL(blob) // 创建下载的链接
        downloadElement.href = href
        downloadElement.download = fileName // 下载后文件名
        document.body.appendChild(downloadElement)
        downloadElement.click() // 点击下载
        document.body.removeChild(downloadElement) // 下载完成移除元素
        window.URL.revokeObjectURL(href) // 释放掉blob对象
    }
}

/**
 * 补零
 * @param {Number | String} value 需要补零的数字或者字符串
 */
export const numberPatchZero = value => {
    var value = Math.round(parseFloat(value) * 100) / 100
    var xsd = value.toString().split('.')
    if (xsd.length == 1) {
        value = value.toString() + '.00'
        return value
    }
    if (xsd.length > 1) {
        if (xsd[1].length < 2) {
            value = value.toString() + '0'
        }
        return value
    }
}

/**
 * 小数位判断
 * @param {Number | String} value 需要判断小数位的数字型或者字符串
 * @retrun {Boolean} 返回传入的值是否大于2位小数，大于则返回true，小于或等于则返回false
 */
export const judgeDecimalPlaces = value => {
    const reg = /^\d+(\.\d{1,2})?$/
    return !reg.test(value)
}

/**
 *  @param { Function:Files } 接收一个callback 上传的文件将会通过回调的形式触发
 *  @return Function: Files 通过回调函数返回选中的文件
 */

export const importFile = cb => {
    if (!cb) {
        throw Error('receive a callback function containing one parameter')
    }
    if (Object.prototype.toString.call(cb) !== '[object Function]') {
        throw Error('variable mast be a Function')
    }

    function inputChange() {
        const files = this?.files
        if (!files.length) {
            throw Error('a error in inputChange function, please checked')
        }
        cb(files)
    }
    const input = document.createElement('input')
    input.type = 'file'
    input.onchange = inputChange
    document.body.appendChild(input)
    input.click()
    document.body.removeChild(input)
}

/**
 * 生成唯一 ID
 * @returns uuid
 */
export const uuid = () => {
    const O1 = () =>
        (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    return `${O1()}${O1()}-${O1()}-${O1()}-${O1()}-${O1()}${O1()}${O1()}`
}

/**
 *
 * @returns rgba
 */
export const randomHexColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const alpha = Math.random().toFixed(2)
    return `rgba(${r},${g},${b},${alpha})`
}

/**
 * 随机颜色角度渐变
 * @returns linear-gradient
 */
export const linearGradient = () => {
    const deg = Math.floor(Math.random() * 360)
    const start = randomHexColor()
    const end = randomHexColor()
    return `linear-gradient(${deg}deg, ${start}, ${end})`
}

/**
 * Object: 将会把 Obj 转换成 string 路径参数的格式，并返回 Url PathParams （Tips：原本是 number、boolean 等数据类型会变成 string）
 * Url PathParams: 把路径参数解析，然后返回一个 Object
 * （Tips： 对象的 value 都会被转换为 string 类型）
 */
export const objToRulCompile = data => {
    var type = Object.prototype.toString.call(data)
    if (type === '[object String]') {
        var arr = decodeURIComponent(data).split('?')
        var dataStr = arr.length > 1 ? arr[1] : arr[0]
        var kvArr = dataStr.split('&')
        var obj = kvArr.reduce((acc, cur) => {
            const t = cur.split('=')
            acc = {
                ...acc,
                [t[0]]: t[1],
            }
            return acc
        }, {})
        return JSON.parse(JSON.stringify(obj))
    }
    if (type === '[object Object]') {
        const str = Object.keys(data).reduce((acc, cur) => {
            acc += `${cur}=${data[cur]}&`
            return acc
        }, '')
        return encodeURIComponent(str.substring(0, str.length - 1))
    }
}

/**
 *  uuid 生成器
 *  @param len 长度
 *  @param radix 进制数
 *         radix default value : 16
 */
export const uuid2 = (len, radix = 16) => {
    var chars =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
            ''
        )
    var uuid = [],
        i
    radix = radix || chars.length

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
    } else {
        // rfc4122, version 4 form
        var r

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
        uuid[14] = '4'

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | (Math.random() * 16)
                uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
            }
        }
    }

    return uuid.join('')
}

/**
 * URL 路径参数解析
 * @param url  default: window.location.href
 * @returns Instantiation of URL
 * @function returns.queryParams(key)
 */
export const parseURL = (url = window.location.href) => {
    const res = new URL(url)
    res.queryParams = key => {
        if (key) {
            return res.searchParams.get(key)
        }
        const params = {}
        const paramGroup = res.search.replace(/^\?/, '').split('&')
        paramGroup.forEach(param => {
            const [key, val] = param.split('=')
            params[key] = val
        })
        return params
    }
    return res
}

/**
 * 复制文本到剪贴板
 * @param content 需要复制到剪贴板的内容
 */
export const copyToClipboard = content => {
    const clipboardData = window.clipboardData
    if (clipboardData) {
        clipboardData.clearData()
        clipboardData.setData('Text', content)
        return true
    } else if (document.execCommand) {
        const el = document.createElement('textarea')
        el.value = content
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        return true
    }
    return false
}

/**
 * 节流函数
 * 在 delay 秒内，不论触发多少次，只会执行一次 fn
 * @param {Function} fn 被执行的函数
 * @param {Number} delay 延迟时间
 * @returns function
 */
export const throttle = (fn, delay) => {
    let pre = Date.now()
    return function () {
        const ctx = this
        const args = arguments
        const now = Date.now()
        if (now - pre >= delay) {
            fn.apply(ctx, args)
            pre = Date.now()
        }
    }
}

/**
 * 防抖函数
 * 不论触发多少次，只会在最后一次触发后的第 delay 秒后执行 fn
 * @param {Function} fn
 * @param {Number} delay 延迟的时间
 * @returns function
 */
export const debounce = (fn, delay) => {
    let timer = null
    return function () {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, delay)
    }
}

/**
 * 字符串去除空格
 * @param {String} str
 * @returns String
 */
export const strSpaceHandle = str => {
    return str.replace(/\s*/g, '')
}
