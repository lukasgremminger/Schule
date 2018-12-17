document.querySelector("#button").addEventListener("click", arraysort);

function arraysort() {
  let arr = document.querySelector("#zahlen").value.split(",").map(Number);
  switch (document.querySelector("#dropdown").value) {
    case "bubblesort":
      bubblesort(arr);
      break;
    case "insertionsort":
      insertionsort(arr);
      break;
    case "selectionsort":
      selectionsort(arr);
      break;
    case "quicksort":
      quicksort(arr);
      break;
  }
  document.querySelector("#output").innerHTML = arr.toString();
}

function bubblesort(arr) {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        c = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = c;
        unsorted = true;
      }
    }
  }
}

function insertionsort(arr) {
  let j;
  let temp;
  for (let i = 1; i < arr.length; i++) {
    j = i - 1;
    temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

function selectionsort(arr) {
  let a;
  let ismallNr;
  for (let i = 0; i < arr.length; i++) {
    ismallNr = i;
    for (let ui = i + 1; ui < arr.length; ui++) {
      if (arr[ui] < arr[ismallNr]) {
        ismallNr = ui;
      }
    }
    a = arr[i];
    arr[i] = arr[ismallNr];
    arr[ismallNr] = a;
  }
}

function quicksort(arr) {
  let pivot = arr.length - 1;
  sortpivot();
}
function sortpivot(start, end) {
let left = start;
let right = end;
let temp;
while(){
while (left <= pivot) {
left++;
}
while (right > pivot){
right--;
}
swap(left, right)
}
}
function swap(arr, a, b) {
temp = a;
a = b;
b = temp;
}
