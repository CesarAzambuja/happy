const options = {
    dragging:false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom:false,
    zoomControl: false
}

//Create Map
const map = L.map('mapid', options).setView([-23.9554498,-46.3702686], 13);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2]
})


//Create and add marker
L.marker([-23.9554498,-46.3702686], {icon})
.addTo(map)


/*Image Gallery*/ 

function selectImage(event){
    const button = event.currentTarget
    //remover todas as classes actives
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove('active')
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    //atualizar o container de imagem
    imageContainer.src = image.src
    
    //adicionar a classe .active para este botão
    button.classList.add('active')
}   