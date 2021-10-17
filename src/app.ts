import {generateRandomId} from './util'


/**Static Properties */
// class App {
//   static id = 'app'
// }

interface Component {
  onInit(el: HTMLElement | null):void
}

class App implements Component {
  private id: string
  constructor() {
    this.id = 'app'
  }
    onInit(el: HTMLElement | null ): void {
    setInterval(() => {
      if(el) {
        el.innerHTML = generateRandomId({
          symbol: '#',
          lengthString: 7
        })
      }
    }, 1000);
   }
}
 

function main(ComponentClass) {
  const componentClass = new ComponentClass()
  let component = document.getElementById(componentClass.id)
  componentClass.onInit(component) 
}

main(App)
