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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">DCDB (MCB + SPD)</h2>
      {/* Image Grid Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Our Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img
                src="/dcdb1.png"
                alt="Product 1"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image 2 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img
                src="/dcdb2.png"
                alt="Product 2"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image 3 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img
                src="/dcdb3.png"
                alt="Product 3"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image 4 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img
                src="/dcdb4.png"
                alt="Product 4"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
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
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {dcdbData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                  {item.orderCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.pvRating}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.string}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.dbSize}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.spdType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.spdNos}
                </td>
                <td className="px-4 py-3 font-bold text-orange-400">
                  {/* ₹{item.price.toLocaleString()} */} ₹
                  {prices[item.orderCode] ?? item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="">
          <p className="text-sm text-gray-600 p-5">
            * notes: "Theprices applicable for a MOQ of 25 units."
          </p>
        </div>
      </div>
    </div>
  );
};

export default DCDB_MCB_SPD;
