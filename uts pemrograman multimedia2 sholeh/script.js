const toggles = document.querySelectorAll('.toggle')
const Senang = document.querySelector('#Senang')
const Sedih = document.querySelector('#Sedih')
const Galau = document.querySelector('#Galau')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    doTheTrick(e.target)
    console.log(e.target)
}));

function doTheTrick(theClickedOne) {
    if(Senang.checked && Sedih.checked && Galau.checked) {
        if(Senang === theClickedOne) {
            Galau.checked = false
        }
        
        if(Sedih === theClickedOne) {
            Senang.checked = false
        }
        if(Galau === theClickedOne) {
            Sedih.checked = false
        }
    }
}