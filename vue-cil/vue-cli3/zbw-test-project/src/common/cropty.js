import crypto from 'crypto-js'

const basecig = {
  key: '123456789123456789', // 密钥 16 位
  iv: '124132134123213', // 初始向量 initial vector 16 位
  // 定义随机数 0-9, a-z, +
  rn: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '+']
}
/**
 *
 * @param {参数 } data
 * @param {密钥} key
 * @param {偏移量} iv
 */
// aes加密
function getAesstring (data, key, iv) {
  key = crypto.enc.Utf8.parse(key)
  iv = crypto.enc.Utf8.parse(iv)
  // DES 加密
  let encrypted = crypto.DES.encrypt(data, key, {
    iv: iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7
  })

  // 转换为字符串
  encrypted = encrypted.toString()
  return encrypted
}
// aes 解密
function getDaesstring (data, key, iv) {
  key = crypto.enc.Utf8.parse(key)
  iv = crypto.enc.Utf8.parse(iv)
  // DES 解密
  let decrypted = crypto.DES.decrypt(data, key, {
    iv: iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7
  })

  // 转换为 utf8 字符串
  decrypted = crypto.enc.Utf8.stringify(decrypted)
  return decrypted
}

const aes = {
  en: (data) => { getAesstring(data, basecig.key, basecig.iv) },
  de: (data) => { getDaesstring(data, basecig.key, basecig.iv) }
}
// 定义 base64
const base64 = {
  en: (data) => { crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(data)) },
  de: (data) => { crypto.enc.Base64.parse(data).toString(crypto.enc.Utf8) }
}
// base64混淆
/**
 * base64混淆原理
 * 1先对字符串进行base64加密
 * 2在加密好的字符串上加上一个四位字符串(字符串需要满足以下条件)
 *  2.1:必须是四位的16进制字符串
 *  2.2:字符串的十进制也必须是一个四位整数
 *  2.3:插入加密地址是16进制字符串的倒叙
 * 3通过四位随机字符串给base64加密传进行随机数的添加
 */

const base64En = (data) => {
  // 1:进行base64加密生成加密字符串
  let baseEn = base64.en(data)
  // 2:获取一个随机字符串四位随机数
  let rm = JSON.stringify(Math.floor(Math.random() * 10000))
  while (rm.length < 4) {
    rm += '0'
  }
  let resinit = JSON.parse(rm)
  // 将四位字符串转16进制倒叙
  let reserveinit = JSON.stringify((resinit).toString(16)).split('').reverse().join('')
  let [one, two, three, four] = JSON.stringify(resinit).split('')
  return reserveinit + baseEn.substr(0, one) + showrn(two) + baseEn.substr(one)
}

// 获取选定随机数的函数
function showrn (e) {
  let i = 1
  let b = ''
  while (i < e) {
    i++
    let a = Math.floor(Math.random() * (basecig.rn.length - 1))
    let c = basecig.rn[a]
    b += c
  }
  return b
}

//  md5加密
const md5 = {
  en: (data) => { return crypto.MD5(data).toString() }
}

export {
  aes,
  base64En,
  md5
}
