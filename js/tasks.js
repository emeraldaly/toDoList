$(toDoList).ready(function() {
  alert(hi);

 //Add Item
function addTask () {
        var text = $('#addTask').val();
        $('#toDoList').append('<td>'+ text + ' <input type="checkbox" class="check" value="Check">'+ '<input type="submit" class="done delete" value="Delete">' +'</td>');
};

$(function() {
    $('#add').on('click', addTask);
});

  //Delete Item
$('#toDoList').on('click', '.delete',function(){
    $(this).parent().remove();
});

  //Check Off Item
$('#toDoList').on('click', '.check',function(){
    $(this).parent().css("text-decoration", "line-through");
});
});