/**
 * @description 给定两个字符串 s 和 t ，它们只包含小写字母。
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 请找出在 t 中被添加的字母。
 * 添加后的字符串长度必更长哦
 * @param {string} s
 * @param {string} t
 * @return {character|string}
 */
// 求和法
var findTheDifference = function (s, t) {
    let as = 0, at = 0;
    for (let i = 0; i < s.length; i++) {
        as += s.charCodeAt(i);
    }
    for (let i = 0; i < t.length; i++) {
        at += t.charCodeAt(i);
    }
    return String.fromCharCode(at - as);
};

// 位运算法 使用异或运算符
/**
 * @param {string} s
 * @param {string} t
 * @return {character|string}
 */
var findTheDifference2 = function (s, t) {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};
