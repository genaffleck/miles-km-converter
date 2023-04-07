(function(){
  "use strict";

  document.getElementById('convert').addEventListener('submit',function(event){
    event.preventDefault();
  
    const distance = parseFloat(document.getElementById('distance').value);
  
    const answer = document.getElementById("answer");
  
    if(distance){
      
      // convert and round distance    
      const conversion = (distance * 1.609344).toFixed(3);
  
      // put the answer in the bottom div using innerHTML
      answer.innerHTML = `<h2>${distance} mi converts to ${conversion} km</h2>`;
  
    }else{
      // put an error message at the bottom
      answer.innerHTML = '<h2>Please provide a number.</h2>';
    }
    
  });
})();
