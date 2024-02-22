public class App {
    public static void main(String[] args) throws Exception {
        BubbleSort bubbleSort = new BubbleSort();
        int vetor[] = { 5, 3, 2, 4, 7, 1, 0, 6 };

        int vetorOrdenado[] = bubbleSort.process(vetor);

        System.out.println("Vetor ordenado:");
        for (int num : vetorOrdenado) {
            System.out.print(num + " ");
        }
    }
}
