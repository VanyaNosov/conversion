let dollarPrice = null;
function arrayJson (json) {
    console.log(json)
        for(var i = 0; i < json.length; i++){
            if(json[i].ccy === "USD"){
                dollarPrice = json[i].buy;
            };
        };
};

function conversion () {
    let number = document.getElementById("Converter").value;
    console.log(number)
    let dollar_conversion = document.getElementById("convertion_dollar").value = parseInt(dollarPrice) * parseInt(number);;
  }


function funс () {
    let loader = document.getElementById("page-preloader").style.display = 'none';
};


fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(res => res.json())
    .then(json => arrayJson(json), funс()) 
    .catch(error => {
        funс()
        alert(error.message)
    });  

conversion();


function addElement () {
    let newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>Money Converter</h1>"; 
        my_div = document.getElementById("org_div1");
        document.body.insertBefore(newDiv, my_div);
        newDiv.style.cssText="color: red"; 
}
addElement()


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
