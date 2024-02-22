public class App {
    public static void main(String[] args) throws Exception {
        CalculoFatorial calculoFatorial = new CalculoFatorial();
        int num = 5;
        long resultado = calculoFatorial.calcular(num);
        System.out.println("O fatorial de " + num + " é " + resultado);
    }
}
