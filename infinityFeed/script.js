const photoContainer = document.getElementById('photo-container');
let page = 1;
const accessKey = '3UJY8_pqPuAA7xHoWYtXrXCLP9xeJA-mQ5YP21EpYhQ';

async function fetchPhotos() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=10&client_id=${accessKey}`);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error('Ошибка при загрузке фотографий:', error);
    return [];
  }
}

async function loadMorePhotos() {
  // создание контента
  const photos = await fetchPhotos();
  // console.log(photos);
  photos.forEach(photoItem => {
    const img = document.createElement('img');
    img.setAttribute('src', photoItem.urls.small);
    photoContainer.append(img);
  });
  page++;
}

window.addEventListener('scroll', () => {
  /*создание бесконечной прокрутки*/
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    loadMorePhotos();
  }
});

// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();