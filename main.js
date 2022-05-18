//#region 
const iceCream = [
    { id:1, category:'iceCream', name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 },

    { id:2, category:'iceCream', name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 },

    { id:3, category:'iceCream', name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }]

const vessels = [
    { id:4, category:'vessels', name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 },

    { id:5, category:'vessels', name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }]

const toppings = [
    { id:6, category:'toppings', name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 },

    { id:7, category:'toppings', name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }]

    const items = {iceCream, vessels, toppings}

//#endregion

const cart = []
let total = 0.00

// NOTE maybe i could refactor the unnamed function in each forEach into a named function that is reused in each
function drawIceCreamCards(){
    let htmlChunk = '<h2>Ice Cream</h2>'
    iceCream.forEach(i => {
        htmlChunk += `<div onclick='addItem(${i.id}, "${i.category}")' class="col-md-4 p-2 card">
        <img class="object-cover p-1" src="${i.image}" alt="">
        <p>${i.name}</p>
        <p>$${i.price.toFixed(2)}</p>
        </div>`
    });
    document.getElementById('ice-cream-menu-row').innerHTML = htmlChunk
}
function drawVesselCards(){
    let htmlChunk = '<h2>Vessels</h2>'
    vessels.forEach(i => {
        htmlChunk += `<div onclick='addItem(${i.id}, "${i.category}")' class="col-md-4 p-2 card">
        <img class="object-cover p-1" src="${i.image}" alt="">
        <p>${i.name}</p>
        <p>$${i.price.toFixed(2)}</p>
        </div>`
    });
    document.getElementById('vessels-menu-row').innerHTML = htmlChunk
}
function drawToppingsCards(){
    let htmlChunk = '<h2>Toppings</h2>'
    toppings.forEach(i => {
        htmlChunk += `<div onclick='addItem(${i.id}, "${i.category}")' class="col-md-4 p-2 card">
        <img class="object-cover p-1" src="${i.image}" alt="">
        <p>${i.name}</p>
        <p>$${i.price.toFixed(2)}</p>
        </div>`
    });
    document.getElementById('toppings-menu-row').innerHTML = htmlChunk
}

// NOTE might be wise to throw an error or do something if an invalid input gets in 
function addItem(id, key) {
    let arr = items[key]
    let cartable = arr.find(item => item.id == id)
    cart.push(cartable)
    total += cartable.price
    document.getElementById('total-price').innerText = '$' + total.toFixed(2)
    drawCart()
}
// abstracted to addItem
// function addIceCream(id){
//     let cartable = iceCream.find(item => item.id == id)
//     cart.push(cartable)
//     console.log(cart)
//     drawCart()
// }

function drawCart() {
   let htmlChunk = ''
   cart.forEach(i => {
       htmlChunk += `<li class="d-flex justify-content-between border-bottom border-secondary">
       <h6 id="name-col" class="pt-2">${i.name}</h6>
       <h6 id="each-col" class="pt-2">$${i.price}</h6>
      
   </li>`
   });
   
   document.getElementById('cart-list').innerHTML = htmlChunk
}


function drawAll(){
    drawIceCreamCards()
    drawVesselCards()
    drawToppingsCards()
}

function reset(){
    cart.length = 0
    total = 0.00
    document.getElementById('total-price').innerText = "$" + total.toFixed(2)
    drawCart()
}

drawAll()