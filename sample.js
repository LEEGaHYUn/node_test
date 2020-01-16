function calc(num, num2, type) {
    if (type == '+') return num1 + num2;
    else if (type == '-') return num1 - num2;
    else if (type == '*') return num1 * num2;
    else return num1 / num2;
}
function calc (num1, num2, func) {
    return func(num1, num2);
}
function add (num1, num2) {
    return num1 + num2;
}
// function calc (num1, num2, function add (num1, num2) {
//     return num1 + num2;
// })

calc(1, 2, add);