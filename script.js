const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// UNSPLASH api
const count = 10
const apiKey = 'AoOR55nJs43JSUQBOwvp9arazEKRQ_AbB3szpSgMWaA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`



// Create Elements for Links & Photos, Add to DOM
function displayPhotos(){
  photosArray.forEach((photo) => {
    // Create <a> to link to unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // Create <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    // Put <img> inside the <a>, then put both inside of the imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function getPhotos(){
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch(error){

  }
}

// On Load
getPhotos();
