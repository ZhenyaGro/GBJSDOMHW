const photoContainer = document.getElementById('photo-container');
let page = 1;
const autorContainer = document.querySelector('#autor');
const likeButtonEl = document.querySelector('#like');


const accessKey = 'Your_Key';


class Post {
  #url;
  #likes;
  #user;

  constructor(url, likes, user) {
    this.#url = url;
    this.#likes = likes;
    this.#user = user;
  }

  getUrl() {
    return this.#url;
  }

  getLikes() {
    return this.#likes;
  }

  getUser() {
    return this.#user;
  }

  increaseLikes() {
    this.#likes++;
  }
}

async function fetchPhoto() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
    const photo = await response.json();
    return photo;
  } catch (error) {
    console.error('Ошибка при загрузке фотографии:', error);
    return [];
  }
}

async function loadPost() {
  const photo = await fetchPhoto();
  console.log(photo);

  const post = new Post(photo.urls.small, photo.likes, photo.user);

  const img = document.createElement('img');
  img.setAttribute('src', post.getUrl())
  photoContainer.append(img);

  const autorImg = document.createElement('img');
  autorImg.setAttribute('src', post.getUser().profile_image.small)
  autorContainer.append(autorImg);

  const autorName = document.createElement('label');
  console.log(autorName);
  autorName.textContent = post.getUser().first_name;
  autorContainer.append(autorName);

  likeButtonEl.textContent = `Likes ${post.getLikes()}`

  likeButtonEl.addEventListener('click', () => {
    post.increaseLikes();
    likeButtonEl.textContent = `Likes ${post.getLikes()}`

    localStorage.setItem(post.getUrl(), post.getLikes())
  });
}

/**
 * Функция проверки смены дня для запуска обновления поста
 */
function checkIfDayChanged() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  setInterval(function () {
    const newDate = new Date();
    if (newDate.getDate() !== currentDay) {
      currentDay = newDate.getDate();
      loadPost();
    }
  }, 60000);
}


// Загрузка первой партии фотографий при загрузке страницы
loadPost();