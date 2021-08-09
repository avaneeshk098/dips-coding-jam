particlesJS('particles-js', {
    particles: {
        number: { value: 200, density: { enable: true, value_area: 1500 } },
        color: { value: '#fb8500' },
        shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 100, height: 100 },
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
            value: 6,
            random: true,
            anim: {
                enable: false,
                speed: 21.926084732136317,
                size_min: 0.3,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'bubble' },
            onclick: { enable: true, mode: 'repulse' },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
            },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
})

let currDate = new Date()
let eventDate = new Date(2021, 7, 21, 10, 0, 0)
setInterval(() => {
    currDate = new Date()
    let delta = eventDate.getTime() - currDate.getTime()
    if (delta > 0) {
        days = Math.floor(delta / (1000 * 3600 * 24))
        hours = Math.floor((delta % (1000 * 3600 * 24)) / (1000 * 3600))
        minutes = Math.floor((delta % (1000 * 3600)) / (1000 * 60))
        seconds = Math.floor((delta % (1000 * 60)) / 1000)
        document.getElementById('days').innerHTML = days
        document.getElementById('hours').innerHTML = hours
        document.getElementById('minutes').innerHTML = minutes
        document.getElementById('seconds').innerHTML = seconds
    } else {
        document.getElementById('days').innerHTML = ''
        document.getElementById('hours').innerHTML = 'Event'
        document.getElementById('minutes').innerHTML = 'Started!'
        document.getElementById('seconds').innerHTML = ''
        let items = document.getElementsByClassName('timer__daysd')
        for (let i = 0; i < items.length; i++) {
            items[i].classList.add('disabled')
        }
    }
}, 1000)

window.onload = () => {
    if(localStorage.getItem('filled') === 'true'){
        document.querySelector('.register__buttons').style.display = 'block'
        document.querySelector('.register__form').style.display = 'none'
    }
}

document.querySelector('.register__form').addEventListener('submit', e => {
    e.preventDefault()
    let email = document.querySelector('.register__email').value
    let name = document.querySelector('.register__name').value
    let phone = document.querySelector('.register__phone').value
    let branch = document.querySelector('.register__branch').value
    let grade = document.querySelector('.register__class').value
    if (email === '') {
        alert('Email field is empty. Kindly fill and resubmit the form')
        return false
    }
    if (name === '') {
        alert('Name field is empty. Kindly fill and resubmit the form')
        return false
    }
    if (phone === '') {
        alert('Phone field is empty. Kindly fill and resubmit the form')
        return false
    }
    if (phone.length < 10 || phone.length > 14) {
        alert('Phone number is not valid. Kindly fill and resubmit the form')
        return false
    }
    if (branch === 'DPS Bangalore Branch') {
        alert(
            'Branch field has not been selected. Kindly fill and resubmit the form',
        )
        return false
    }
    if (grade === 'Class') {
        alert(
            'Grade field has not been selected. Kindly fill and resubmit the form',
        )
        return false
    }
    localStorage.setItem('filled', 'true')
    document.querySelector('.register__buttons').style.display = 'block'
    document.querySelector('.register__form').style.display = 'none'
})