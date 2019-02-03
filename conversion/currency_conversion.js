let dollarPriceUSD = null;
let dollarPriceEUR = null;
let dollarPriceRUR = null;
function arrayJson (json) {
    console.log(json)
        for(var i = 0; i < json.length; i++){

            if(json[i].ccy === "USD"){
                dollarPriceUSD = json[i].buy;
            };


            if(json[i].ccy === "EUR"){
                dollarPriceEUR = json[i].buy;
            };
      

            if(json[i].ccy === "RUR"){
                dollarPriceRUR = json[i].buy;
            };
            console.log(dollarPriceRUR)
        };
};

function conversion () {
    const number = document.getElementById("Converter");
    const value = number.value;

    if(select.value === 'USD'){
        document.getElementById("convertion_dollar").value = parseInt(dollarPriceUSD) * parseInt(value);
    }

    if(select.value === 'EUR'){
        document.getElementById("convertion_dollar").value = parseInt(dollarPriceEUR) * parseInt(value);
    }

    if(select.value === 'RUR'){
        document.getElementById("convertion_dollar").value = Number(dollarPriceRUR) * Number(value);
        console.log(dollarPriceRUR)
    }
};

const input = document.getElementById("Converter");
input.addEventListener('input', () => conversion());

const select = document.getElementById("bob");
console.log(select.value);
select.addEventListener('change', () => conversion());

function preloader () {
    document.getElementById("page-preloader").style.display = 'none';
};


fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(res => res.json())
    .then((json) => {
        arrayJson(json); 
        preloader();
    }) 
    .catch(error => {
        preloader();
        alert(error.message);
    });  

conversion();

function addElement () {

    const title = document.createElement('h1');
        title.innerText = 'Money Converter';
        title.style.cssText="color: red";

    const parrent = document.getElementById('org_div1')
        parrent.appendChild(title)
        
    const input3 = document.createElement("input");
        input3.id = 'new_input'
        my_div2 = document.getElementById("org_div1");
        document.body.appendChild(input3 , my_div2);
        title.style.cssText="color: red";
}

addElement();


    




// function addElement2 () {
//         let newiv2L = document.createElement("input");
//             my_div2 = document.getElementById("convertion_dollar");
//             newiv2L.type = 'number';         
//             document.body.(newiv2L , my_div2);
//             my_div2.style.cssText="margin-left: 150px",'display: inline-block';
// }
// addElement2()

 

// let dollarPrice = null;
// let dollarPriceEUR = null;
// let dollarPriceUSD = null;
// let dollarPriceRUR = null;
// function arrayJson (json) {
//     console.log(json)
//         for(var i = 0; i < json.length; i++){

//             if(json[i].ccy === "EUR") {
//                 dollarPriceEUR = json[i].buy;
//             }
//             console.log(dollarPriceEUR);
//             if(json[i].ccy === "USD") {
//                 dollarPriceUSD = json[i].buy;
//             }
//             console.log(dollarPriceUSD)
//             if (select.value === 'EUR') {
//                 json[i].ccy === "EUR",
//                 dollarPrice = json[i].buy;
                
//             }
           

       

//         }
// };

// const input = document.getElementById("Converter");
// input.addEventListener('keyup', () => conversion());

// const select = document.getElementById("bob");
//     console.log(select.value);

// select.addEventListener('change', () => { 
//     if(select.value === 'EUR') {
//         dollarPrice === dollarPriceEUR;
//     }
//     console.log(dollarPrice);

//     console.log(select.value);
// })

// function conversion () {
//     const number = document.getElementById("Converter");
//     const value = number.value;
//     console.log(value)
//     let sobaka = document.getElementById("convertion_dollar").value = parseInt(dollarPrice) * parseInt(value);
// };

// function funс () {
//     document.getElementById("page-preloader").style.display = 'none';
// };



// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//     .then(res => res.json())
//     .then((json) => {
//         arrayJson(json); 
//         funс();
//     }) 
//     .catch(error => {
//         funс();
//         alert(error.message);
//     });  

// conversion();


// if(json[i].ccy === "RUR") {
//     dollarPrice = json[i].buy;
// } 

// if(json[i].ccy === "EUR") {
//     dollarPrice = json[i].buy;
// }

// if(json[i].ccy === "USD") {
//     dollarPrice = json[i].buy;
// } 







// let dollarPrice = null;
// function arrayJson (json) {
//     console.log(json)
//         for(var i = 0; i < json.length; i++){
//             if(json[i].ccy === "USD"){
//                 dollarPrice = json[i].buy;
//             };
//         };
// };

// function conversion () {
//     let number = document.getElementById("Converter").value;
//     console.log(number)
//     let dollar_conversion = document.getElementById("convertion_dollar").value = parseInt(dollarPrice) * parseInt(number);;
//   }


// function funс () {
//     let loader = document.getElementById("page-preloader").style.display = 'none';
// };


// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//     .then(res => res.json())
//     .then(json => arrayJson(json), funс()) 
//     .catch(error => {
//         funс()
//         alert(error.message)
//     });  

// conversion();


// function addElement () {
//     let newDiv = document.createElement("div");
//         newDiv.innerHTML = "<h1>Money Converter</h1>"; 
//         my_div = document.getElementById("org_div1");
//         document.body.insertBefore(newDiv, my_div);
//         newDiv.style.cssText="color: red"; 
// }
// addElement()


// let newDiv = document.createElement("div");
//         newDiv.innerHTML = "<h1>Money Converter</h1>"; 
//         my_div = document.getElementById("org_div1");
//         document.body.insertBefore(newDiv, my_div);
//         newDiv.style.cssText="color: red"; 
// = innerHTML = parseInt(dollarPrice) * parseInt(number)
// let dollarPrice = null;
// function arrayJson (json) {
//     console.log(json)
//         for(var i = 0; i < json.length; i++){
//             if(json[i].ccy === "USD"){
//                 dollarPrice = json[i].buy;
//             };
//         };
// };

// let dollar_conversion = document.getElementById("convertion_dollar").value;

// number.onchange = () => {
//     dollar_conversion = parseInt(dollarPrice) * parseInt(number);
//     console.log(dollar_conversion)
//     console.log(number)
//     console.log(dollarPrice)
// }



// }

// function conversion () {
//     let number = document.getElementById("Converter");
//     console.log(number)
//     let dollar_conversion = document.getElementById("convertion_dollar").value = parseInt(dollarPrice) * parseInt(number); 
// };

// let vanos = document.getElementById('bob').value;

// vanos.onclick = function conversion_option () {
    
//     console.log(vanos);

// function conversion () {

   
//     let number = document.getElementById("Converter").value;
//     let dollar_conversion = document.getElementById("convertion_dollar").value;
//     console.log(number)
//     console.log(dollar_conversion)

//     dollar_conversion.onchange = (dollarPrice) => {
//         parseInt(dollarPrice) * parseInt(number);
//         console.log(dollarPrice)
      
//       };
    
  
// };

// value = parseInt(dollarPrice) * parseInt(number)
// = parseInt(dollarPrice) * parseInt(number)

// function funс () {
//     let loader = document.getElementById("page-preloader").style.display = 'none';
// };

// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//     .then(res => res.json())
//     .then(json => arrayJson(json), funс()) 
//     .catch(error => {
//         funс();
//         alert(error.message);
//     });  

// document.body.onload = addElement;
// let my_div = newDiv = null;

// function addElement () {
//     let newDiv = document.createElement("div");
//         newDiv.innerHTML = "<h1>Money Converter</h1>"; 
//         my_div = document.getElementById("org_div1");
//         document.body.insertBefore(newDiv, my_div);
//         newDiv.style.cssText="color: red"; 
// }



// let dollarPrice = null;
// function arrayJson (json) {
//     console.log(json)
//         for(var i = 0; i < json.length; i++){
//             if(json[i].ccy === "USD"){
//                 dollarPrice = json[i].buy;
//             };
//         };
// };



// function conversion () {
//     let number = document.getElementById("Converter");
//     console.log(number)
//     let dollar_conversion = document.getElementById("convertion_dollar").value = parseInt(dollarPrice) * parseInt(number); 
// };


// function funс () {
//     let loader = document.getElementById("page-preloader").style.display = 'none';
// };

// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//     .then(res => res.json())
//     .then(json => arrayJson(json), funс()) 
//     .catch(error => {
//        alert(error.message)
//     });  

// conversion();



 

// function arrayJson (json) {
//     console.log(json)
//         for(var i = 0; i < json.length; i++){
//             if(json[i].ccy === "USD"){
//                 dollarPrice = json[i].buy;
//             };
//         };
// };



// function conversion () {
//     let number = document.getElementById("Converter").value;
//     console.log(number)
//     let dollar_conversion = document.getElementById("convertion_dollar").value = addEventListener("change", function() {
//         innerHTML = parseInt(dollarPrice) * parseInt(number);
//     });;
//     console.log(dollar_conversion )
    
// };


// function funс () {
//     let loader = document.getElementById("page-preloader").style.display = 'none';
// };

// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//     .then(res => res.json())
//     .then(json => arrayJson(json), funс()) 
//     .catch(error => {
//        alert(error.message)
//     });  

// conversion();











// .value = innerHTML = parseInt(dollarPrice) * parseInt(number);


// .value = innerHTML = parseInt(dollarPrice) * parseInt(number);

// gfdgfgfgfgfgfg
// dfddfdfdfdfdf
// cxcdfsf

// let dollarPrice = null;
// function arrayJson (json) {
//         for(var i = 0; i < json.length; i++){
//             if(json[i].ccy === "USD"){
//                 dollarPrice = json[i].buy;
//             };
//         };
// };

// function conversion () {
//     let number = document.getElementById("Converter").value;
//     let dollar_conversion = document.getElementById("convertion_dollar").value = innerHTML = parseInt(dollarPrice) * parseInt(number);
// };






// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//     .then(res => res.json())
//     .then(json => arrayJson(json));

// conversion();



// async function functionSome () {
//     const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
  
// const json = await response.json();
// console.log(json)
 
// let dollarPrice = null;

//     for(var i = 0; i < json.length; i++){
//         if(json[i].ccy === "USD"){
//             dollarPrice = json[i].buy;
//         };
//     };
//     return dollarPrice;
// };


// async function conversion (dollarPrice) { 
//     const result = await functionSome();
//     let convertion = document.getElementById("Converter");
//     let dollar_conversion = document.getElementById("convertion_dollar").value = innerHTML = parseInt(dollarPrice) * parseInt(result);
//         console.log(dollar_conversion)
//         console.log(dollarPrice);
//         console.log(result);
       
// };





// async function functionSome () {
//     const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
  
// const json = await response.json();
// console.log(json)
 
// let dollarPrice = null;

//     for(var i = 0; i < json.length; i++){
//         if(json[i].ccy === "USD"){
//             dollarPrice = json[i].buy;
//         };
//     };
//     return dollarPrice;
// };

// function funс () {
//     let loader = document.getElementById("page-preloader").style.display = 'none';
// };
// funс();

// async function conversion (dollarPrice) { 
//     const result = await functionSome();
//     console.log(result);
//     let convertion = document.getElementById("Converter");
//     let dollar_conversion = document.getElementById("convertion_dollar").value = innerHTML = parseInt(dollarPrice) * parseInt(result);
//         console.log(dollar_conversion)
//         console.log(dollarPrice);
//         console.log(result);
       
// };
