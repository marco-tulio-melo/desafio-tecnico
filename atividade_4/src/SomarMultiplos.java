public class SomarMultiplos {

    public long process(int num) {
        long soma = 0;
        for (int index = 0; index <= num; index++) {
            if(index % 3 == 0 || index % 5 == 0){
                soma += index;
            }
        }
        return soma;
    }
}