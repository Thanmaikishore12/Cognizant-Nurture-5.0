using System;

namespace Exercise2_EcommerceSearch
{
    class Program
    {
        static void Main(string[] args)
        {
            Product[] products =
            {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Tablet", "Electronics")
            };

            Console.WriteLine("=== E-commerce Platform Search ===");

            Console.Write("Enter product name to search: ");
            string searchName = Console.ReadLine();

            Product linearResult = SearchAlgorithms.LinearSearch(products, searchName);

            if (linearResult != null)
                Console.WriteLine("\nLinear Search Result:");
            else
                Console.WriteLine("\nProduct not found using Linear Search.");

            if (linearResult != null)
                Console.WriteLine(linearResult);

            Array.Sort(products, (a, b) =>
                string.Compare(a.ProductName, b.ProductName, StringComparison.OrdinalIgnoreCase));

            Product binaryResult = SearchAlgorithms.BinarySearch(products, searchName);

            if (binaryResult != null)
                Console.WriteLine("\nBinary Search Result:");
            else
                Console.WriteLine("\nProduct not found using Binary Search.");

            if (binaryResult != null)
                Console.WriteLine(binaryResult);

            Console.WriteLine("\n--- Time Complexity Analysis ---");
            Console.WriteLine("Linear Search : Best O(1), Average O(n), Worst O(n)");
            Console.WriteLine("Binary Search : Best O(1), Average O(log n), Worst O(log n)");

            Console.WriteLine("\nBinary Search is more efficient for large sorted datasets.");
        }
    }
}