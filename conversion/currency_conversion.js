const SelectorCurrency = document.createElement('select'); 

const selector = document.createElement('select'); 

const currencyBlock = document.getElementById('currency'); 

const grnBlock = document.getElementById('grn'); 

const button = document.getElementById('button');

button.onclick = function () {chg();conversion()};

selector.style.cssText="cursor: pointer";

SelectorCurrency.style.cssText="cursor: pointer";

let currencies = { 
    USD: null, 
    EUR: null, 
    RUR: null,
}; 
 
let direction = false; 
 
function arrayJson (json) { 
    for(let i = 0; i < json.length; i++){ 
        currencies[json[i].ccy] = json[i].buy; 
     
    };   
}; 

const Number_Of_Currencies = document.getElementById("Converter"); 

function conversion () { 
 
    let Amount_Of_Conversion = document.getElementById("convertion_dollar"); 
 
        Amount_Of_Conversion.value = direction ? Number_Of_Currencies.value / currencies[selector.value] : currencies[selector.value] * Number_Of_Currencies.value;
}; 
 
    Number_Of_Currencies.addEventListener('input', () => conversion()); 
    selector.addEventListener('change', () => conversion()); 

function closePreloader () { 
    document.getElementById("page-preloader").style.display = 'none'; 
}; 
 
fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11') 

    .then(res => res.json()) 
 
    .then((json) => { 
        arrayJson(json);  
        closePreloader(); 
    })  
 
    .catch(error => { 
        closePreloader(); 
        alert(error.message);
    });   
 
conversion(); 
 
const title = document.createElement('h1'); 
    title.innerText = 'Money Converter'; 
    title.style.cssText="color: red"; 
 
const parrent = document.getElementById('org_div1')
    parrent.appendChild(title); 
         
const optGrn = document.createElement("option"); 
 
    SelectorCurrency.options.add(optGrn, 1);      
    grn.appendChild(SelectorCurrency); 
    optGrn.text = "₴"; 
    optGrn.value = 'Грн'; 
    optGrn.default = true; 
 
for(let i = 0; i < Object.keys(currencies).length; i++) { 
    let opt = document.createElement("option"); 
    opt.id = Object.keys(currencies)[i]; 
    opt.text = Object.keys(currencies)[i]; 
    opt.value = Object.keys(currencies)[i]; 
    selector.appendChild(opt) 
} 
    currencyBlock.appendChild(selector); 
 
function chg() { 
    if (!direction) { 
        currencyBlock.removeChild(selector); 
        grnBlock.removeChild(SelectorCurrency); 
        currencyBlock.appendChild(SelectorCurrency);    
        grn.appendChild(selector); 
        direction = true;  
    } else {
        currencyBlock.removeChild(SelectorCurrency); 
        grnBlock.removeChild(selector); 
        currencyBlock.appendChild(selector); 
        grnBlock.appendChild(SelectorCurrency); 
        direction = false;  
    } 
}







  // console.log(selector.value)
   
        // grn.value = currencies[selector.value] * dollar;

        // const input3 = document.createElement("input"); 
    //     input3.id = 'new_input' 
    //     my_div2 = document.getElementById("org_div1"); 
    //     document.body.appendChild(input3 , my_div2); 
    //     title.style.cssText="color: red"; 
         
        // const opt = document.createElement("option"); 
 
        // const opt2 = document.createElement("option"); 
 
        // const opt3 = document.createElement("option"); 
 
        // selector.options.add(opt, 1); 
        // selector.options.add(opt2, 1); 
        // selector.options.add(opt3, 1); 
        // selector.id = 'currency_select'; 
        // opt.id = 'menu_block'; 
        // opt2.id = 'menu_block'; 
        // opt3.id = 'menu_block'; 
        // opt.text = "$"; 
        // opt2.text = "€"; 
        // opt3.text = "₽"; 
        // opt.value = 'USD'; 
        // opt2.value = 'EUR'; 
        // opt3.value = 'RUR'; 

    // dollar = grn.value / currencies
    // grn.value = currencies[selector.value] / dollar;
    // grn.value = currencies[selector.value] = grn.value / dollar;

    // if (selector2.value === "Грн") {
    //     dollar = grn.value / 
    // }
    // if(selector2 === "₴") {
    //     grn.value = grn.value / currencies;
    // }

// let currencies = { 
//     USD: null, 
//     EUR: null, 
//     RUR: null, 
// }; 
 
// let direction = 'default'; 
 
// const x = document.getElementById('currency'); 
// const grn = document.getElementById('grn') 
 
 
 
// function arrayJson (json) { 
//         for(let i = 0; i < json.length; i++){ 
//             currencies[json[i].ccy] = json[i].buy; 
//         }; 
// }; 
 
// function conversion () { 
 
//     let grn = document.getElementById("convertion_dollar"); 
 
//     const dollar = document.getElementById("Converter").value; 
 
//     grn.value = currencies[selector.value] * dollar; 
// }; 
 
 
 
// const input = document.getElementById("Converter"); 
 
//     input.addEventListener('input', () => conversion()); 
 
// const selector2 = document.createElement('select'); 
 
// const selector = document.createElement('select'); 
 
 
//     selector.addEventListener('change', () => conversion()); 
 
// function closePreloader () { 
//     document.getElementById("page-preloader").style.display = 'none'; 
// }; 
 
 
// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11') 
 
//     .then(res => res.json()) 
 
//     .then((json) => { 
//         arrayJson(json);  
//         closePreloader(); 
//     })  
 
//     .catch(error => { 
//         closePreloader(); 
//         alert(error.message); 
//     });   
 
// conversion(); 
 
// function addElement () { 
 
//     const title = document.createElement('h1'); 
//         title.innerText = 'Money Converter'; 
//         title.style.cssText="color: red"; 
 
//     const parrent = document.getElementById('org_div1') 
//         parrent.appendChild(title); 
         
    // const input3 = document.createElement("input"); 
    //     input3.id = 'new_input' 
    //     my_div2 = document.getElementById("org_div1"); 
    //     document.body.appendChild(input3 , my_div2); 
    //     title.style.cssText="color: red"; 
 
 
        // const optGrn = document.createElement("option"); 
 
        // selector2.options.add(optGrn, 1);      
        // grn.appendChild(selector2); 
        // optGrn.text = "₴"; 
        // optGrn.value = 'Грн'; 
        // optGrn.default = true; 
 
 
         
         
        // const opt = document.createElement("option"); 
 
        // const opt2 = document.createElement("option"); 
 
        // const opt3 = document.createElement("option"); 
 
        // selector.options.add(opt, 1); 
        // selector.options.add(opt2, 1); 
        // selector.options.add(opt3, 1); 
        // selector.id = 'currency_select'; 
        // opt.id = 'menu_block'; 
        // opt2.id = 'menu_block'; 
        // opt3.id = 'menu_block'; 
        // opt.text = "$"; 
        // opt2.text = "€"; 
        // opt3.text = "₽"; 
        // opt.value = 'USD'; 
        // opt2.value = 'EUR'; 
        // opt3.value = 'RUR'; 
//         for(let i = 0; i < Object.keys(currencies).length; i++) { 
//             let opt = document.createElement("option"); 
//             opt.id = Object.keys(currencies)[i]; 
//             opt.text = Object.keys(currencies)[i]; 
//             opt.value = Object.keys(currencies)[i]; 
//             selector.appendChild(opt) 
//         } 
//         x.appendChild(selector); 
//         console.log(selector); 
// }; 
 
// function chg(){ 
//     if(direction ===  'default') { 
//         x.removeChild(selector); 
//         grn.removeChild(selector2); 
//         x.appendChild(selector2); 
//         grn.appendChild(selector); 
 
//         direction = 'reverse'  
//     } else { 
//         x.removeChild(selector2); 
//         grn.removeChild(selector); 
//         x.appendChild(selector); 
//         grn.appendChild(selector2); 
//         direction = 'default'  
 
//     } 
  
// } 
 

// let currencies = {
//     USD: null,
//     EUR: null,
//     RUR: null
// };
// function arrayJson (json) {
//         for(let i = 0; i < json.length; i++){
//             currencies[json[i].ccy] = json[i].buy;
//         };
// };

// function conversion () {

//     let grn = document.getElementById("convertion_dollar");

//     const dollar = document.getElementById("Converter").value;

//     grn.value = currencies[selector.value] * dollar;
// };



// const input = document.getElementById("Converter");

//     input.addEventListener('input', () => conversion());

//     const selector2 = document.createElement('select');

//     const selector = document.createElement('select');


//     selector.addEventListener('change', () => conversion());

// function closePreloader () {
//     document.getElementById("page-preloader").style.display = 'none';
// };


// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')

//     .then(res => res.json())

//     .then((json) => {
//         arrayJson(json); 
//         closePreloader();
//     }) 

//     .catch(error => {
//         closePreloader();
//         alert(error.message);
//     });  

// conversion();

// function addElement () {

//     const title = document.createElement('h1');
//         title.innerText = 'Money Converter';
//         title.style.cssText="color: red";

//     const parrent = document.getElementById('org_div1')
//         parrent.appendChild(title);
        
//     const input3 = document.createElement("input");
//         input3.id = 'new_input'
//         my_div2 = document.getElementById("org_div1");
//         document.body.appendChild(input3 , my_div2);
//         title.style.cssText="color: red";

//         const grn = document.getElementById('grn')

//         const optGrn = document.createElement("option");

//         selector2.options.add(optGrn, 1);     
//         grn.appendChild(selector2);
//         optGrn.text = "₴";
//         optGrn.value = 'Грн';

        
//         const x = document.getElementById('currency');
        
//         const opt = document.createElement("option");

//         const opt2 = document.createElement("option");

//         const opt3 = document.createElement("option");

//         selector.options.add(opt, 1);
//         selector.options.add(opt2, 1);
//         selector.options.add(opt3, 1);
//         selector.id = 'currency';
//         opt.id = 'menu_block';
//         opt2.id = 'menu_block';
//         opt3.id = 'menu_block';
//         opt.text = "$";
//         opt2.text = "€";
//         opt3.text = "₽";
//         opt.value = 'USD';
//         opt2.value = 'EUR';
//         opt3.value = 'RUR';
//         x.appendChild(selector);
// };

// function chg(){
// 	const  dollar_and_grn = selector.cloneNode(true);
// 	const  grn_and_dollar = selector2.cloneNode(true);
// 	selector2.parentNode.insertBefore(dollar_and_grn,selector2);
// 	selector.parentNode.insertBefore(grn_and_dollar,selector);
//     selector.parentNode.removeChild(selector);
// 	selector2.parentNode.removeChild(selector2);
// }

// addElement();

// let currencies = {
//     USD: null,
//     EUR: null,
//     RUR: null
// };
// function arrayJson (json) {
//         for(let i = 0; i < json.length; i++){
//             currencies[json[i].ccy] = json[i].buy;
//         };
// };

// function conversion () {

//     let grn = document.getElementById("convertion_dollar");

//     const dollar = document.getElementById("Converter").value;

//     grn.value = currencies[selector.value] * dollar;
// };

// const input = document.getElementById("Converter");

//     input.addEventListener('input', () => conversion());

//     const selector2 = document.createElement('select');

//     const selector = document.createElement('select');


//     selector.addEventListener('change', () => conversion());

// function closePreloader () {
//     document.getElementById("page-preloader").style.display = 'none';
// };


// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')

//     .then(res => res.json())

//     .then((json) => {
//         arrayJson(json); 
//         closePreloader();
//     }) 

//     .catch(error => {
//         closePreloader();
//         alert(error.message);
//     });  

// conversion();

// function addElement () {

//     const title = document.createElement('h1');
//         title.innerText = 'Money Converter';
//         title.style.cssText="color: red";

//     const parrent = document.getElementById('org_div1')
//         parrent.appendChild(title);
        
//     const input3 = document.createElement("input");
//         input3.id = 'new_input'
//         my_div2 = document.getElementById("org_div1");
//         document.body.appendChild(input3 , my_div2);
//         title.style.cssText="color: red";

//         const grn = document.getElementById('grn')

//         const optGrn = document.createElement("option");

//         selector2.options.add(optGrn, 1);     
//         grn.appendChild(selector2);
//         optGrn.text = "₴";
//         optGrn.value = 'Грн';

        
//         const x = document.getElementById('currency');
        
//         const opt = document.createElement("option");

//         const opt2 = document.createElement("option");

//         const opt3 = document.createElement("option");

//         selector.options.add(opt, 1);
//         selector.options.add(opt2, 1);
//         selector.options.add(opt3, 1);
//         selector.id = 'currency';
//         opt.id = 'menu_block';
//         opt2.id = 'menu_block';
//         opt3.id = 'menu_block';
//         opt.text = "$";
//         opt2.text = "€";
//         opt3.text = "₽";
//         opt.value = 'USD';
//         opt2.value = 'EUR';
//         opt3.value = 'RUR';
//         x.appendChild(selector);
// };

// function chg(){
// 	const  dollar_and_grn = selector.cloneNode(true);
// 	const  grn_and_dollar = selector2.cloneNode(true);
// 	selector2.parentNode.insertBefore(dollar_and_grn,selector2);
// 	selector.parentNode.insertBefore(grn_and_dollar,selector);
//     selector.parentNode.removeChild(selector);
// 	selector2.parentNode.removeChild(selector2);
// }

// addElement();


    




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
