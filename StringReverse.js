function stringReverse(str){

    const arr= str.split('');
    arr.reverse(str);
    return arr.join('');
}

let checkString = stringReverse('hello');
console.log(checkString);