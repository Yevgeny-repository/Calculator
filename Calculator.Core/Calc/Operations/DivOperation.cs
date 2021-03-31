﻿namespace Calculator.Core.Operations
{
    public class DivOperation : IOperation
    {
        public string Name => "/";

        public decimal Calculate(decimal num1, decimal num2)
        {
            return num1 / num2;
        }
    }
}