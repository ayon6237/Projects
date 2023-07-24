
var resultField=$("#input");
function insertNumber(number)
{
    var ex_number=resultField.val();
    resultField.val(ex_number+number);
}
function clear_result()
{
    resultField.val(" "); 
}
function calculate()
{
   var result= eval( resultField.val());
   resultField.val(result); 
}
function del_num()
{
   var number= resultField.val();
   if(number!='')
   {
    resultField.val(number.slice(0,-1));
   } 
}