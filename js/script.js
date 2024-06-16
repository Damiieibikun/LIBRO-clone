$(document).ready(function() {
    $('#close').click(function() {
        $('#side-nav').animate({ 'width': '0%', 'height': '0%' })
    })

    $('#menu').click(function() {
        $('#side-nav').animate({ 'width': '100%', 'height': '100%' })
    })

    $('#menu').hover(function() {
        $('hr').animate({ 'margin': '7px' }, 200)
    }, function() {
        $('hr').animate({ 'margin': '5px' }, 200)
    })


    function fadeImages() {
        $('#banner1').fadeOut(5000, function() {
            $('#banner2').fadeIn(3000, function() {
                $('#banner1').fadeIn(3000, fadeImages);

            })
        })

    }
    // fadeImages()

})

$('.div-card').hover(function() {
        $(this).find('img').css('transform', 'scale(1.1)')
    },
    function() {
        $(this).find('img').css('transform', 'scale(1)')
    })

$('.div-card').click(function() {
    $('#descriptions').hide()
    $('#descriptions2').show()
})

$('#btn').click(function() {
    $('#btn').css({
        'background-color': '#4bea9b',
        'color': 'black',
        'border-color': '#4bea9b'
    })
})