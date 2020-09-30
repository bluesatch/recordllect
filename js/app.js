$(function() {
    $('.burger-slice').click(function() {
        $('#burger-list').toggleClass('display-off', 'display-on')
    })

    $('.see-more').click(function() {
        $('.album-card').css('display', 'block')
    })
});