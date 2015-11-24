$(document).ready(function() {


 //Add Item
function addTask () {
        var text = $('#addTask').val();
        $('#toDoTable').append('<tr>'+
          '<td>'+text +'</td><td><input type="checkbox" class="check" value="Check"></td><td><input type="submit" class="done delete pull-right" value="Delete"></td></tr>');
};

$(function() {
    $('#add').on('click', addTask);
});

  //Delete Item
$('#toDoTable').on('click', '.delete',function(){
    $(this).parent().parent().remove();
});

  //Check Off Item
$('#toDoList').on('click', '.check',function(){
    $(this).parent().css("text-decoration", "line-through");
});

});

