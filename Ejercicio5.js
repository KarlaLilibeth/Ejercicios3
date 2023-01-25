let number=[8,23,24];
number.length;
let cont=0;
for(let i=0; i<number.length;i++){
    for(let j=0; j<number.length;j++){
        if(number[i]%2==1){
            cont=cont+1;
        }
    }
}
console.log("Los Impares son",cont)