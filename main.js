let divNumero= document.getElementById("printNumber") 

 for (let i =0; i<=100; i++){
     console.log(i)

     let stringa = `Il tuo numero è: ${i}`;
    divNumero.innerHTML += stringa;
 }