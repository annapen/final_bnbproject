
'strict mode'

let restaurantArray = []
let elImageContainer = document.getElementById('imageContainer')

function RestaurantObject(name, logoPath, restPath, id, cuisine){
this.name = name
this.logoPath = logoPath
this.restPath = restPath
this.id = id
this.cuisine = cuisine
this.clicked = 0
this.shown = 0
}
//declare new objects and accompanying properties within each new restaurant Object
let BibiBop = new RestaurantObject('BibiBop', './assets/bibibop.png', './assets/rest_bibibop.jpg', 'BibiBop', 'asian')
let Chipotle = new RestaurantObject('Chipotle', './assets/chipotle.jpg', './assets/rest_chipotle.png', 'Chipotle', 'spanish')
let Cesco = new RestaurantObject('CescoOsteria', './assets/cesco.png', './assets/rest_cesco.jpg', 'Cesco Osteria', 'italian')
let GringoMariachi = new RestaurantObject('GringoMariachi', './assets/gringo_mari.png', './assets/rest_gringomari.jpg', 'Gringos & Mariachis', 'spanish')
let Jaleo = new RestaurantObject('Jaleo', './assets/jaleo.jpg', './assets/rest_jaleo.jpg', 'Jaleo', 'spanish')
let Tandoori = new RestaurantObject('TandooriNights', './assets/tandoori.png', './assets/rest_tandoori.jpg', 'Tandoori Nights', 'asian')
let LaMadeleine = new RestaurantObject('laMadeleine', './assets/la_madeleine.jpg', './assets/rest_madeleine.jpg', 'La Madeleine', 'french')
let HanaroSushi= new RestaurantObject('HanaroSushi', './assets/hanaro.png', './assets/rest_hanaro.jpg', 'Hanaro Sushi', 'asian')
let MamaLucia = new RestaurantObject('MamaLucia', './assets/mama_lucia.jpg', './assets/rest_mamalucia.jpg', 'Mama Lucia', 'italian')
let MannyOlga = new RestaurantObject('MannyOlga', './assets/manny_olga.png', './assets/rest_manny-olga.jpg', 'Manny & Olga\'s Pizza', 'italian')
let MonAmi = new RestaurantObject('MonAmiGabi', './assets/mon_ami.jpg', './assets/monami.jpg', 'Mon Ami Gabi', 'french')
let Olazzo = new RestaurantObject('Olazzo', './assets/olazzo.jpg', './assets/rest_olazzo.jpg', 'Olazzo', 'italian')
let Panetteria = new RestaurantObject('Panetteria', './assets/panetteria.jpg', './assets/rest_panetteria.jpg', 'La Panetteria', 'french')
let Raku = new RestaurantObject('Raku', './assets/raku.png', './assets/rest_raku.jpg', 'Raku', 'asian')
let UncleJulios= new RestaurantObject('UncleJulios', './assets/unclejulios.jpg', './assets/rest_julios.jpg', 'Uncle Julios', 'spanish')
let LeVieux = new RestaurantObject('LeVieuxLogis', './assets/le_vieux.jpg', './assets/rest_levieuxlogis.jpg', 'Le Vieux Logis', 'french')


// push new instances/objects into the restaurant Array
restaurantArray.push(BibiBop, Chipotle, Cesco, GringoMariachi, Jaleo, Tandoori, LaMadeleine, HanaroSushi, MamaLucia, MannyOlga, MonAmi, Olazzo, Panetteria, Raku, UncleJulios, LeVieux)

//pulls data from the radio button inputs 
let cusineSelectors = document.querySelectorAll('input')

//declared function to select cuisine options by clicking one of the four radio button selectors
function restaurantSelector(clickedElements, restaurants){
    for (let restaurant of restaurants){
        for (let clickedElement of clickedElements){
            clickedElement.addEventListener('click', function(event){
                if (event.currentTarget.value === restaurant.cuisine){
                    elImageContainer.innerHTML ==  ' '
                    displayLogoImage( restaurants, clickedElements)
                }
                clickedRestaurantLogo(restaurants, elImageContainer.childNodes)
            })
        }
    }
}

// Render the logo images based on the selected restaurant category
function discplayLogoImage(restaurant, val){
    for(restaurant of restaurants){
        let logo = document.createElement('img')
        if(restaurant.cuisine === val){
            logo.name = restaurant.name
            logo.src = restaurant.logoPath
            elImageContainer.appendChild(logo)
        } 
    }
}

