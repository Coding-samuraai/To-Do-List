const input=document.querySelector('.text-area');
const submit=document.querySelector('.submit-btn');
const toDoList=document.querySelector('.todo-list');

window.addEventListener('load',function(){

  let n=localStorage.length;

  for(let i=0;i<n;i++)
  {
    let emptyDiv=document.createElement('div');
    toDoList.append(emptyDiv);
    emptyDiv.outerHTML=localStorage[localStorage.key(i)];
  }

});

submit.addEventListener('click',function(){

  if(input.value=='')
  return;

  let task=createElement('div','task');

  let actualTask=createElement('h1','actual-task');
  actualTask.append(input.value);
  input.value='';

  let buttons=createElement('div','buttons');

  let doneBtn=createElement('div','done');
  doneBtn.innerHTML='<i class="fa-solid fa-check"></i>';
  let deleteBtn=createElement('div','delete');
  deleteBtn.innerHTML='<i class="fa-solid fa-trash-can"></i>';

  buttons.append(doneBtn,deleteBtn);
  task.append(actualTask,buttons);
  toDoList.append(task);

  localStorage.setItem(task.innerText,task.outerHTML);
});

function createElement(elementName,cls)
{
  let element=document.createElement(elementName);
  element.classList.add(cls);

  return element;
}

toDoList.addEventListener('click',function(event){
  let clickedElement=event.target;
  let clicked=getComputedStyle(event.target.parentNode.previousElementSibling);

  if(clickedElement.classList.contains('done'))
  {
    if(clicked.textDecoration.includes('none'))
    clickedElement.parentNode.previousElementSibling.style.textDecoration='line-through';
    else
    clickedElement.parentNode.previousElementSibling.style.textDecoration='none';
  }
  else if(clickedElement.classList.contains('delete'))
  {
    let key=clickedElement.parentNode.previousElementSibling.innerText;
    localStorage.removeItem(key);
    clickedElement.parentNode.parentNode.remove();
  }
});
