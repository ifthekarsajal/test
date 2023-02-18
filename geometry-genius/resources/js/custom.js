// random color generate for hover effect
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  document.addEventListener("mouseover", function(){
    document.container.row.card.body.style.backgroundColor = randomColor();
  });
  
  document.querySelector('getcolor').addEventListener('mouseover', event => {
        event.target.style.card = randomColor();
  });
  