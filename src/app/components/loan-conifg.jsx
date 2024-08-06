import React, { useState } from "react";

const initialRates = [
  { amount: "5+", week: 21, fortnight: 26, month: 30 },
  { amount: "100+", week: 17.5, fortnight: 21, month: 25 },
  { amount: "800+", week: 14, fortnight: 17, month: 20 },
  { amount: "2000+", week: 10.5, fortnight: 13, month: 15 },
  { amount: "5000+", week: 7, fortnight: 8.5, month: 10 },
];

export default function LoanRatesTable() {
  const [rates, setRates] = useState(initialRates);
  const [editing, setEditing] = useState({ row: null, column: null });
  const [inputValue, setInputValue] = useState("");

  const handleCellClick = (rowIndex, columnKey) => {
    setEditing({ row: rowIndex, column: columnKey });
    setInputValue(rates[rowIndex][columnKey]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const updatedRates = rates.map((rate, index) => {
      if (index === editing.row) {
        return { ...rate, [editing.column]: inputValue };
      }
      return rate;
    });
    setRates(updatedRates);
    setEditing({ row: null, column: null });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Loan Rates
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Amount $
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Week %
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Fortnight %
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Month %
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {rates.map((rate, rowIndex) => (
                  <tr key={rowIndex} className="even:bg-gray-50">
                    {Object.keys(rate).map((key) => (
                      <td
                        key={key}
                        className="whitespace-nowrap py-4 px-3 text-sm text-gray-900 cursor-pointer"
                        onClick={() => handleCellClick(rowIndex, key)}
                      >
                        {editing.row === rowIndex && editing.column === key ? (
                          <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            autoFocus
                            className="w-full border border-gray-300 rounded p-1"
                          />
                        ) : (
                          rate[key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
