
function creaSerie() {

    let printNumber = document.getElementById("printNumber");

    for (let i = 0; i <= 100; i++) {
        console.log(i)
        
        if (i % 5 == 0 && i % 3 == 0) {
            let variabile= "FizzBuzz";
            printNumber.innerHTML += `<div class="box box--${variabile}">${variabile}</div>`;
            console.log(variabile);  
        }
        else if (i % 5 == 0) {
          
            let variabile= "Buzz";
            printNumber.innerHTML += `<div class="box box--${variabile}">${variabile}</div>`;
            console.log(variabile);  
        }
        else if ( i % 3 == 0  ) {
            let variabile= "Fizz";
            printNumber.innerHTML += `<div class="box box--${variabile}">${variabile}</div>`;
            console.log(variabile);  
            
        }
        else{
          
           printNumber.innerHTML += `<div class="box">${i}</div>`;
           console.log(i)
        }
    }
    




}


