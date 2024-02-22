public class App {
    public static void main(String[] args) throws Exception {
        Votos votos = new Votos();

        String votosValidos = votos.percentualVotosValidos();
        String votosEmBranco = votos.percentualVotosEmBranco();
        String votosNulos = votos.percentualVotosNulos();

        System.out.println("O percentual de votos válidos são " + votosValidos + "%");
        System.out.println("O percentual de votos em branco são " + votosEmBranco + "%");
        System.out.println("O percentual de votos nulos são " + votosNulos + "%");
    }
}
