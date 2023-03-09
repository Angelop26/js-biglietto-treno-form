// Attivazione del bottone

const ticketGenerator = document.getElementById('ms_tcktgenerator');
ticketGenerator.addEventListener('click', function(){
    // INPUT
    // prendere valori di input
    const userDataInput = document.getElementById('ms_userName');
    userData = userDataInput.value;

    const userKmInput = document.getElementById('ms_user-km');
    userKmString = userKmInput.value;
    userKm = parseFloat (userKmString);

    const userAgeInput = document.getElementById('ms_userAge');
    userAge = userAgeInput.value;

    // ripulire la pagina
    userDataInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";

    // LOGICA
    const basePrice = userKm * 0.21
    let tcktDiscount = 'biglietto standard';
    let price = ``;
    if (!isNaN(userKm)){
        
        if(userAge === "underage") {
            const TicketPrice20 = (basePrice * 0.8).toFixed(2)
            tcktDiscount = 'biglietto junior'
            price =`${TicketPrice20}€`
        } else if(userAge === "over") {
            const TicketPrice40 = (basePrice * 0.6).toFixed(2)
            tcktDiscount = 'biglietto senior'
            price = `${TicketPrice40}€`
        } else {
            price = `${basePrice}€`
        }
   
        const nmbCab = Math.floor(Math.random() * 10) + 1;
        const CPCode = Math.floor(Math.random() * 100000) + 1;
        
        // OUTPUT
        document.getElementById('userName').innerHTML = userData
        document.getElementById('tckt-discount').innerHTML = tcktDiscount
        document.getElementById('number-cab').innerHTML = nmbCab
        document.getElementById('CP-code').innerHTML = CPCode
        document.getElementById('price').innerHTML = price
    } else {
        alert('Immetere i dati nel modo corretto')
    }
});

const cancel = document.getElementById('ms_cancel');
cancel.addEventListener('click', function(){
    userData =''
    nmbCab =''
    CPCode = ''
    price = ''

    // OUTPUT
    document.getElementById('userName').innerHTML = ''
    document.getElementById('tckt-discount').innerHTML = ''
    document.getElementById('number-cab').innerHTML = ''
    document.getElementById('CP-code').innerHTML = ''
    document.getElementById('price').innerHTML = ''
} )
