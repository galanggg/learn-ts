const symbol: validSymbol = '$'
const lengthString: number = 7

export type validSymbol = '#' | '$'

export interface Options {
  symbol: validSymbol,
  lengthString: number
}

export function generateRandomId(options: Options): string {
  return `${options.symbol} ${Math.random().toString(36).substr(2,options.lengthString)}`
}

export function Component(options: {id: string}) {
  return (target:any) => {
    target.id = options.id
  }
}


function identity<T>(arg: T): T {
  return arg
}

identity(1)


function userAlert(): void {
  console.log('Hello from Alert!')
}

/**Static Properties */
class App {
  static id = 'app'
}

interface Component {
  onInit(el: HTMLElement | null):void
}

