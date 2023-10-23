const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});


var menu = document.querySelectorAll('.opcion');

menu.forEach(function(item){
	item.addEventListener("click", function(i){
		var elemento=i.target.parentNode;
		console.log(elemento.children);
		elemento.children[1].classList.toggle('activo');
	});
});