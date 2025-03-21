import { useEffect, useState } from "react";

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;
console.log(GOOGLE_SHEET_URL);

const DCDBTable1 = () => {
  const dcdbData = {
    products: [
      {
        orderCode: "DFS.IIIO.6.1",
        string: "1 in 1 out",
        spdQty: 1,
        spdV: "600V",
        enclosure: "18x13x10",
        fuseQty: 1,
        price: "1050",
      },
      {
        orderCode: "DFS.IIIO.10.1",
        string: "1 in 1 out",
        spdQty: 1,
        spdV: "1000V",
        enclosure: "18x13x10",
        fuseQty: 1,
        price: "1500",
      },
      {
        orderCode: "DFS.2I2O.6.2",
        string: "2 in 2 out",
        spdQty: 2,
        spdV: "600V",
        enclosure: "22x19x10",
        fuseQty: 2,
        price: "1950",
      },
      {
        orderCode: "DFS.2I2O.10.2",
        string: "2 in 2 out",
        spdQty: 2,
        spdV: "1000V",
        enclosure: "22x19x10",
        fuseQty: 2,
        price: "2975",
      },
      {
        orderCode: "DFS.3I3O.10.2",
        string: "3 in 3 out",
        spdQty: 2,
        spdV: "1000V",
        enclosure: "28x28x13",
        fuseQty: 3,
        price: "4075",
      },
      {
        orderCode: "DFS.3I3O.10.3",
        string: "3 in 3 out",
        spdQty: 3,
        spdV: "1000V",
        enclosure: "38x28x13",
        fuseQty: 3,
        price: "5400",
      },
      {
        orderCode: "DFS.4I4O.10.2",
        string: "4 in 4 out",
        spdQty: 2,
        spdV: "1000V",
        enclosure: "28x28x13",
        fuseQty: 4,
        price: "4400",
      },
      {
        orderCode: "DFS.4I4O.10.3",
        string: "4 in 4 out",
        spdQty: 3,
        spdV: "1000V",
        enclosure: "38x28x13",
        fuseQty: 4,
        price: "5700",
      },
      {
        orderCode: "DFS.4I4O.10.4",
        string: "4 in 4 out",
        spdQty: 4,
        spdV: "1000V",
        enclosure: "40x40x16",
        fuseQty: 4,
        price: "6950",
      },
      {
        orderCode: "DFS.5I5O.10.2",
        string: "5 in 5 out",
        spdQty: 2,
        spdV: "1000V",
        enclosure: "40x40x16",
        fuseQty: 5,
        price: "5250",
      },
      {
        orderCode: "DFS.5I5O.10.3",
        string: "5 in 5 out",
        spdQty: 3,
        spdV: "1000V",
        enclosure: "40x40x16",
        fuseQty: 5,
        price: "6200",
      },
      {
        orderCode: "DFS.5I5O.10.4",
        string: "5 in 5 out",
        spdQty: 4,
        spdV: "1000V",
        enclosure: "40x40x16",
        fuseQty: 5,
        price: "7200",
      },
      {
        orderCode: "DFS.6I6O.10.2",
        string: "6 in 6 out",
        spdQty: 2,
        spdV: "1000V",
        enclosure: "40x40x16",
        fuseQty: 6,
        price: "5550",
      },
      {
        orderCode: "DFS.6I6O.10.3",
        string: "6 in 6 out",
        spdQty: 3,
        spdV: "1000V",
        enclosure: "40x40x16",
        fuseQty: 6,
        price: "6550",
      },
      {
        orderCode: "DFS.6I6O.10.4",
        string: "6 in 6 out",
        spdQty: 4,
        spdV: "1000V",
        enclosure: "40x40x16",
        fuseQty: 6,
        price: "7550",
      },
      {
        orderCode: "DFS.6I6O.10.6",
        string: "6 in 6 out",
        spdQty: 6,
        spdV: "1000V",
        enclosure: "56x38x18",
        fuseQty: 6,
        price: "10400",
      },
      {
        orderCode: "DFS.8I8O.10.3",
        string: "8 in 8 out",
        spdQty: 3,
        spdV: "1000V",
        enclosure: "56x38x18",
        fuseQty: 8,
        price: "8150",
      },
      {
        orderCode: "DFS.8I8O.10.4",
        string: "8 in 8 out",
        spdQty: 4,
        spdV: "1000V",
        enclosure: "56x38x18",
        fuseQty: 8,
        price: "9000",
      },
      {
        orderCode: "DFS.8I8O.10.6",
        string: "8 in 8 out",
        spdQty: 6,
        spdV: "1000V",
        enclosure: "56x38x18",
        fuseQty: 8,
        price: "11000",
      },
      {
        orderCode: "DFS.8I8O.10.8",
        string: "8 in 8 out",
        spdQty: 8,
        spdV: "1000V",
        enclosure: "56x38x18",
        fuseQty: 8,
        price: "12900",
      },
      {
        orderCode: "DFS.10IIO.10.3",
        string: "10 in 10 out",
        spdQty: 3,
        spdV: "1000V",
        enclosure: "56x38x18",
        fuseQty: 10,
        price: "8650",
      },
      {
        orderCode: "DFS.10IIO.10.4",
        string: "10 in 10 out",
        spdQty: 4,
        spdV: "1000V",
        enclosure: "56x38x18",
        fuseQty: 10,
        price: "9500",
      },
      {
        orderCode: "DFS.10IIO.10.6",
        string: "10 in 10 out",
        spdQty: 6,
        spdV: "1000V",
        enclosure: "56x38x18",
        fuseQty: 10,
        price: "11500",
      },
      {
        orderCode: "DFS.10IIO.10.8",
        string: "10 in 10 out",
        spdQty: 8,
        spdV: "1000V",
        enclosure: "28ox-40x40x16",
        fuseQty: 10,
        price: "14400",
      },
      {
        orderCode: "DFS.10IIO.10.10",
        string: "10 in 10 out",
        spdQty: 10,
        spdV: "1000V",
        enclosure: "28ox-40x40x16",
        fuseQty: 10,
        price: "16650",
      },
      {
        orderCode: "DFS.12II2O.10.4",
        string: "12 in 12 out",
        spdQty: 4,
        spdV: "1000V",
        enclosure: "56x38x18",
        fuseQty: 12,
        price: "10400",
      },
      {
        orderCode: "DFS.12II2O.10.6",
        string: "12 in 12 out",
        spdQty: 6,
        spdV: "1000V",
        enclosure: "28ox-40x40x16",
        fuseQty: 12,
        price: "13100",
      },
      {
        orderCode: "DFS.12II2O.10.8",
        string: "12 in 12 out",
        spdQty: 8,
        spdV: "1000V",
        enclosure: "28ox-40x40x16",
        fuseQty: 12,
        price: "15100",
      },
      {
        orderCode: "DFS.12II2O.10.10",
        string: "12 in 12 out",
        spdQty: 10,
        spdV: "1000V",
        enclosure: "28ox-56x38x18",
        fuseQty: 12,
        price: "18900",
      },
      {
        orderCode: "DFS.16II6O.10.8",
        string: "16 in 16 out",
        spdQty: 8,
        spdV: "1000V",
        enclosure: "28ox-56x38x18",
        fuseQty: 16,
        price: "18000",
      },
      {
        orderCode: "DFS.16II6O.10.10",
        string: "16 in 16 out",
        spdQty: 10,
        spdV: "1000V",
        enclosure: "28ox-56x38x18",
        fuseQty: 16,
        price: "18800",
      },
      {
        orderCode: "DFS.16II6O.10.12",
        string: "16 in 16 out",
        spdQty: 12,
        spdV: "1000V",
        enclosure: "28ox-56x38x18",
        fuseQty: 16,
        price: "22000",
      },
    ],
    metadata: {
      application: "DCDB for MONO PV Module (Fuse+SPD)",
      systemType: "Commercial & Industrial",
      notes: {
        enclosureFormat:
          "Original formatting preserved including '28ox-' notations",
        fuseRating: "20/25A reference in header",
        currency: "Japanese Yen (¥) with space before symbol",
      },
    },
  };

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
      <h2 className="text-2xl font-bold mb-4">
        DCDB - For MONO PV Module (Fuse+SPD)
      </h2>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Order Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                string
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                SPD Qty
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                SPD (V)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Enclosure (cm)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                FuseQty (20/25A)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dcdbData.products.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                  {item.orderCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.string}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.spdQty}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.spdV}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.enclosure}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.fuseQty}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-400">
                  ₹{prices[item.orderCode] ?? item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DCDBTable1;
