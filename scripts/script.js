function ValidMail() {
    var re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) output = '';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;

    return valid;
}
function ValidLogin() {

    var re = /^[a-z0-9_-]{4,20}$/i;
    var login = document.getElementById('login_reg').value;
    var valid = re.test(login);
    if (login == "") output = 'Введите логин';
    else {
        if (!valid) output = 'Логин введен неправильно!';
        else output = '';
    }
    document.getElementById('message_login').innerHTML = output;
    return valid;
}
function ValidPassword() {
    var re = /^[\w]{6,20}$/i;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var valid = re.test(password);

    if (password == "") output = 'Введите пароль';
    else {
        if (!valid) output = 'Пароль введен неправильно!';
        else {
            output = '';
            if (password2 == "") output2 = 'Повторите пароль';
            else {
                if (password != password2) output2 = 'Пароли не совпадают';
                else output2 = '';
            }
        }
    }
    document.getElementById('message_password').innerHTML = output;
    document.getElementById('message_password2').innerHTML = output2;
    return valid;
}
function ValidPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) output = '';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message_phone').innerHTML+'<br />'+output;
    return valid;
}  

function getRandomInRange(min, max) {
    var c = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('random_result').innerHTML = 'Результат вашего броска: '+ c.toString();
    
  }

  window.onscroll = function() {
    var scrollElem = document.getElementById("scrollToTop");
    if (document.body.scrollTop > document.documentElement.clientHeight) {
       scrollElem.style.opacity = "1";
    } else {
        scrollElem.style.opacity = "0";
    }
 }
 var timeOut;
function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}

function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src,"Image","width=" + width + ",height=" + height);}