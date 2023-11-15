class todoList {
    constructor(dolist){
this.Idolist = dolist
this.input1 = `input1-${dolist}`
this.input2 = `input2-${dolist}`
this.button = `button${dolist}`
this.textInner = `textInner${dolist}`
    }
getLayout=()=>{
//     let layout = document.body.innerHTML +=`
//     <h1>#${this.Idolist}</h1>
//     <input type="text"id="${this.input1}" value="Read book"/>
//     <input type="text"id="${this.input2}" value="12.11"/>
// <button id="${this.Idolist}">ADD</button>
// <div id ="${this.textInner}"></div>

//     `
//     return layout
// 
let h1 = document.createElement('h1')
h1.textContent = "Plan your day"
let container = document.createElement('div')


let input1 = document.createElement('input')
input1.value = ''
input1.id = this.input1
input1.placeholder = 'Gonna do'
 
let input2 = document.createElement('input')
input2.type ='date'
input2.id = this.input2

let btnEl = document.createElement('button')
btnEl.innerHTML = 'solve'
btnEl.addEventListener('click',this.solve)

let textInner = document.createElement('div')
textInner.id = this.textInner


container.append(input1)
container.append(input2)
container.append(btnEl)
container.append(textInner)
document.body.append(h1)
document.body.append(container)
    }
    solve = ()=>{
        let input1 = document.getElementById(this.input1).value
        let input2 = document.getElementById(this.input2).value
        let textInner = document.getElementById(this.textInner)
        
        if(textInner.innerHTML += input1+" "+input2 + "<br>"){
            this.input1.value = ""
            this.input2.value = ""
        }
    }
    
}

const list1 = new todoList(1)
list1.getLayout()

const list2 = new todoList(2)
list2.getLayout()

const list3 = new todoList(3)
list3.getLayout()
