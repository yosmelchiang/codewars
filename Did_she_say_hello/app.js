const testString = 'AhoJ: HOMBre yOu; doINg viStA: vIsta BieN: dOINg doiNg quE You; LA, HEllo yOU pAsA. biEn: Are pasa ARe YoU SaLUt: ahOj:';
const testString2 = 'HaSta! DoING quE; doing La YOu PASa ARe PaSa hoW? hALlO HOw yOU TScHuSS TreS VISta QUe hAsTA';

function validateHello(greetings) {
  return ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'].some(e => greetings.toLowerCase().includes(e));
}

function validateHelloRegEx(greetings) {
  return /(hello|ciao|hallo|salut|hola|ahoj|czesc)/i.test(greetings);
}

console.log(validateHello(testString))
console.log(validateHello('hello'))
console.log(validateHello(testString2))

console.log(validateHelloRegEx(testString))
console.log(validateHelloRegEx(testString2))