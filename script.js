const accordian = document.getElementsByClassName('container');

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

function hover() {
    document.getElementsByClassName("label").style.backgroundColor = "rgb(57, 113, 169)"
}