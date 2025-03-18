// DCDBTable.jsx
import React, { useEffect, useState } from "react";

const dcdb_fusespd = {
  data: [
    {
      orderCode: "513",
      pvRating: "1-5KW",
      string: "1",
      dbSize: "18x13x10",
      fuse: "20A",
      spdType: "T2-600V",
      spdNos: "1",
      price: 975,
    },
    {
      orderCode: "529",
      pvRating: "5-10KW",
      string: "1",
      dbSize: "18x13x10",
      fuse: "20A",
      spdType: "T2-1000V",
      spdNos: "1",
      price: 1450,
    },
    {
      orderCode: "514",
      pvRating: "5-10KW",
      string: "2",
      dbSize: "22x19x10",
      fuse: "20A",
      spdType: "T2-600V",
      spdNos: "2",
      price: 1750,
    },
    {
      orderCode: "515",
      pvRating: "10-20KW",
      string: "2",
      dbSize: "28x19x10",
      fuse: "20A",
      spdType: "T2-1000V",
      spdNos: "2",
      price: 3850,
    },
  ],
  notes: ["Prices applicable for MOQ of 25 units", "Fuse for +ve input side"],
  specifications: {
    mcb: ["500V-C&S", "800V-Reputed", "1000V-C&S/Reputed"],
    spd: ["STEL"],
    fuse: ["STEL/Trinity"],
  },
};

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;
console.log(GOOGLE_SHEET_URL);

const DCDBTable = () => {
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
    <div className="p-6 ">
      {/* Table Section */}
      <h2 className="text-2xl font-bold mb-4">DCDB (Fuse + SPD)</h2>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Order Code",
                "PV Rating",
                "String",
                "DB Size (cm)",
                "Fuse (1000V)",
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
            {dcdb_fusespd.data.map((item, index) => (
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
                  {item.fuse}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.spdType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.spdNos}
                </td>
                <td className="px-4 py-3 font-bold text-orange-500 text-center">
                  ₹ {prices[item.orderCode] ?? item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Notes Section */}
        {dcdb_fusespd.notes.length > 0 && (
          <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
            {dcdb_fusespd.notes.map((note, index) => (
              <p key={index} className="text-sm text-gray-600 mb-1">
                * {note}
              </p>
            ))}
          </div>
        )}

        {/* Specifications Section */}
        <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Specifications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "MCB", data: dcdb_fusespd.specifications.mcb },
              { title: "SPD", data: dcdb_fusespd.specifications.spd },
              { title: "Fuse", data: dcdb_fusespd.specifications.fuse },
            ].map((spec, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg p-4 border border-gray-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {spec.title}
                </h3>
                <ul className="space-y-2">
                  {spec.data.map((item, i) => (
                    <li key={i} className="text-gray-700 border-b pb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DCDBTable;
