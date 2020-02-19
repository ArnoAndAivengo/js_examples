/*
Дана строка, состоящая из букв латинского алфавита, цифр и скобок  {([])}.
Необходимо проверить, что скобки в строке сбалансированы — на каждую
открывающую скобку приходится закрывающая, и скобочные группы не пересекаются.
Напишите функцию, которая принимает такую строку и возвращает true,
если скобки сбалансированы, и false, если не сбалансированы.
*/

function isValid(str) {
    let i,
        l = str.length,
        char,
        last,
        stack = [];

    for (i = 0; i < l; i++) {
        char = str[i];
   
        if (char == "{" || char == "(" || char == "[") {
            stack.push(char)

        } else if (char == "}" || char == ")" || char == "]") {
            
            if (stack.length > 0) {
                last = stack[stack.length - 1];
                if ((char == '}' && last == "{") || (char == ')' && last == '(') || (char == ']' && last == '[')) {
                    stack.pop();
                }
            }
        }
    }
    return stack.length == 0;
}

isValid("(foo))");      // true
console.log(isValid("(f[o]{o})")); // true
console.log(isValid("[(){}()()]")); // true
console.log(isValid("{f[o}o]")); // false — нет закрывающей
console.log(isValid("{f[o}o]")); // false — скобки пересекаются