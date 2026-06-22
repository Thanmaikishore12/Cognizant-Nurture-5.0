public class SingletonTest {

    public static void main(String[] args) {

        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();

        log1.log("Singleton Pattern Working");

        System.out.println(log1 == log2);
    }
}