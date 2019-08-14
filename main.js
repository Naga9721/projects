
var pagepointer=0;
jQuery(document).ready(function(){
    btnclick(1);
    jQuery("#add").click(function(){
    jQuery("#userform").toggle();
});
   
});
jQuery("#d").click(function(){
    alert("hello");
    jQuery("#Model").show();
});

function btnclick(btnvalue)
{
pagepointer=btnvalue;
$("tbody").children().remove();
jQuery.ajax({
    url: "https://reqres.in/api/users?page="+btnvalue,
    data: {},
    beforeSend: function(){}
}).done(function(response) {
    var trArr = new Array();
    $.each(response.data, function(i, v){
        trArr.push('<tr><td>' + v.first_name  + '</td><td>' + v.email + '</td><td><img id="img" src="' 
        + v.avatar + '" width="100px" /></td><td> <a class="edit" title="Edit" data-toggle="tooltip"><i style="color:#FFBF00" class="material-icons">&#xE254;</a> <a  title="Delete" data-toggle="tooltip"><i id="d" style="color:red" class="material-icons">&#xE872;</i></a>' + '</td></tr>'  );
        
    });
    $('table#usertable tbody').append(trArr.join('\n')); 
});
}

