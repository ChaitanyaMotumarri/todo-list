let taskForm=document.querySelector('#task-form');
taskForm.addEventListener('submit',()=>{

    let taskInput=document.querySelector('#list-item');
    let task=taskInput.value.trim();
    
    //get item from local storage
    let taskList=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.push(task);

    //set item
    if(task!==''){
        localStorage.setItem('tasks',JSON.stringify(taskList));
    }
    // displayTasks();
});

//display tasks
let displayTasks=()=>{
    let lists=document.querySelector('#lists');
    let newTask='';
    taskList=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    for(let task of taskList){
        newTask+=`<li class="list-group-item list-group-item-action list-group-item-warning">
                    <span>${task}</span>
                    <button class="close">
                        <i class="fa fa-times-circle"></i>
                    </button>
                   </li>`
    };
    lists.innerHTML=newTask;
}
displayTasks();

//remove tasks
let listsEl=document.querySelector('#lists');
listsEl.addEventListener('click',(e)=>{
    let targetElement=(e.target);
    if(targetElement.classList.contains('fa-times-circle')){
        let actualEl=targetElement.parentElement.parentElement;
        let selectedEl=actualEl.innerText;

        //get tasks from localstorage
        let taskList=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList=taskList.filter((task)=>{
            return task.trim() != selectedEl.trim();
        });
        localStorage.setItem('tasks',JSON.stringify(taskList));
        displayTasks();
    }
})