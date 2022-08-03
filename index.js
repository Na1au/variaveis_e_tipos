//  Solução 1
function verifPalindromo(string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verifPalindromo("ana"));
console.log(verifPalindromo("gato"));

// Solução 2
function verifPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    
    return true;
}

console.log(verifPalindromo2("ovo"));
console.log(verifPalindromo2("peixe"));