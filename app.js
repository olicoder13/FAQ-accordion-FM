const acordeones = document.querySelectorAll('.hilo')
console.log(acordeones);

acordeones.forEach(acordeon => {
    acordeon.addEventListener('click', (e)=>{

        if(e.target.parentElement.classList.contains('hilo')){
           e.target.nextElementSibling.classList.toggle('abierto');
        }else{
            e.target.parentElement.classList.toggle('abierto')
        }
        
    })
})

