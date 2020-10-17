//Create Map
const map = L.map('mapid').setView([-23.9554498,-46.3702686], 13);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //Remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


//uploads photos

function addPhotoField(){
    //Pegar o container fotos #images
   const container = document.querySelector('#images')

    //Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //Realizar o clone da ultima imagem adicionado
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //Se o valor estiver vazio não adicionar
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //Limpar o campo antes de adicionar
   newFieldContainer.children[0].value = ""

    //add o clone ao container de imagem #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo   
    span.parentNode.remove()
}

//Trocar o Sim e Não do Final de Semana

function toggleSelect(event){

    //remover a class active
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    //add o class select no clicado
    const button = event.currentTarget
    button.classList.add('active')

    //Atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

    function validate(event) {

        //validar se os campos Span lat e lng estã preenchidos com um if buscando o campo com document queryselector e vendo o value
        event.preventDefault()
    }
   
}