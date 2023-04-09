const button = document.getElementById('converter-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const Bitcoin = 141.192

const convertValue = () => {
    const inputReais = document.getElementById('input-real').value
    
    const real = document.getElementById('valueReal')
    const Dolar1 = document.getElementById('valueDolar')
   
   // real.innerHTML = inputReais
    //Dolar1.innerHTML = inputReais / dolar

    real.innerHTML = new Intl.NumberFormat('pt-br',
    { style: 'currency', currency: 'BRL' }
    ).format(inputReais) //para formatar os valores e mostrar os simbolos da moeda

if(select.value === "US$ Dólar americano") {
    Dolar1.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar) //para formatar os valores e mostrar os simbolos da moeda
} 

if(select.value === "€ Euro"){
    Dolar1.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
    ).format(inputReais / euro)
}


if(select.value === "฿ Bitcoin"){
    Dolar1.innerHTML = new Intl.NumberFormat('pt-br',
    { style: 'currency', currency: 'BTC' }
    ).format(inputReais / Bitcoin)
}

}

changeCurrency = () => {
    const moedaDolar = document.getElementById('moedaDolar')
    const imgEUA = document.getElementById('img-EUA')

    if(select.value ==='US$ Dólar americano'){
        moedaDolar.innerHTML = " Dólar americano"
        imgEUA.src = "./IMG/EUA.png"
    }
    
    if(select.value ==='€ Euro'){
        moedaDolar.innerHTML = " € Euro"
        imgEUA.src = "./IMG/Euro.png"
    }

    if(select.value ==='฿ Bitcoin'){
        moedaDolar.innerHTML = " ฿ Bitcoin"
        imgEUA.src = "./IMG/Bitcoin.png"
    }

    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener("change", changeCurrency)



/* addeventlistener =>> ouve que foi clicado botao e chama a fucão determinada nos parenteses
INNERHTML ==>> SERVE PARA PEGAR VALORES E ATUALUZAR NOVOS VALORES NOS*/