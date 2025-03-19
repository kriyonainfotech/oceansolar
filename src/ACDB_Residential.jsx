import { useState, useEffect } from "react";

const ACDB_Residential = {
  data: [
    {
      orderCode: "501A",
      pv_rating: "1-5KW",
      phase: "1-Ph.",
      db_size_cm: "18x13x10",
      mcb_a: "25A-DP",
      spd_type: "T2-1Ph.",
      phase_indicator: "No",
      price: 950,
    },
    {
      orderCode: "501B",
      pv_rating: "5-6KW",
      phase: "1-Ph.",
      db_size_cm: "18x13x10",
      mcb_a: "32A-DP",
      spd_type: "T2-1Ph.",
      phase_indicator: "No",
      price: 950,
    },
    {
      orderCode: "502",
      pv_rating: "5-10KW",
      phase: "3-Ph.",
      db_size_cm: "22x19x10",
      mcb_a: "25A-FP",
      spd_type: "T2-3Ph.",
      phase_indicator: "No",
      price: 2050,
    },
    {
      orderCode: "503",
      pv_rating: "5-10KW",
      phase: "3-Ph.",
      db_size_cm: "22x19x10",
      mcb_a: "25A-FP",
      spd_type: "T2-3Ph.",
      phase_indicator: "Yes",
      price: 2300,
    },
    {
      orderCode: "528",
      pv_rating: "5-15KW",
      phase: "3-Ph.",
      db_size_cm: "28x19x13",
      mcb_a: "32A-FP",
      spd_type: "T2-3Ph.",
      phase_indicator: "Yes",
      price: 2550,
    },
  ],
  notes: "Prices applicable for MOQ of 25 units.",
};

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;
console.log(GOOGLE_SHEET_URL);

const ACDBResidential = () => {
  
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
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">ACDB ( Residential )</h2>

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
                src="/acdb1.png"
                alt="Product 1"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image 2 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img
                src="/acdb2.png"
                alt="Product 2"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image 3 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img
                src="/acdb3.png"
                alt="Product 3"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image 4 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img
                src="/acdb4.png"
                alt="Product 4"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Table Wrapper for Proper Border-Radius */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Order Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                PV Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Phase
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                DB Size (cm)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                MCB (A)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                SPD Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Phase Indicator
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price (₹)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ACDB_Residential.data.map((item) => (
              <tr key={item.orderCode} className="border border-gray-300">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                  {item.orderCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.pv_rating}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.phase}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.db_size_cm}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.mcb_a}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.spd_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.phase_indicator}
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-orange-400">
                  ₹{prices[item.orderCode] ?? item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-600 p-5">*{ACDB_Residential.notes}</p>
      </div>
    </div>
  );
};

export default ACDBResidential;
