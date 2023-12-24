document.getElementById("dalee").addEventListener("click", function() {
    // Получаем значения полей
    var emailValue = document.getElementById("email").value;
    var phoneValue = document.getElementById("phone").value;
    var pinValue = document.getElementById("pin").value;

    // Получаем элемент кнопки для изменения текста
    var buttonElement = document.getElementById("dalee");

    // Проверяем, все ли поля заполнены
    if (emailValue === "" || phoneValue === "" || pinValue === "") {
        // Если есть пустые поля, выводим текст ошибки на кнопке
        buttonElement.innerHTML = "Ошибка!";
        
        // Через 2 секунды возвращаем текст кнопки к исходному состоянию
        setTimeout(function() {
            buttonElement.innerHTML = "Далее";
        }, 1000);
    } else {
        // Все поля заполнены, осуществляем переход на другую страницу
        // Замените "your-next-page.html" на адрес вашей следующей страницы
        window.location.href = "oplataHTML/oplata.html";
    }
});

document.getElementById("pin").addEventListener("input", function(e) {
    this.value = this.value.replace(/\D/g, ''); // Удаляет все нецифровые символы
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4); // Обрезает до 4 символов, если длина больше 4
    }
});

function restrictPhoneNumberInput(input) {
    // Удаление всех нецифровых символов
    var sanitizedInput = input.value.replace(/\D/g, '');

    // Проверка, начинается ли введенная строка с "+"
    if (!sanitizedInput.startsWith('+')) {
        // Если нет, добавляем "+" в начало
        sanitizedInput = '+' + sanitizedInput;
    }

    // Обновляем значение в поле ввода
    input.value = sanitizedInput;
}