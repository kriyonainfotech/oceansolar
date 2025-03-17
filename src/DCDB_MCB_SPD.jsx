// DCDBTable.jsx
import React, { useEffect, useState } from "react";

const dcdbData = [
  {
    orderCode: "516",
    pvRating: "1-4.5KW",
    string: 1,
    dbSize: "18x13x10",
    mcb: "20/25A-800V",
    spdType: "T2-600V",
    spdNos: 1,
    price: 1050,
  },
  {
    orderCode: "530",
    pvRating: "4-5KW",
    string: 1,
    dbSize: "18x13x10",
    mcb: "20/25A-500V",
    spdType: "T2-1000V",
    spdNos: 1,
    price: 1150,
  },
  {
    orderCode: "531",
    pvRating: "5-6KW",
    string: 1,
    dbSize: "22x19x10",
    mcb: "20/25A-1000V",
    spdType: "T2-600V",
    spdNos: 2,
    price: 2150,
  },
  {
    orderCode: "517",
    pvRating: "5-9KW",
    string: 2,
    dbSize: "22x19x10",
    mcb: "32A-500V",
    spdType: "T2-600V",
    spdNos: 1,
    price: 2050,
  },
  {
    orderCode: "518",
    pvRating: "8-11KW",
    string: 2,
    dbSize: "28x19x10",
    mcb: "20/25A-800V",
    spdType: "T2-1000V",
    spdNos: 2,
    price: 4950,
  },
  {
    orderCode: "532",
    pvRating: "12-20KW",
    string: 2,
    dbSize: "38x28x13",
    mcb: "20/25A-1000V",
    spdType: "T2-1000V",
    spdNos: 2,
    price: 3250,
  },
];

console.log(dcdbData);

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;
console.log(GOOGLE_SHEET_URL);

const DCDB_MCB_SPD = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(GOOGLE_SHEET_URL);
        const text = await response.text();
        const rows = text.split("\n").map((row) => row.split(","));

        const updatedPrices = {};
        rows.slice(1).forEach(([, orderCode, price]) => {
          // Ignore title (Column A) and process only Order Code (B) & Price (C)
          if (orderCode && price) {
            updatedPrices[orderCode.trim()] = parseFloat(price);
          }
        });

        console.log(updatedPrices, "updatedPrices");
        setPrices(updatedPrices);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="p-6 font-sans">
      {/* Table Section */}
      <div className="overflow-hidden mb-8">
        <h2 className="text-2xl font-bold text-cyan-900 pb-4">
          DCDB (MCB + SPD)
        </h2>

        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-cyan-900 text-white">
            <tr className="">
              {[
                "Order Code",
                "PV Rating",
                "String",
                "DB Size (cm)",
                "SPD Type",
                "SPD NOS",
                "Price (₹)",
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-md font-semibold text-center text-white"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-left">
            {dcdbData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-2">
                  {item.orderCode}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.pvRating}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.string}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.dbSize}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.spdType}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.spdNos}
                </td>
                <td className="px-4 py-3 font-bold text-orange-500">
                  {/* ₹{item.price.toLocaleString()} */} ₹
                  {prices[item.orderCode] ?? item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notes Section */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-2">
          * notes: "Theprices applicable for a MOQ of 25 units."
        </p>
      </div>
    </div>
  );
};

export default DCDB_MCB_SPD;
