
// console.log(string.split("").reverse().join(""));

function friends(name1, name2){
    let f1Name = name1.length;
    let f2Name = name2.length;

    if(f1Name > f2Name){
        return name1.split("").reverse().join("");
    }
    else{
        return name2.split("").reverse().join("");
    }
}

console.log(friends('min', 'robita'));