const newTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const del = document.querySelector('.delete');
const generateTodoTemplate = (data)=>{
    const liTemplate = `<li class="list-group-item text-light d-flex justify-content-between align-items-center">
            <span>${data}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;
    return liTemplate;
}

newTodo.addEventListener('submit', (e)=>{
    e.preventDefault()
    const todo = newTodo.add.value.trim();
    // console.log(todo)
    // list.innerHTML += `<li class="list-group-item text-light d-flex justify-content-between align-items-center">
    //             <span>${todo}</span>
    //             <i class="far fa-trash-alt delete"></i>
    //         </li>`
    if(todo.length){
        list.innerHTML += generateTodoTemplate(todo);
    }
    // newTodo.add.value = "";
    newTodo.reset();
})

list.addEventListener('click', (e)=>{
    // if(e.target.tagName === 'I'){
    //     e.stopPropagation();
    //     e.target.parentElement.remove()
    // }
    if(e.target.classList.contains('delete')){
        e.stopPropagation();
        e.target.parentElement.remove()
    }
})
