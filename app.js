const newTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const del = document.querySelector('.delete');
const dateDisplay = document.querySelector('.date');
const search = document.querySelector('.search input');

const generateTodoTemplate = (data)=>{
    const liTemplate = `<li class="list-group-item text-light d-flex justify-content-between align-items-center">
            <span>${data}</span>
            <i class="fas fa-minus-circle delete"></i>
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


let objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear()

// var today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
var today = `Its ${dayOfWeek} ${dayOfMonth} of ${curMonth}, ${curYear}`;

dateDisplay.textContent = today

const filterTodo = (term)=>{
    Array.from(list.children)
    .filter((todo)=>{
        return !todo.textContent.toLowerCase().includes(term)
    }).forEach((todo)=>{
        todo.classList.add('d-none')
    })

    Array.from(list.children)
    .filter((todo)=>{
        return todo.textContent.toLowerCase().includes(term)
    }).forEach((todo)=>{
        todo.classList.remove('d-none')
    })
}

search.addEventListener('keyup',()=>{
    const term = search.value.trim();
    filterTodo(term.toLowerCase());
})