// Attivazione del bottone

const ticketGenerator = document.getElementById('tcktgenerator');
ticketGenerator.addEventListener('click', function(){
    // INPUT
    // prendere valori di input
    const userDataInput = document.getElementById('userName');
    userData = userDataInput.value;

    const userKmInput = document.getElementById('user-km');
    userKmString = userKmInput.value;
    userKm = parseFloat (userKmString);

    const userAgeInput = document.getElementById('userAge');
    userAge = userAgeInput.value;

    // ripulire la pagina
    userDataInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";

    // LOGICA
    const basePrice = userKm * 0.21
    let message = ''
    if (!isNaN(userKm)){
        
        if(userAge === "underage") {
            const TicketPrice20 = (basePrice * 0.8).toFixed(2)
            message = `Il prezzo del biglietto è ${TicketPrice20}`
        } else if(userAge === "over 65") {
            const TicketPrice40 = (basePrice * 0.6).toFixed(2)
            message = `Il prezzo del biglietto è ${TicketPrice40}`
        } else {
            message = `Il prezzo del biglietto è ${basePrice.toFixed(2)}€`
        }
   
    } else {
        message = `immetere i dati nel modo corretto`
    }

    console.log(message);



    // OUTPUT
    const result = document.getElementById('result')
    result.innerHTML = message
});