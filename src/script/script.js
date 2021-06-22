const modal = document.getElementById("modal");
const btn = document.getElementById("privacy");

const closebtn = document.getElementById("closebtn");

const lockScroll = () => {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
}

const unlockScroll = () => {
    document.body.style.position = '';
    document.body.style.top = '';
}

btn.onclick = () => {
    modal.style.display = "block";
    lockScroll()
}

closebtn.onclick = () => {
    modal.style.display = "none";
    unlockScroll()
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        unlockScroll()
    }
}