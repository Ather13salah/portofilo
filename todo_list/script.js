document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task');
    const addTaskBtn = document.getElementById('add-task');
    const taskList  = document.getElementById('todos-list');
    const empty = document.querySelector('#no-tasks');
    const progressBar = document.getElementById('progress');
    const progresNum = document.getElementById('number')
    const toggleSelector = () => {
        if (taskList.children.length > 0) {
            empty.style.display = 'none';
        } else {
            empty.style.display = 'block'
        }
    };

    const caffeti = () =>{
        const count = 200,
        defaults = {
        origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
    confetti(
        Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
                })
            );
            }

            fire(0.25, {
            spread: 26,
            startVelocity: 55,
            });

            fire(0.2, {
            spread: 60,
            });

            fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
            });

            fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
            });

            fire(0.1, {
            spread: 120,
            startVelocity: 45,
            });
    }

    const updateProgress = (checkComplination = true) =>{
        const totalTask = taskList.children.length;
        const completedTask = taskList.querySelectorAll('.checkbox-task:checked').length;
        progressBar.style.width = totalTask? `${(completedTask/totalTask)*100}%`:'0%';
        progresNum.textContent = `${completedTask} / ${totalTask}`

        if (checkComplination && totalTask>0 && completedTask === totalTask){
            caffeti()
        } 
    }
    const addTask = ( event,completed = false,checkComplination = true) => {
        event.preventDefault()
        const task = taskInput.value.trim();
        if (!task) return;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <input type="checkbox" class="checkbox-task" ${completed ? 'checked':''}>
        <span>${task}</span>
        <div class="task-btns">
            <button class="edit-btn" class="add-task-btn"><i class="fa-solid fa-pen"></i></button>
            <button class="del-btn" class="add-task-btn"><i class="fa-solid fa-trash"></i></button>

        </div>
        `;
        const checkbox = listItem.querySelector('.checkbox-task');

        const delBtn = listItem.querySelector('.del-btn');
        delBtn.addEventListener('click', ()=> {listItem.remove();
            toggleSelector();
            updateProgress();
        });

        const editBtn = listItem.querySelector('.edit-btn');
        editBtn.addEventListener('click',() =>{
            if(!checkbox.checked){
                taskInput.value = listItem.querySelector('span').textContent;
                toggleSelector();
                listItem.remove();
                updateProgress(false)
            }
        });
        if (completed){
            taskList.classList.add('completed');
            editBtn.disabled = true;
            editBtn.style.opacity = '0.5';
            editBtn.style.pointEvents = 'none';


        };
        checkbox.addEventListener('change',() =>{
            const isChecked = checkbox.checked;
            taskList.classList.toggle('completed' ,isChecked);
            editBtn.disabled = isChecked;
            editBtn.style.opacity = isChecked ? '0.5':'1';
            editBtn.style.pointEvents = isChecked? 'none':'auto';
            updateProgress();
        });
        taskList.appendChild(listItem);
        taskInput.value = "";
        toggleSelector();
        updateProgress(checkComplination);
    };



    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTask(e);
        }
    });
});
