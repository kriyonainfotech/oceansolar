// DCDBTable.jsx
import React, { useEffect, useState } from "react";

const dcdbProducts = {
  products: [
    {
      order: "519",
      pvRating: "I-4.5KW",
      string: 1,
      dbSize: { width: 18, height: 13, depth: 10 },
      fuse: "20/25A",
      mcb: { rating: "20/25A", voltage: 500 },
      spd: { type: "T2", voltage: 600 },
      quantity: 1,
      price: 1225,
    },
    {
      order: "533",
      pvRating: "4-5KW",
      string: 1,
      dbSize: { width: 18, height: 18, depth: 10 },
      fuse: "20/25A",
      mcb: { rating: "20/25A", voltage: 800 },
      spd: { type: "T2", voltage: 600 },
      quantity: 1,
      price: 1450,
    },
    {
      order: "534",
      pvRating: "5-6KW",
      string: 1,
      dbSize: { width: 28, height: 19, depth: 10 },
      fuse: "20/25A",
      mcb: { rating: "20/25A", voltage: 1000 },
      spd: { type: "T2", voltage: 1000 },
      quantity: 1,
      price: 2475,
    },
    {
      order: "520",
      pvRating: "5-9KW",
      string: 2,
      dbSize: { width: 28, height: 19, depth: 10 },
      fuse: "20/25A",
      mcb: { rating: "32A", voltage: 500 },
      spd: { type: "T2", voltage: 600 },
      quantity: 2,
      price: 2450,
    },
    {
      order: "535",
      pvRating: "5-9KW",
      string: 2,
      dbSize: { width: 28, height: 28, depth: 10 },
      fuse: "20/25A",
      mcb: { rating: "20/25A", voltage: 800 },
      spd: { type: "T2", voltage: 600 },
      quantity: 2,
      price: 3120,
    },
    {
      order: "521",
      pvRating: "10-20KW",
      string: 2,
      dbSize: { width: 38, height: 28, depth: 13 },
      fuse: "20/25A",
      mcb: { rating: "20/25A", voltage: 1000 },
      spd: { type: "T2", voltage: 1000 },
      quantity: 2,
      price: 5200,
    },
  ],
  metadata: {
    moq: 25,
    fuseApplication: "+ve Input",
    mcbApplication: "Output",
    currency: "INR",
    dimensionsUnit: "cm",
    voltageUnit: "V",
    currentUnit: "A",
  },
};

// console.log(dcdbData);

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;
console.log(GOOGLE_SHEET_URL);

const DCDB_FUSE_MCB_SPD = () => {
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
      <h2 className="text-2xl font-bold mb-4">DCDB (FUSE+MCB+SPD)</h2>
      {/* Table Section */}
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
                "MCB (A)",
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
            {dcdbProducts.products.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                  {item.order}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.pvRating}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.string}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {`${item.dbSize.width}x${item.dbSize.height}x${item.dbSize.depth}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.fuse}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {`${item.mcb.rating}-${item.mcb.voltage}V`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {`${item.spd.type}-${item.spd.voltage}V`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.quantity}
                </td>
                <td className="px-4 py-3 font-bold text-orange-500">
                  ₹{prices[item.order] ?? item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Notes Section */}
        <div className="p-5">
          <p className="text-sm text-gray-600 ">
            * The prices are applicable for a MOQ of {dcdbProducts.metadata.moq}{" "}
            units.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DCDB_FUSE_MCB_SPD;
