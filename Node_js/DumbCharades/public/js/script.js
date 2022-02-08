const socket = io.connect()

//Elements
const $grid_container_A = document.querySelector('#grid_Team_A')
const $grid_container_B = document.querySelector('#grid_Team_B')
const $join_A = document.querySelector('#join_A')
const $join_B = document.querySelector('#join_B')
const $start = document.querySelector('#start')

//Template
const $gridTemplate = document.querySelector('#grid-template').innerHTML

//Options
let team = true

const room = location.pathname.substring(1)

if(!admin){
    $start.setAttribute('disabled','disabled')
    $start.style.opacity = "0.6";
}

$start.addEventListener('click' , (e) => {
    socket.emit('startGame',room)
})

document.getElementById()

document.getElementById('copy').addEventListener('click', (e) => {
    navigator.clipboard.writeText(`http://localhost:3000/${room}`)
})

const swapTeam = (e) => {
    if (team) {
        $join_A.style.background = "rgba(233, 51, 27, 0.6)"
        $join_B.style.background = "rgba(88, 243, 50, 0.6)"
    }
    else {
        $join_B.style.background = "rgba(233, 51, 27, 0.6)"
        $join_A.style.background = "rgba(88, 243, 50, 0.6)"
    }
    team = !team
    socket.emit('swapTeam')
}

$join_A.addEventListener('click', swapTeam)
$join_B.addEventListener('click', swapTeam)

socket.on('changes', (usersA, usersB) => {
    $grid_container_A.innerHTML = Mustache.render($gridTemplate, { users: usersA })
    $grid_container_B.innerHTML = Mustache.render($gridTemplate, { users: usersB })
})

socket.on('userLeft', (users, team) => {
    const html = Mustache.render($gridTemplate, { users })
    if (team) $grid_container_A.innerHTML = html
    else $grid_container_B.innerHTML = html
})

socket.emit('join', { username, avatar, room, admin }, error => {
    console.log(error)
})