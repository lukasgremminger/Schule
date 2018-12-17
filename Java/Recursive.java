public class Recursive {
  public static void main (String[] args) {
    System.out.print(pascalTriangle(5, 3));
  }

  public static int sequence1(int n) {
    if (n == 0) {
      return 1;
    } else {
      return sequence1(n - 1) * 2;
    }
  }

  public static long sequence2(int n){
    if (n == 0) return 2;
    else return sequence2(n - 1) * sequence2(n - 1);
  }

  public static int fibonacci(int n){
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else return fibonacci(n - 1) + fibonacci(n - 2);
  }

  public static int pascalTriangle(int row, int col) {
    if (col > row) {
      System.err.println("gibts nicht lol");
      return 0;
    } else if (col == 1 || col == row) {
      return 1;
    } else return pascalTriangle(row - 1, col - 1) + pascalTriangle(row - 1, col);
  }

}
