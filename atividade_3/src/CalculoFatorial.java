public class CalculoFatorial {

    public long calcular(int num) {
        if (num < 0) {
            throw new IllegalArgumentException("Não é possível calcular o fatorial de um número negativo.");
        }
        long fatorial = 1;
        for (int index = 1; index <= num; index++) {
            fatorial *= index;
        }
        return fatorial;
    }
}