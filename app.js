function raffle() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let until = parseInt(document.getElementById('until').value);

    // console.log(`quantity = ${quantity}` );
    // console.log(`from = ${from}` );
    // console.log(`until = ${until}` );

    let number; 
    let drawn = [];

    for (let index = 0; index < quantity; index++ ) {
        number = getRndInteger(from, until);
        
        while(drawn.includes(number)){
            number = getRndInteger(from,until);
        }

        drawn.push(number);
        
    }

    // console.log(`drawn = ${drawn}` );
    resultChange(drawn);
 
}

function getRndInteger(min, max){

    return Math.floor(Math.random() * (max - min))  + min;

}

function resultChange(draw) {

    let result = document.getElementById('result');
    result.innerHTML = `<label class="text_paragraph">Drawn numbers: ${draw}</label>`;
    
}