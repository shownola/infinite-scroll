// UNSPLASH api

const count = 10
const apiKey = 'AoOR55nJs43JSUQBOwvp9arazEKRQ_AbB3szpSgMWaA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

async function getPhotos(){
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch(error){

  }
}

// On Load
getPhotos();
