
function creaSerie() {

    let div = document.getElementById("printNumber");

    for (let i = 0; i <= 100; i++) {
        console.log(i)
        
        if ( i % 3 === 0) {
            let i= "Fizz"
            console.log(i)
            div.innerHTML += i;
            
        }
        else if (i % 5 === 0) {
            let i= "Buzz"
            console.log(i)
            div.innerHTML += i;
           
        }
        else if ( i % 15 === 0) {
            let i= "FizzBuzz"
            console.log(i)
            div.innerHTML += i;
            
        }
        else{
          
            div.innerHTML += `<p>${i}</p>`;
        }
    }
    




}


