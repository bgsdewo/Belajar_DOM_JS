//Pengertian Document object model

//1.DOM:sebuah representasi dari struktur dokumen html atau xml dalam bentuk
//tree(akar) oleh javascrip

//2.DOM memungkinkan kita untuk mengubah struktur,isi,atau stil dokumen melalui
//kode javascript.

//3.DOM memiliki struktur hierarkis,dimana setiap elemen dokumen merupakan
//child node  dari elemen lain atau root node (document)

// console.dir(document)//ngecek ada apa aaja di document
// document.all[11].innerText = 'MAU MAKAN'


//Dapatkan Element Html Berdasarkan Id

//Document
//entry point dari keseluruhan objek yang dimiliki oleh DOM.Memiliki seluruh representasi konten
//halaman web,dan berbagai method serta properti yang bisa dimanfaatkan


//ada tiga cara selecting dengan DOM

//1.Metode getElementById()antarmuka Documentmengembalikan Elementobjek yang mewakili elemen yang idpropertinya cocok dengan 
// string yang ditentukan. Karena ID elemen harus unik jika ditentukan, ini adalah cara yang berguna untuk mendapatkan 
// akses ke elemen tertentu dengan cepat.
//setiap DOM awali dengan document!
// console.log(document.getElementById('banner'))
//cara melihat apa aja si isi dari objek atau interaksi apa aja yang dimiliki si banner ini(IMG =KARENA BANNER ITU IMG)
// const banner = document.getElementById('banner')
// console.dir(banner)
// //bisa ambil objek juga setelah udh tau isinya
// console.log(banner.src)

//2.Mengambil dengan tag
// console.log(document.getElementsByTagName('img')[0].src)//ini bisa juga 
// const allImages = document.getElementsByTagName('img')
// console.dir(allImages[3].src)

//Study casus 
// const allImages = document.getElementsByTagName('img')

// for(let img of allImages) {
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg"
// }

//3.Mengambil dengan class
// const squareImages = document.getElementsByClassName('square') 
// for (let img of squareImages) {
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"
// }


//Lebih Mudah Memilih Elemen Dengan Menggunakan Queryselector
// console.log(document.querySelector('p'))//pake elemen
// console.log(document.querySelectorAll('p'))//pake elemen semua
// console.log(document.querySelectorAll('p a'))//artinya ambil semua elemen achor yg ada di paragraf pertama//bisa di for loop(kaya buat dapat collection)
// console.log(document.querySelector('#red'))//pake id
// console.log(document.querySelector('.big'))//pake class

// console.log(document.querySelector('a'))

//Memahami Innerthtml, Innertext Dan Textcontent

// const heading = document.querySelector('h1')
// console.dir(heading)
// console.log(heading.innerText)

// const para = document.querySelector('p')
// console.log(para.textContent)//tidak bisa
// console.log(para.innerText)//tidak bisa
// console.log(para.innerHTML)//bisa make CSS misal <b>ubah</b>


//Mendapatkan Attribute Yang Dimiliki Element Html
// const banner = document.querySelector('#banner')
// banner.alt = 'Pepaya'
// //menambahkan atribut lain dengan cara dibawah ini tidak bisa
// //banner.class = 'isian-class // ini tidak bisa
// //ada caranya yaitu!
// banner.setAttribute('class','isian-class')
// //cara mendapatkan class
// banner.getAttribute('class')
// console.log(banner)

//Melakukan Styling Dengan Javascript Dom
// const links = document.getElementsByTagName('a') 

// for (let link of links) {
//     link.style.color = 'red'
//     link.style.textDecorationColor = 'magenta'
// }

//Memanfaatkan Classlist Untuk Styling Dengan Dom
// const headOne = document.querySelector('h1')

// //ini bakal nimpa ada cara lainnya 
// headOne.setAttribute('class', 'border-danger')//menambahkan kelas border ranger
// headOne.setAttribute('class', 'bg-info')
// //yaitu
// // headOne.classList.add('border-danger', 'bisa menambahkan class yang lainnya')
// // //ada cara mengahpus class
// // headOne.classList.remove('isi class yang bakal dihapus')
// console.log(headOne.classList.contains('text-white'))//dia bakal ngecek,ada ga kelas yang bernama text-white

//cara diatas bisa lebih mudah dibandingkan cara dibawah ini
// for (let link of links) {
//     link.style.color = 'red'
//     link.style.textDecorationColor = 'magenta'
// }

//Menjelajahi Element Parent, Child Dan Sibling

//Parent
// const textBold =document.querySelector('b')
// // console.log(textBold.parentElement.//bisa parentElementLagi)
// const orangTua = textBold.parentElement//ngecek parent element dari bold 
// // console.log(orangTua.parentElement)//ini ngecek parent element dua tingkat
// const paragraf = orangTua
// console.log(paragraf.children[6].children)//mengecek turunan dari paragraf bukan paragraf variabel tapi paragraf html


//mencari element sebelum dan sesudahnya
// const squareImg = document.querySelector('.square')
// // console.log(squareImg.nextSibling)//dia itu ngecek source codenya tapi sesudah dari elemen gambar,kaya ada barus baru dan tap gtu
// // console.log(squareImg.previousSibling)//ini sama kaya next sibling
// console.log(squareImg.previousElementSibling)//ini artinya kita memilih element sebelum dari sbling ada apa
// console.log(squareImg.nextElementSibling    )//ini artinya kita memilih element sebelum dari sbling ada apa

//Memahami Append Dan Appendchild
//membuat tag elemen yang belum ada di source code
    // const imageEmpty = document.createElement('img');
    // // Menambahkan atribut src ke elemen gambar
    // imageEmpty.src = 'https://o-cdn-cas.sirclocdn.com/parenting/images/kucing-domestik.width-800.format-webp.webp';
    // //menambahkan elemen yang tadi kita masukan kedalam variabel ke html,yg sebelumnya tidak ada di html
    // //secara default dia akan nambah ke baris paling akhir
    // imageEmpty.classList.add('square')
    // document.body.appendChild(imageEmpty)
    // // Memeriksa apakah atribut src sudah ditambahkan
    // // if (imageEmpty.hasAttribute('src')) {
    // //     console.log('Atribut src sudah ditambahkan:', imageEmpty.getAttribute('src'));
    // // } else {
    // //     console.log('Atribut src belum ditambahkan.');
    // // }

//Menggunakan append
//ini artinyakita menambahkan text di konten paragraf paling atas,dan dia berada di akhir konten
// const paragraf = document.querySelector('p')
// paragraf.append('pepe kuda asem wueeenaakkkk poooollll')

//Tips menambahkan elemen setelah,sebelum,atau diantara elemen tersebut
//ini contoh menambahkan elemen h2 setelah elemen h1
// const h2 = document.createElement('h2')
// h2.append('This is about cat!')
// const h1 = document.querySelector('h1')
// h1.insertAdjacentElement('afterend',h2)


// Memahami Remove Dan Removechild
//kita tidak bisa langsung menghapus suatu elemen,kita harus menyeleksinya terlebih dahulu
// const firstLi = document.querySelector('li')
// firstLi.parentElement.removeChild(firstLi)
// console.log(firstLi)

//cara diatas sangat tidak efektif karna harus menyeleksi dlu,ada cara 
//tanpa harus menyeleksinya dahulu
// const img = document.querySelector('img')
// img.remove
