module.exports = function check(str, arr) {
    let newArr = []
    arr.forEach(e => {
        let h = e.join('')
        newArr.push(h)
    })
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (str.indexOf(newArr[j]) != -1) {
                str = str.replace(newArr[j], '')
                i--
                // console.log(str)
            }
        }
    }
   return str.length == 0

}
