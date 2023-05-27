$(document).ready(function() {
    console.log( `Let’s get ready to party with jQuery!`)
})

$('img').addClass("image-center")
const p = $('article p')
p.eq(p.length - 1).remove()
$('h1').css('font-size', Math.random() * 100)
$('ol').append('<li> Hello puppy </li>')

// $('h4').text('We are apologizing for the list’s existence')

// or 
$('aside').text('apologizing for the list’s existence.')
$('input').on('click', function (evt){
    const [red, blue, green] = [...$('input')]
    $('body').css('background-color', `rgb(${red.value},${green.value}, ${blue.value})`)
})
$('img').on('click', function () {
    $(this).remove()
})