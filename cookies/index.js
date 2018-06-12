function Cookies () {

}

Cookies.prototype.setCookies = function (key, value, atr) {
  const date = new Date(atr.expires)
  document.cookie = `${key}=${encodeURI(value)};expires=${date.toGMTString()}`
  // document.cookie = `${key}=${value};expires=${Date.now() + atr.expires}`
}

Cookies.prototype.getCookies = function (key) {
  let cookieArr = document.cookie.split(';') || []
  let value = ''
  cookieArr.forEach((item, index) => {
    let keyValue = item.split('=')
    if (keyValue[0] === key) {
      value = keyValue[1]
    }
  })
  return value
}

Cookies.prototype.deleteCookies = function (key) {
  let val = this.getCookies(key)
  if (val) {
    this.setCookies(key, val, {
      expires: Date.now() - 1
    })
  }
}

const cookies = new Cookies()
// cookies.setCookies('username', 'lisi', {
//   expires: Date.now() + 1 * 24 * 60* 60 * 1000
// })

// cookies.getCookies('username')

cookies.deleteCookies('username')