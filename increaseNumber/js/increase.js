$(document).ready(() =>{
   
   $('#plus').on('click',function(){
      var plus = $('#sum').val();
      console.log(plus);
       addNumber(plus);
   });
   
   function addNumber(num) {
    var number = parseInt(num) + 1;
    if( number <=15){
        $('#sum').val(number);
        computer(number);
    }
   }

   $('#minus').on('click',function(){
    var minus = $('#sum').val();
    minusNumber(minus);
   });

   function minusNumber(num) {
    var number = parseInt(num) - 1;
    if(number >= 0 ){
        $('#sum').val(number);
        computer(number);
    }
   }

   function computer(number){
       var result = number*5;
       if(number == 0){
           progressBar(result);
       }else{
           progressBar(result+25);
       }

        $('#result').html(result);
   }
 
   function progressBar (pro){
    $("#progress").width(pro + "%");
    $("#progress").html(pro + "%");
   }


   
    
})