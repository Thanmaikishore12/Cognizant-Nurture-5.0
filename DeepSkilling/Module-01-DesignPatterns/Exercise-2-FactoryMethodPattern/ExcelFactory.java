class ExcelFactory extends DocumentFactory {

    Document createDocument() {
        return new ExcelDocument();
    }
}