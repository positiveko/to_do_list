// create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// creat a new list item when clicking on the "add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue.trim() === "") {
    // 스페이스, 탭과 같은 공백 문자 지워줌
    alert("You must write something!"); // 스페이스바 적용
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// creat a new list item when pressing Enter Key
function addNewItem(list, itemText) {
  var li = document.createElement("li");
  li.innerText = itemText;
  list.appendChild(li);
}

var inputText = document.getElementById("myInput");
inputText.focus();

inputText.onkeyup = function (event) {
  if (event.which === 13) {
    newElement(); // 엔터 키로 항목 추가 시 X버튼 안 뜨는 오류 해결
    /*
    var itemText = document.getElementById("myInput").value;
    if (!itemText || itemText === "" || itemText === " ") return false; // blank 방지
    addNewItem(document.getElementById("myUL"), itemText);
    inputText.focus();
    inputText.select();
    // add "X" mark
    var li = document.createElement("li");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    */
  }
};
