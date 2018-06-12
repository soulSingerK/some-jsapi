function testCallBack(callback) {
  console.log(1)
  callback()
  console.log(3)
}
console.log(4)

testCallBack(() => {
  console.log(2)
})