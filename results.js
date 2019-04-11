'strict mode'

//Function created to gather restaurant object from local storage
function getDataFromLocalStorage(){
  let data = JSON.parse(localStorage.getItem('restaurant'))
  selectedRestaurant(data)
}
//Function created to display selected restaurant object
function selectedRestaurant(restaurant){
  //Reference DOM elements for display
  let restaurantDiv = document.getElementById('result-image')
  let restaurantName = document.getElementById('restaurant-name')
  let restaurantImage = document.createElement('img')
  let restaurantId = document.createElement('span') 

//Creating values for the established DOM elements
  //Display restaurant name
  restaurantName.innerText = `Your restaurant selection is: ${restaurant.id}` //changed to ID to facilitate suitable naming convention

  //Display restaurant image
  restaurantImage.src = restaurant.restPath
  //Display restaurant ID
  restaurantId.innerText = restaurant.id 

  //Appending the restaurant image
  restaurantDiv.appendChild(restaurantImage)
  //Appending the restaurant ID
  // restaurantDiv.appendChild(restaurantId) -Code deactivated to disrupt display of ID
}
getDataFromLocalStorage()