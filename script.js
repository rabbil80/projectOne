const buttons = document.querySelectorAll('.button')
const body =document.querySelector('body')


buttons.forEach(function (b) {
    b.addEventListener('click', function (p) {
        if (p.target.id === 'grey') {
            body.style.backgroundColor = p.target.id
        }
        if (p.target.id === 'white') {
            body.style.backgroundColor = p.target.id
        }
        if (p.target.id === 'blue') {
            body.style.backgroundColor = p.target.id
        }
        if (p.target.id === 'yellow') {
            body.style.backgroundColor = p.target.id
        }
        if (p.target.id === 'purple') {
            body.style.backgroundColor = p.target.id
        }
        
    })
    
})