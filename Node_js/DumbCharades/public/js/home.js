const $loginForm = document.querySelector("#login_form")
const $avatarImage = document.querySelector("#avatar")

let avatar = 1

$avatarImage.addEventListener('click', (e) => {
    e.preventDefault()
    $avatarImage.src = './img/avatar/1.png'
})

document.querySelector("#login_form").addEventListener('submit', (e) => {
    e.preventDefault()
    const username = e.target.elements.username.value
    const url = `http://localhost:3000/${ROOM_ID}?username=${encodeURIComponent(username)}&avatar=${avatar}`
    window.location.replace(url);
})