const msg = document.querySelector('#msg');
msg.textContent = sessionStorage.getItem('message', msg) ?? 'empty';

const button = document.querySelector('button');

button.addEventListener('click', () => {

    const msg = document.querySelector('input').value;
    sessionStorage.setItem('message', msg)

})

