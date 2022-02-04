let buttonDOM = document.querySelector('#liveToastBtn')
const alertDOM = document.querySelector('#liveToast')
const TASK = document.querySelector('#task')
let todoListDOM = document.querySelector('#list')
let checked = document.querySelector('#list li')
let closebtns = document.getElementsByClassName("remove");

/*todo add */
if (buttonDOM) {
    buttonDOM.addEventListener('click', function() {
        if (TASK.value && 
            TASK.value.length > 0 && 
            TASK.value.trim().length > 0) {
            addList(TASK.value)
            TASK.value = ""
            $(alertDOM).toast('show')
        } else {
            TASK.value = ""
            $('.error').toast('show')
        }
    })
}

/* li add*/
const addList = (task) => {
    let proc = `<span class = "remove">&times;</span>`;
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${task} ${proc}`
    todoListDOM.append(liDOM)
}

/*li class add*/
todoListDOM.addEventListener('click', (el) => {
    $(document).ready(function() {
        $('li').click(function() {
            $('list>li.checked').removeClass("checked");
            $(this).addClass("checked");
        });
    }); 
});

/*li remove*/
for (let i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}