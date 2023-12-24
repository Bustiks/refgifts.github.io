function changeText() {
    var element = document.querySelector('.finish');
    if (element.innerHTML === 'Получить реквизиты') {
      element.innerHTML = '2202206806905704';
    } else {
      element.innerHTML = 'Получить реквизиты';
    }
  }