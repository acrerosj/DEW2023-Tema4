const tasks = ['desayunar', 'hacer la cama', 'lavarse los dientes', 'sacar al perro', 'corregir los exámenes', 'poner las notas'];
const boxes = document.querySelectorAll('.box');

let parent = null;

function taskInit(tasks, boxInit) {
  const box = document.querySelector(boxInit);
  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.classList.add('task');
    div.textContent = task;
    div.id = 'task-' + index;
    div.addEventListener('dragstart', dragStart);
    div.addEventListener('dragend', dragEnd);
    div.draggable = true;
    box.append(div);
  });
}

function boxInit(boxes) {
  boxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
  });
}

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  parent = event.target.parentElement;
  event.target.classList.add('selected'); 
}

function dragEnd(event) {
  event.target.classList.remove('selected'); 
}

function dragOver(event) {
  if (event.currentTarget !== parent) {
    event.preventDefault();
  }
}

function drop(event) {
  const id = event.dataTransfer.getData('text/plain');
  const element = document.getElementById(id);
  event.currentTarget.append(element);
}


taskInit(tasks, '#todo');
boxInit(boxes);