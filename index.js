const langList = document.querySelectorAll('.page-language__item')

langList.forEach((elem) => {
  elem.addEventListener('click', changeLang)
});

function changeLang(event) {
  localStorage.setItem('lang', JSON.stringify(event.target.attributes.lang.value));
  const hash = JSON.parse(localStorage.getItem('lang'))

  for (let key in contentObj) {
    document.getElementById(key).innerText = contentObj[key][hash]
  }
}
