let parent = null;

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


