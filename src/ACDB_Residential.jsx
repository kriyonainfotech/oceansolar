import { useState, useEffect } from "react";

const ACDB_Residential = {
  data: [
    { order_code: "501A", pv_rating: "1-5KW", phase: "1-Ph.", db_size_cm: "18x13x10", mcb_a: "25A-DP", spd_type: "T2-1Ph.", phase_indicator: "No", price: 950 },
    { order_code: "501B", pv_rating: "5-6KW", phase: "1-Ph.", db_size_cm: "18x13x10", mcb_a: "32A-DP", spd_type: "T2-1Ph.", phase_indicator: "No", price: 950 },
    { order_code: "502", pv_rating: "5-10KW", phase: "3-Ph.", db_size_cm: "22x19x10", mcb_a: "25A-FP", spd_type: "T2-3Ph.", phase_indicator: "No", price: 2050 },
    { order_code: "503", pv_rating: "5-10KW", phase: "3-Ph.", db_size_cm: "22x19x10", mcb_a: "25A-FP", spd_type: "T2-3Ph.", phase_indicator: "Yes", price: 2300 },
    { order_code: "528", pv_rating: "5-15KW", phase: "3-Ph.", db_size_cm: "28x19x13", mcb_a: "32A-FP", spd_type: "T2-3Ph.", phase_indicator: "Yes", price: 2550 },
  ],
  notes: "Prices applicable for MOQ of 25 units."
};

const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfgqDbyBcQp9Gzr2ZQEzReL2anGUyAQCamk7iFlTX1sIh4ZfoNWnHbRHrtAxLevndTlfH5pslPmpEh/pub?output=csv";

const ACDBResidential = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(GOOGLE_SHEET_URL);
        const text = await response.text();
        const rows = text.split("\n").map(row => row.split(","));

        const updatedPrices = {};
        rows.slice(1).forEach(([orderCode, price]) => {
          updatedPrices[orderCode.trim()] = parseFloat(price);
        });

        setPrices(updatedPrices);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-cyan-900 mb-4">ACDB ( Residential )</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-cyan-900 text-white">
            <th className="border border-gray-300 px-4 py-2">Order Code</th>
            <th className="border border-gray-300 px-4 py-2">PV Rating</th>
            <th className="border border-gray-300 px-4 py-2">Phase</th>
            <th className="border border-gray-300 px-4 py-2">DB Size (cm)</th>
            <th className="border border-gray-300 px-4 py-2">MCB (A)</th>
            <th className="border border-gray-300 px-4 py-2">SPD Type</th>
            <th className="border border-gray-300 px-4 py-2">Phase Indicator</th>
            <th className="border border-gray-300 px-4 py-2">Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {ACDB_Residential.data.map((item) => (
            <tr key={item.order_code} className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">{item.order_code}</td>
              <td className="border border-gray-300 px-4 py-2">{item.pv_rating}</td>
              <td className="border border-gray-300 px-4 py-2">{item.phase}</td>
              <td className="border border-gray-300 px-4 py-2">{item.db_size_cm}</td>
              <td className="border border-gray-300 px-4 py-2">{item.mcb_a}</td>
              <td className="border border-gray-300 px-4 py-2">{item.spd_type}</td>
              <td className="border border-gray-300 px-4 py-2">{item.phase_indicator}</td>
              <td className="border border-gray-300 px-4 py-2 font-bold text-orange-500">
                ₹{prices[item.order_code] ?? item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm text-gray-600 mt-2">{ACDB_Residential.notes}</p>
    </div>
  );
};

export default ACDBResidential;
