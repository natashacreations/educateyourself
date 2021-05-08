burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav= document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
rightnav.classList.toggle('v-class-resp');	
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');	
})

function nicknameFunction(){
	if (document.getElementById('yesNick').checked){
		document.getElementById('nick').style.display="inline";
		document.getElementById('nickname').setAttribute('required',true);
	}
	else{
		document.getElementById('nickname').removeAttribute('required');
		document.getElementById('nick').style.display="none";
	}
}
function changeText() {
	document.getElementById('btn').innerHTML='subscribed'
}
