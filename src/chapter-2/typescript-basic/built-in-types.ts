Math.pow(2, 4)
let date = new Date()
date.getTime()
let arrr: Array<number> = [1, 2, 3]
let reg = /abv/
reg.test('abv')
//HTMLElement
let body = document.body
let allList = document.querySelectorAll('li')
document.addEventListener('click', e => {
    e.preventDefault()
})

//Utility Types

interface IPerson {
    name: string
    height: number
}

type PartialPerson = Partial<IPerson>
let resutt: PartialPerson = {
    name: 'HduSy'
}
type OmitPerson = Omit<IPerson, 'name' | 'id'>
let resullt: OmitPerson = {
    height: 170
}
