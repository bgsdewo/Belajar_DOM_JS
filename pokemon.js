//https://raw.githubusercontent.com/PokeAPI/sprites/master/spirites/pokemon/1.png

const container = document.querySelector('#container');
const baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 1;i <= 500;i++) {
    // //ngecek aoakah loopnya berhasil
    // container.append(i)
    const pokeBall = document.createElement('div')
    pokeBall.classList.add('pokemon')
    const imgPokemon = document.createElement('img')
    imgPokemon.src = `${baseImgUrl}${i}.png`

    const label = document.createElement('span')
    label.innerText = `Urutan ke -${i}`

    pokeBall.appendChild(imgPokemon)
    pokeBall.appendChild(label)
    container.appendChild(pokeBall)//kalo mau sisipin element pake appendChild
}