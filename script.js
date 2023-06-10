const items = document.querySelectorAll('.item');
const container2 = document.getElementById('container2');
const successMessage = document.getElementById('successMessage');

let draggedItem = null;

// Add event listeners for drag events on the items
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add event listeners for drop events on the containers
container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);

// Drag Functions
function dragStart() {
  draggedItem = this;
  this.classList.add('dragging');
}

function dragEnd() {
  draggedItem = null;
  this.classList.remove('dragging');
}

// Drop Functions
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  this.classList.remove('hovered');
  this.appendChild(draggedItem);
  showSuccessMessage();
}

function showSuccessMessage() {
  successMessage.style.display = 'block';
  setTimeout(function () {
    successMessage.style.display = 'none';
  }, 2000);
}

function reset() {
  container2.innerHTML = '';
  successMessage.style.display = 'none';
  items.forEach(item => {
    document.getElementById('container1').appendChild(item);
  });
}

function drop() {
  this.classList.remove('hovered');
  this.appendChild(draggedItem);
  showSuccessMessage();
  container2.classList.add('drop-animation');
  setTimeout(function () {
    container2.classList.remove('drop-animation');
  }, 500);
}
