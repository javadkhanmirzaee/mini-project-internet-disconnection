const el = document.createElement('div')

const h1 = document.querySelector('h1').append(el)

window.addEventListener('online' , ()=>{
    el.textContent = 'online'
    el.className = 'alert'
    el.classList.add('alert-success')
})

window.addEventListener('offline' , ()=>{
    el.textContent = 'offline'
    el.className = 'alert'
    el.classList.add('alert-danger')
})