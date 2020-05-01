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

//messages

$('#btn-mes-one').tooltip();
$('#btn-mes-two').tooltip();
$('#btn-mes-three').tooltip();


