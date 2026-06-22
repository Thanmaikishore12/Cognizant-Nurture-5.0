public class FactoryTest {

    public static void main(String[] args) {

        DocumentFactory pdfFactory = new PdfFactory();
        DocumentFactory wordFactory = new WordFactory();
        DocumentFactory excelFactory = new ExcelFactory();

        pdfFactory.createDocument().open();
        wordFactory.createDocument().open();
        excelFactory.createDocument().open();
    }
}