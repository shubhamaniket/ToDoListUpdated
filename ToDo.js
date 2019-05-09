//Strike Through Effect
$('ul').on("click","li",function()
{
    if($(this).css("color") == "rgb(128, 128, 128)")
    {
        $(this).css("color","black");
        $(this).css("text-decoration","none");
    }
    else
    {
        $(this).css('color','gray');
        $(this).css('text-decoration','line-through');
    }
});
//Deleting by a click
$('ul').on("click","span",function(event)
{
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    });
    event.stopPropagation();
})
//Hovering through button 
/*$('button').on('mouseenter',function()
{
    $(this).css("font-weight","bold");
});
$('button').on('mouseleave',function()
{
    $(this).css("font-weight","normal");
});*/
//For Text Input i.e. adding Events
$("input[type='text'").keypress(function(event)
{
    if(event.which === 13)
    {
        var todo = $(this).val();
        $(this).val("");
        $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> '+todo+"</li>");
    }
});
$("#icon").click(function(){
    $("input[type='text'").fadeToggle();
});
