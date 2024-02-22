public class BubbleSort {
    public int[] process(int[] arr) {
        int length = arr.length;
        for (int index = 0; index < length-1; index++) {
            for (int j = 0; j < length-index-1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        return arr;
    }
}
