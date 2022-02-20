/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let valid = s.toLowerCase().match(/[a-z0-9]+/g);// valid为进行正则匹配后筛选出来的数组
    if(!valid){
        return true;
    }
    let str = valid.join("");// 数据预处理(正则匹配)后得到的字符串
    let comp = str.split("").reverse().join("");// 将字符串每个字母逐个翻转
    return comp === str;
};
