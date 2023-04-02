//Wrap code in an IIFE
(function(){
  
  let screen = document.querySelector('.screen');//select the first element from the common class.
  let buttons = document.querySelectorAll('.btn');//queryselectorall select all the value of the common class
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  //retrive data from that are clicked
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){//function(e) is the event function which define what action is performed
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });
  equal.addEventListener('click', function(e){
    if(screen.value === ''){
      screen.value ='';
    }

    else{
     let  result = eval(screen.value);//The eval() function evaluates JavaScript code represented as a string and returns its completion value.
     screen.value = result;
    }
    
  })
  clear.addEventListener('click',function(e){
    screen.value = '';
  })
  
})();