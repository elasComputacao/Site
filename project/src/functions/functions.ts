export function arrayShuffle(array:any[]) {
    const size = array.length;
    
    for (let index = 0; index < array.length; index++) {
        const randomNumber = Math.floor(Math.random() * size);
        const element1 = array[index];
        const element2 = array[randomNumber];
        array[randomNumber] = element1;
        array[index] = element2;
    }
}

export function mouseMonitoring() {
    const header = window.document.getElementById("header")
    const main = window.document.getElementById("main")
    const scroll = window.scrollY;

    window.addEventListener('mousemove', (event) => {
        var pos = event.clientY;
        if (scroll > 380 && ((pos >= 0 && pos < 44 && window.innerWidth < 1080) || (pos >= 0 && pos < 64 && window.innerWidth > 1080))) {
        header.style.position = "fixed";
        main.style.marginTop = window.innerWidth < 1080 ? "44px" : "56px";
        } else {
        header.style.position = "relative";
        main.style.marginTop = "0px";    
        }
    })
}

export function moveRight(array, len, index) {
    if (array[index] == len - 1) {
        array[index] = 0;
      } else {
        array[index]++;
      }
}

export function moveLeft(array, len, index) {
    if (array[index] == 0) {
        array[index] = len - 1;
      } else {
        array[index]--;
      }
}
