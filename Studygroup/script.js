let arr = ['red', 'blue'];

let button = document.getElementById('btn')
button.addEventListener('click', handleBackground);
function handleBackground () {
    document.body.style.backgroundColor = 'yellow'
    setTimeout(() => {document.body.style.backgroundColor = ''}, 3000)
    let p = document.querySelector(".hidden__paragraph");
    p.classList.toggle("hidden__paragraph");
}


