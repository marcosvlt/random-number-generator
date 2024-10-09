function raffle() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let until = parseInt(document.getElementById('until').value);

    // console.log(`quantity = ${quantity}` );
    // console.log(`from = ${from}` );
    // console.log(`until = ${until}` );

    let number; 
    let drawn = [];

    if (until < quantity) {
        return alert("Select quantity smaller than until");
    }

        
    for (let index = 0; index < quantity; index++ ) {
        number = getRndInteger(from, until);
        
        while(drawn.includes(number)){
            number = getRndInteger(from,until);
        }

        drawn.push(number);
        
    }

    // console.log(`drawn = ${drawn}` );
    resultChange(drawn);
    enableButton('btn-reset');
 
}

function getRndInteger(min, max){
    //return Math.floor(Math.random() * (max - min))  + min;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
      

}

function resultChange(draw) {

    let result = document.getElementById('result');
    result.innerHTML = `<label class="text_paragraph">Drawn numbers: ${draw}</label>`;
    
}

function enableButton(id) {
    let field = document.getElementById(id);
    if (field.classList.contains('container__button-disabled')) {
        field.classList.replace("container__button-disabled","container__button");
        
    } else {
        
    }
    
}

