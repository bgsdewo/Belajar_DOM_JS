//Bagian 2
//Pengantar Event Dom

//Event:menindaklanjuti inputan atau perintah pengguna


//Menjalankan Event Pada Inline Element
//melalui HTML
// {/* <button onclick="alert('Kamu udh pencet aku')">Click saya!</button> */} penggunaan ini tidak disarankan!


//Menjalankan Event Melalui Property Dom
// const button = document.querySelector('#clickme')

// button.onclick = function() {
//     console.log('You clicked me')
// }

// button.onmouseover =  function() {
//     console.log('jangan sentuh aku')
// }

// Mengenal Fungsi Addeventlistener
// //event spesifik untuk menjalankan callback
// const eventbtn = document.querySelector('#listener')
// eventbtn.addEventListener('click',function(){
//     console.log('sarageyo')
// })

// Latihan Addeventlistener Untuk Generate Color
// const button =document.querySelector('#generate')
// const h1 = document.querySelector('h1')

// button.addEventListener('click', () =>{
//     const newColor = generateRandomColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor
// })

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}

// //Manfaatkan Keyword This Pada Event Dom
// const buttons = document.querySelectorAll('button')
// console.log(buttons)

// for (let button of buttons) {
//     button.addEventListener('click',() =>{
//         button.style.backgroundColor = generateRandomColor()
//         button.style.color = generateRandomColor()
//     })
// }

// const headings = document.querySelectorAll('h1')

// for(let heading of headings) {
//     heading.addEventListener('click',() => {
//         heading.style.backgroundColor = generateRandomColor()
//     })
// }

// function colorize() {
    
//     this.style.backgroundColor = generateRandomColor()
//     this.style.color = generateRandomColor()
// }

//Belajar Keyboard Event Dan Mengenal Object Dalam Event
// const button = document.querySelector('button').addEventListener('click',(e)=> {
//     console.log(e)//CARA MENGECEK OBJEK
// }) 

// const input = document.querySelector('input')
// input.addEventListener('keydown', (e)=> {
//     // console.log(e.key)//LIHAT ada apa aja di objek adeventlistener bserta propertynya
//     //tapi untuk pengkondisiian jika suatu saat saya buat website dan user mau menggunakan keyboard itu kita pake nama dari property
//     //e.code nya
//     switch(e.code) {
//         case 'ArrowUp':
//             console.log('tombol atas')
//             break;
//             case 'ArrowRight':
//             console.log('tombol kanan')
//             break;
//             case 'ArrowDown':
//             console.log('tombol bawah')
//             break;
//             case 'ArrowLeft':
//             console.log('tombol kiri')
//             break;
//             default: console.log('inputan tidak bisa')
            
//     }
// })
// input.addEventListener('keyup', ()=> {
//     console.log('Tomobl di lepas')
// })

//Mengenal Event Preventdefault
// const form = document.querySelector('form')
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('submit')
// })  

//Praktek Input Realtime Dengan Event Dan Dom Smpe habis materi kodingannya sama
// const form = document.querySelector('form')
// const input = document.querySelector('input')
// const list = document.querySelector('#notes')

// input.addEventListener('change', (e) => {
//     console.log('nilai berubah')
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const noteValue = input.value
//     const newList = document.createElement('li')
//     newList.innerText = noteValue
//     list.append(newList)
//     input.value= ''
// })  


//Event Input Dan Change Pada Form
// const form = document.querySelector('form')
// const input = document.querySelector('input')
// const list = document.querySelector('#notes')

// // input.addEventListener('change', (e) => {
// //     console.log('nilai berubah')
// // })


// input.addEventListener('input', (e) => {
//     document.querySelector('h1').innerText = input.value
//     console.log('nilai berhasil diinput')
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const noteValue = input.value
//     const newList = document.createElement('li')
//     newList.innerText = noteValue
//     list.append(newList)
//     input.value= ''
// })

//Mengenal Event Bubbling
// const button = document.querySelector('#changeColor')
// const container = document.querySelector('#container')

// button.addEventListener('click',function(e){
//     container.style.backgroundColor = generateRandomColor()
//     e.stopPropagation()
    
// })
// container.addEventListener('click',function(){
//     container.classList.toggle('hide')
// })


//Mengenal Event Delegation
const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('#notes')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteValue = input.value
    const newList = document.createElement('li')
    newList.innerText = noteValue
    list.append(newList)
    input.value= ''
})  


list.addEventListener('click', (e) => {
   e.target.nodeName === 'LI' && e.target.remove()
})