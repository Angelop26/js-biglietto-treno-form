// Attivazione del bottone

const ticketGenerator = document.getElementById('tcktgenerator');
ticketGenerator.addEventListener('click', function(){
    // INPUT
    // prendere valori di input
    const userDataInput = document.getElementById('userName');
    userData = userDataInput.value;
    console.log(userData, typeof userData);

    const userKmInput = document.getElementById('user-km');
    userKmString = userKmInput.value;
    userKm = parseFloat (userKmString);
    console.log(userKm);

    const userAgeInput = document.getElementById('userAge');
    userAge = userAgeInput.value;
    console.log(userAge);

    // ripulire la pagina
    userDataInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";

    // LOGICA
    const basePrice = userKm * 0.21
    if (!isNaN(userKm)){
        
        let message = ''
        if(userAge === "underage") {
            let TicketPrice20 = (basePrice * 0.8).toFixed(2)
            console.log(ticketPrice20);
            message = `Il prezzo del biglietto è ${TicketPrice20}`
        } else if(userAge === over) {
            const TicketPrice40 = (basePrice * 0.6).toFixed(2)
            console.log(ticketPrice40);
            message = `Il prezzo del biglietto è ${TicketPrice40}`
        } else {
            message = `Il prezzo del biglietto è ${basePrice.toFixed(2)}€`
        }

    }




    // OUTPUT
    const result = document.getElementById('result')
    result.innerHTML = message
});