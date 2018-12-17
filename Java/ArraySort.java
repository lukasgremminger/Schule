import java.util.Random;
public class ArraySort {
  private static int[] arr;


  public static void main (String[] args) {
    arr = new int[20];
    Random random = new Random();

    generateArr(random);
    log(arr);
    bubblesort(arr);
    log(arr);
  }

  static void log(int[] arr){
    for (int i = 0; i < arr.length; i++)
      System.out.print(arr[i] + " ");
    System.out.println();
  }

  static void generateArr(Random random){
    for (int i = 0; i < arr.length; i++) {
      arr[i] =  random.nextInt(10);
    }
  }
  static void selectionsort(int[] arr){
    int a;
    int ismallNr;
    for (int i = 0; i < arr.length; i++) {
      ismallNr  = i;
      for (int ui = i + 1; ui < arr.length; ui++) {
        if (arr[ui] < arr[ismallNr]) {
          ismallNr = ui;
        }
      }
      a = arr[i];
      arr[i] = arr[ismallNr];
      arr[ismallNr] = a;
    }
  }

  static void insertionsort(int[] arr){
    int j;
    int temp;
    for (int i = 1; i < arr.length; i++) {
      j = i - 1;
      temp = arr[i];
      while(j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
  }

  static void bubblesort(int[] arr){
    boolean unsorted = true;
    while(unsorted) {
      unsorted = false;
      for(int i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          int c = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = c;
          unsorted = true;
        }
      }
    }
  }

}
