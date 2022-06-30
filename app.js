const input = document.querySelector('.email')
const btn = document.querySelector('.notify')
const text = document.querySelector('.error-text')

btn.addEventListener('click', function() {
    var validRegex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
    
    input.setCustomValidity(' ')

    if (input.value === '') {
        input.classList.add('error')
        text.innerHTML = 'Whoops! It looks like you forgot to add your mail'
        return false
    }

    else if (!input.value.match(validRegex)) {
        input.classList.add('error')
        text.innerHTML = 'Please provide a valid email address'
        return false
    } 
    
    else if (input.value.match(validRegex)) {
        alert('Submitted Successful')
        location.reload()
        return true
    } 
})