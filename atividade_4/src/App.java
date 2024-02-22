public class App {
    public static void main(String[] args) throws Exception {
        SomarMultiplos somarMultiplos = new SomarMultiplos();

        long soma = somarMultiplos.process(9);
        System.out.println("A soma dos multiplos de '3 e 5' é " + soma);
    }
}
