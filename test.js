var a = {
    name: 'nhan',
    age: 17,
}; //ver1
var b = {
    name: 'hoa1',
    age: 17,
}; //ver2
var c = {
    ...a,
    ...b,
};
console.log(c);
