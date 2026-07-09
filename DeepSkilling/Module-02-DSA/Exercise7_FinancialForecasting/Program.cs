using System;

namespace Exercise7_FinancialForecasting
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double presentValue = 10000;
            double growthRate = 0.10;
            int years = 5;

            double futureValue = Forecast.PredictFutureValue(presentValue, growthRate, years);

            Console.WriteLine("Financial Forecasting");
            Console.WriteLine("---------------------");
            Console.WriteLine("Present Value : " + presentValue);
            Console.WriteLine("Growth Rate   : " + (growthRate * 100) + "%");
            Console.WriteLine("Years         : " + years);
            Console.WriteLine("Future Value  : " + futureValue);

            Console.WriteLine("\nAnalysis");
            Console.WriteLine("Time Complexity : O(n)");
            Console.WriteLine("Space Complexity : O(n)");
            Console.WriteLine("Optimization : Use iteration or memoization to avoid excessive recursive calls.");
        }
    }
}