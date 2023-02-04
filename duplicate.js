
// function printDuplicate(names){
//     let unique = [];
//     for(let i = 0; i < names.length; i++){
//         let name = names[i];
//         // console.log(name);
//         if(unique.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const names = ['alim', 'balim', 'calim', 'dalim', 'talim', 'alim', 'dalim', 'palim', 'balim', 'falim', 'malim', 'talim'];
// const myName = printDuplicate(names);
// console.log(myName);


function duplicate(names){
    let unique = [];
    for(let i =0; i<names.length; i++){
        let name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const names = ['alim', 'balim', 'mofiz', 'ruku', 'said', 'calim', 'dalim', 'talim', 'mofiz', 'alim', 'dalim', 'palim', 'balim', 'falim', 'malim', 'talim'];
console.log(duplicate(names));
