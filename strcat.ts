function concat(str1: string, str2: string): string {

    let str: string = "";
    str = str.concat(str1);
    str = str.concat(str2);

    return str;
}

console.log(concat("ala ma ","kota"));