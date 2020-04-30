//button-active

document.body.addEventListener('click', e => {
    if (!e.target.matches('button')) return
    document.querySelector('.pic img').src = e.target.dataset.src

    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')
})

// counter preloader

function counter() {
    var count = setInterval(function () {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c == 100){
            clearInterval(count);
            $('.counter').addClass('hide')
            $('.preloader').addClass('active')
        }
    },60)
}
counter()

// counter game-time

//Эта функция запускает таймер
function start() {
    window.timerId = window.setInterval(timer, 1000);
}
//Эта функция останавливает таймер
function stop() {
    window.clearInterval(window.timerId);
}

//Эта функция меняет value для инпута
function timer() {
    var elem = document.getElementById('timer');
    elem.value = parseInt(elem.value)+1;
}

//messages

$('#btn-mes-one').tooltip();
$('#btn-mes-two').tooltip();
$('#btn-mes-three').tooltip();


