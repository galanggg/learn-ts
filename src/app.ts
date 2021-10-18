import {generateRandomId, Component} from './util'

const random = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};
@Component({
  id: 'app',
})
class App {
    onInit(el: HTMLElement | null ): void {
    setInterval(() => {
      if(el) {
        el.innerHTML = generateRandomId({
          symbol: '#',
          lengthString: random(7, 10)
        })
      }
    }, 1000);
   }
}
 

function main(ComponentClass) {
  let component = document.getElementById(ComponentClass.id)
  const componentClass = new ComponentClass()
  componentClass.onInit(component) 
}

main(App)
