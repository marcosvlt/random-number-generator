function raffle() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let until = parseInt(document.getElementById('quantity').value);

    console.log(`quantity = ${quantity}` );
    console.log(`from = ${from}` );
    console.log(`until = ${until}` );

    let number; 

    let drawn = [];

    for (let index = from; index < quantity; index++) {
        number = getRndInteger(from, until);
        drawn.push(number);
        
    }

    console.log(`drawn = ${drawn}` );



 
}

function getRndInteger(min, max){

    return Math.floor(Math.random() * (max - min))  + min;


}
