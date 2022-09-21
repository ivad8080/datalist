const dataFromLocalStorage = JSON.parse(localStorage.getItem('storage'))
let arrayData = dataFromLocalStorage ? dataFromLocalStorage : []
const inputEl = document.querySelector('.input')
const listEl = document.querySelector('.list')
const saveEl = document.querySelector('.save')
const deleteEl = document.querySelector('.delete')

function startApplication() {
  if (dataFromLocalStorage) {
    for (let i=0; i<arrayData.length; i++) {
      newElement(arrayData[i])
    }
  }
}

function newElement(props) {
  let element = document.createElement('li')
  element.textContent = props
  listEl.append(element)
}

function saveInput() {
  arrayData.push(inputEl.value)
  newElement(inputEl.value)
  localStorage.setItem('storage', JSON.stringify(arrayData))
}

function deleteList() {
  arrayData = []
  localStorage.clear()
  listEl.textContent = ''
}

saveEl.addEventListener('click', saveInput)
deleteEl.addEventListener('click', deleteList)

startApplication()