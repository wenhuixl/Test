/**
 * Created by wenhui on 2017/7/12.
 */

'use strict'

var a = {name: 'wenhui'};
var b = a;

console.log('a:', a)
console.log('b:', b)

b.name = 'xiaojun';

console.log('a:', a)
console.log('b:', b)

var b = {name: 'xiaosi'};

console.log('a:', a)
console.log('b:', b)

console.log('this is test');
