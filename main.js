//console.log(window);
//alert(1);
// Single Element
//const form = document.getElementById('my-form');
//const query = document.querySelector('h1');

//console.log(form);
//console.log(query);

//Multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('item'));
//const items =document.querySelectorAll('.item');
//items.forEach((item)=>console.log(item));
/*

const ul=document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent='Hello';
ul.children[1].innerText ='Brad';
ul.lastElementChild.innerHTML ='<h1>Hello</h1>';

const btn=document.querySelector('.btn');
btn.style.background ='red';

const btn=document.querySelector('.btn');
btn.addEventListener('click',(e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background = '#ccc';
});
btn.addEventListener('mouseover',(e) => {
	//e.preventDefault();
document.querySelector('body').c lassList.add('bg-dark');
});
*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
	e.preventDefault();
	if(nameInput.value ==='' || emailInput.value === ''){
	//	alert('Please enter fields');
	msg.classList.add('error');
	msg.innerHTML= 'Please enter fields';
	setTimeout(()=>msg.remove(),3000);
	}
	else{
		const li =document.createElement('li');
		li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
	userList.appendChild(li);
	nameInput.value='';
	emailInput.value='';	
	}
}