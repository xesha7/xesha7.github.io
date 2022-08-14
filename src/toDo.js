// 입력 받은 데이타를 객체로 로컬 스토리지에 저장
const toDoForm = document.getElementById ("toDoForm")
const toDoNew = document.querySelector ("#toDoForm input")
const dispToDos = document.querySelector ("#dispTodos")
const TODO_KEY = "toDoList"
const savedToDo = localStorage.getItem(TODO_KEY)
let toDoSTR = []

if ( savedToDo !== null) {
    const parsedToDos = JSON.parse(savedToDo)
    toDoSTR = parsedToDos
    // console.log(toDoSTR)
    parsedToDos.forEach(dispToDo)
}

function addToDos(event){
    event.preventDefault()
    const toDoOBJ = {
        text : toDoNew.value ,
        toDoID : Date.now(),
    }
    toDoNew.value = ""
    
    toDoSTR.push (toDoOBJ);

    addLocal()
    dispToDo(toDoOBJ)
    
}

function addLocal(){
    localStorage.setItem (TODO_KEY , JSON.stringify(toDoSTR))
}

function dispToDo(toDoOBJ) {
    const li = document.createElement ("li")
    const span = document.createElement ("span")
    const btnDel = document.createElement ("button")
    
    li.id = toDoOBJ.toDoID
    span.innerText = `${toDoOBJ.text}    `
    btnDel.innerText = "❌"
    
    li.appendChild (span)
    li.appendChild (btnDel)
    dispToDos.appendChild(li)
    btnDel.addEventListener ("click",delToDo)

}

function delToDo (event) {
    const li = event.target.parentElement;
    li.remove()
    toDoSTR = toDoSTR.filter((todo) => todo.toDoID !== parseInt(li.id))
    console.log(toDoSTR)
    addLocal()
}

toDoForm.addEventListener ("submit" , addToDos)