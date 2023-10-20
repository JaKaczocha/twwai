function concat(str1, str2) {
    var str = "";
    str = str.concat(str1);
    str = str.concat(str2);
    return str;
}
console.log(concat("ala ma ", "kota"));
