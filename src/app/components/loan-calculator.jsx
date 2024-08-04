"use client";

import React, { useState } from "react";

const loanRates = [
  { amount: 5, week: 21, fortnight: 26, month: 30 },
  { amount: 100, week: 17.5, fortnight: 21, month: 25 },
  { amount: 800, week: 14, fortnight: 17, month: 20 },
  { amount: 2000, week: 10.5, fortnight: 13, month: 15 },
  { amount: 5000, week: 7, fortnight: 8.5, month: 10 },
];

function getRate(amount, duration) {
  for (let i = loanRates.length - 1; i >= 0; i--) {
    if (amount >= loanRates[i].amount) {
      return loanRates[i][duration];
    }
  }
  return null;
}

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("week");
  const [rate, setRate] = useState(null);

  const calculateRate = () => {
    const rate = getRate(parseFloat(amount), duration);
    setRate(rate);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Loan Calculator
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Enter the loan amount and select the duration to calculate the
            interest rate.
          </p>
        </div>
      </div>
      <div className="mt-4 sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <label className="block text-sm font-medium text-gray-700">
            Loan Amount ($)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="week">Week</option>
            <option value="fortnight">Fortnight</option>
            <option value="month">Month</option>
          </select>
          <button
            type="button"
            onClick={calculateRate}
            className="mt-4 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Calculate Rate
          </button>
          {rate !== null && (
            <div className="mt-4 text-sm text-gray-900">
              <p>Interest Rate: {rate}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
