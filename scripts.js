$().ready(function(){
    $('section h2').each(function(){
        $('#toc-list').append('<li>'+$(this).html()+'</li');
    });
});
