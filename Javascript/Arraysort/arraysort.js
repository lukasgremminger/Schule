document.querySelector("#button").addEventListener("click", arraysort);

function arraysort() {
  let arr = document.querySelector("#zahlen").value.split(",").map(Number);
  switch (document.querySelector("#dropdown").value) {
    case "Bubblesort":
      bubbleSort(arr);
      break;
    case "Insertionsort":
      insertionSort(arr);
      break;
    case "Selectionsort":
      selectionSort(arr);
      break;
    case "Quicksort":
      quickSort(arr, 0, arr.length - 1);
      break;
  }
  document.querySelector("#output").innerHTML = arr.toString();
}

function bubbleSort(arr) {
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

function selectionSort(arr) {
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

function quickSort(arr, left, right) {
  var len = arr.length,
    pivot,
    partitionIndex;


  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
}

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left;
  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
