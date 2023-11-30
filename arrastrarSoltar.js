function dragStart(event) {
  console.log('arrastrando', event.target);
  event.dataTransfer.setData('text/plain', event.target.id);

  event.target.classList.add('selected');
}