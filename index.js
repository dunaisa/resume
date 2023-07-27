const langList = document.querySelectorAll('.page-language__item')

function getContent() {
  const hash = JSON.parse(localStorage.getItem('lang'))

  for (let key in contentObj) {
    document.getElementById(key).innerText = contentObj[key][hash]
  }
}

langList.forEach((elem) => {
  elem.addEventListener('click', changeLang)

});

function changeLang(event) {
  localStorage.setItem('lang', JSON.stringify(event.target.attributes.lang.value));
  getContent()
}

// Check localStorage

if (!localStorage.getItem('lang')) {
  for (let key in contentObj) {
    document.getElementById(key).innerText = contentObj[key].ru
  }
} else {
  getContent()
}

// Check btnlngactive


