$(document).ready(function()
{
$("#submit").click(function(e)
{
var firstname=$("#name1").val();
var name_regex= /^[a-zA-Z]+$/;
if(!firstname.match(name_regex) || firstname.length==0)
{
$("#p1").text("Pls Enter your name");
$("#entry_53734720").focus();
return false;
}
});
});