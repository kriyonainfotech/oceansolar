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
    <div className="p-6 font-sans">
      {/* Table Section */}
      <div className="overflow-hidden mb-8">
        <h2 className="text-2xl font-bold text-cyan-900 pb-4">
          DCDB (Fuse + SPD)
        </h2>

        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-cyan-900 text-white">
            <tr className="">
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
                  className="px-4 py-3 text-md font-semibold text-center text-white"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-left">
            {dcdb_fusespd.data.map((item, index) => (
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
                  {item.fuse}
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
        {dcdb_fusespd.notes.map((note, index) => (
          <p key={index} className="text-sm text-gray-600 mb-2">
            * {note}
          </p>
        ))}
      </div>

      {/* Specifications Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-[#24578a] mb-2">MCB</h3>
          {dcdb_fusespd.specifications.mcb.map((item, index) => (
            <p key={index} className="text-gray-700">
              {item}
            </p>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#24578a] mb-2">SPD</h3>
          {dcdb_fusespd.specifications.spd.map((item, index) => (
            <p key={index} className="text-gray-700">
              {item}
            </p>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#24578a] mb-2">Fuse</h3>
          {dcdb_fusespd.specifications.fuse.map((item, index) => (
            <p key={index} className="text-gray-700">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DCDBTable;