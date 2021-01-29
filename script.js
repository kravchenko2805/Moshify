window.addEventListener('load', function() {
  const button = document.createElement('button');
  button.innerText = 'Change Color';

  const contentDiv = document.body.getElementsByClassName('content');
  contentDiv[0].appendChild(button);

  const p2 = document.getElementById('p2');

 button.addEventListener('click', function() {
     p2.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);;
 })
})