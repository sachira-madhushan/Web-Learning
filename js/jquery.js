$('#show-btn').click(function () {
    $('#view').show();  
})

$('#hide-btn').click(function () {
    $('#view').hide();  
})

$('#home').click(function () {
    $('#iframe-view').attr('src','../html/home.html');  
})
$('#about').click(function () {
    $('#iframe-view').attr('src','../html/about.html');  
})
$('#details').click(function () {
    $('#iframe-view').attr('src','../html/details.html');  
})