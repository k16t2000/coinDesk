//npm init, installed in npm i express axios
const express = require('express');//require Express to be actually able to use it and bind it to our app
const axios = require('axios');//require Express to be actually able to use it and bind it to our app
const app = express();
//zaprosi
//https://www.coindesk.com/coindesk-api>>>
app.get('/bitcoinRates',(req,res)=>{
    let url='https://api.coindesk.com/v1/bpi/currentprice/eur.json';//eur rates
    //let url='https://api.coindesk.com/v1/bpi/currentprice/usd.json';//usd rates

    
    //paring
    axios.get(url)
    //call back-then
    .then(function(response){
        //otsilaju otvet v brauzer
        let rate=response.data.bpi.EUR.rate;
        let code=response.data.bpi.EUR.code;
        let disclaimer=response.data.disclaimer;
        res.write(`<p>${rate} ${code}</p>`);
        res.write(`<p>${disclaimer}</p>`);
        res.send();
        //zapros, otvet na servere
        //console.log(response.data.bpi.EUR.rate);//response.data -json objekt, data svoistvo

        ///zapuskaem npm>>>npm start, pisheem v brauzere>>>http://localhost:3000/bitcoinRates
        ///otvet na servere dlja response.data.bpi.EUR.rate>>> 8,872.2864
        ///4tobi proverit objekti saita api, kopiruju json kod i vstavlaju v google/-- v obrabot4ik po failam json online

    })
    .catch(function(error){
        console.log(error);
    });
    

});

//()tuhi funkcion
app.listen(3000, ()=>{
    console.log("Server is running...")

});//npm start, stop

