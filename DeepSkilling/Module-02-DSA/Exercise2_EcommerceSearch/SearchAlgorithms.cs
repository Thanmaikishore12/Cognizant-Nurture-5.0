using System;

namespace Exercise2_EcommerceSearch
{
    public class SearchAlgorithms
    {
        // Linear Search
        public static Product LinearSearch(Product[] products, string searchName)
        {
            foreach (Product product in products)
            {
                if (product.ProductName.Equals(searchName, StringComparison.OrdinalIgnoreCase))
                {
                    return product;
                }
            }
            return null;
        }

        // Binary Search
        public static Product BinarySearch(Product[] products, string searchName)
        {
            int left = 0;
            int right = products.Length - 1;

            while (left <= right)
            {
                int mid = (left + right) / 2;

                int comparison = string.Compare(
                    products[mid].ProductName,
                    searchName,
                    StringComparison.OrdinalIgnoreCase);

                if (comparison == 0)
                    return products[mid];

                if (comparison < 0)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return null;
        }
    }
}