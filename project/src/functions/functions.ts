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
        if (scroll > 380 && ((pos >= 0 && pos < 100 && window.innerWidth < 1080) || (pos >= 0 && pos < 140 && window.innerWidth > 1080))) {
          header.style.position = "fixed";
          main.style.marginTop = window.innerWidth < 1080 ? "76px" : "101px";
        } else {
          header.style.position = "relative";
          main.style.marginTop = "0px";    
        }
    })
}

export function hasEventsMonth(events: any[]) {
    
  for (let index = 0; index < events.length; index++) {
    const element = events[index]; 

    if (Number(element.month) == new Date().getMonth() + 1) {
      return true;
    }
  }    

  return false;
}