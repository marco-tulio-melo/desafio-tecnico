import java.text.DecimalFormat;

public class Votos {
    DecimalFormat df = new DecimalFormat("#.##");
    
    double totalEleitores = 1000;
    double votosValidos = 800;
    double votosEmBranco = 150;

    public double getTotalEleitores() {
        return totalEleitores;
    }

    public double getVotosValidos() {
        return votosValidos;
    }

    public double getVotosEmBranco() {
        return votosEmBranco;
    }

    public double getVotosNulos() {
        return votosNulos;
    }

    int votosNulos = 50;

    public String percentualVotosValidos() {
        double percentual = (getVotosValidos() / getTotalEleitores()) * 100;
        return df.format(percentual) ;
    }

    public String percentualVotosEmBranco() {
        double percentual = (getVotosEmBranco() / getTotalEleitores()) * 100;
        return df.format(percentual) ;
    }

    public String percentualVotosNulos() {
        double percentual = (getVotosNulos() / getTotalEleitores()) * 100;
        return df.format(percentual) ;
    }
}
