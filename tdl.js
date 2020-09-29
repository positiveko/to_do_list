let myUL = document.querySelector('.myUL');

// create a new list item when clicking on the "add" button
function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('myInput').value;
  let toDo = document.createTextNode(inputValue);
  li.appendChild(toDo);
  if (inputValue.trim() === '') {
    // 스페이스, 탭과 같은 공백 문자 지워줌
    alert('You must write something!'); // 스페이스바 적용
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = ''; // input 새로고침

  let span = document.createElement('SPAN');
  let delBtn = document.createTextNode('X');
  span.className = 'closeBtn';
  span.appendChild(delBtn);
  li.appendChild(span);

  for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = 'none';
    };
  }
}

// creat a new list item when pressing Enter Key
function addNewItem(list, itemText) {
  let li = document.createElement('li');
  li.innerText = itemText;
  list.appendChild(li);
}

let inputText = document.getElementById('myInput');
inputText.focus();

inputText.onkeyup = function (event) {
  if (event.which === 13) {
    newElement(); // 엔터 키로 항목 추가 시 X버튼 안 뜨는 오류 해결
  }
};

// create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName('li');
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('X');
  span.className = 'closeBtn';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// click on a close button to hide the current list item
let closeBtn = document.getElementsByClassName('closeBtn');
let j;
for (j = 0; j < closeBtn.length; j++) {
  closeBtn[j].onclick = function () {
    let div = this.parentElement;
    div.style.display = 'none';
  };
}

// add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false
);
