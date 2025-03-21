import { useEffect, useState } from "react";

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;
console.log(GOOGLE_SHEET_URL);

const ACDBTable2 = () => {
  const acdbData = {
    products: [
      {
        orderCode: "A.5-15.WN.IIIO.AOS",
        kW3Phase: "5-15KW",
        boxType: "ABS",
        mcb: "32A",
        mccb: "-",
        contactor: "32A",
        gland: "PG 21",
        price: "4700",
      },
      {
        orderCode: "A.5-15.WN.IIIO.AOB",
        kW3Phase: "5-15KW",
        boxType: "ABS",
        mcb: "32A",
        mccb: "-",
        contactor: "32A",
        gland: "SC21/SC25",
        price: "5825",
      },
      {
        orderCode: "A.20.WN.IIIO.AO",
        kW3Phase: "20 kW",
        boxType: "ABS",
        mcb: "40A",
        mccb: "-",
        contactor: "40A",
        gland: "SC 25",
        price: "6700",
      },
      {
        orderCode: "A.25.WN.IIIO.AO",
        kW3Phase: "25 kW",
        boxType: "ABS",
        mcb: "50A",
        mccb: "-",
        contactor: "50A",
        gland: "SC 25",
        price: "7050",
      },
      {
        orderCode: "A.35.WN.IIIO.AO",
        kW3Phase: "26-35 kW",
        boxType: "ABS",
        mcb: "63A",
        mccb: "-",
        contactor: "63A",
        gland: "SC28/SC35",
        price: "10500",
      },
      {
        orderCode: "A.40.WN.IIIO.AO",
        kW3Phase: "40 kW",
        boxType: "ABS",
        mcb: "-",
        mccb: "80A 10 kA",
        contactor: "80A",
        gland: "SC 38",
        price: "13700",
      },
      {
        orderCode: "A.50.WN.IIIO.AO",
        kW3Phase: "50 kW",
        boxType: "ABS",
        mcb: "-",
        mccb: "100A 10 kA",
        contactor: "100A",
        gland: "SC 38",
        price: "15400",
      },
      {
        orderCode: "A.60.WN.IIIO.AO",
        kW3Phase: "60 kW",
        boxType: "ABS",
        mcb: "-",
        mccb: "125A 10 kA",
        contactor: "125A",
        gland: "SC 38",
        price: "17400",
      },
      {
        orderCode: "A.80.WN.IIIO.MI",
        kW3Phase: "70-80 kW",
        boxType: "Metal",
        mcb: "-",
        mccb: "160A 25 kA",
        contactor: "160A",
        gland: "SC 45",
        price: "39000",
      },
      {
        orderCode: "A.100.WN.IIIO.MI",
        kW3Phase: "100 kW",
        boxType: "Metal",
        mcb: "-",
        mccb: "200A 25 kA",
        contactor: "200A",
        gland: "SC 45",
        price: "43000",
      },
      {
        orderCode: "A.125.WN.IIIO.MI",
        kW3Phase: "125 kW",
        boxType: "Metal",
        mcb: "-",
        mccb: "250A 25 kA",
        contactor: "250A",
        gland: "SC45/SC50",
        price: "50800",
      },
      {
        orderCode: "A.150.WN.IIIO.MI",
        kW3Phase: "150 kW",
        boxType: "Metal",
        mcb: "-",
        mccb: "320A 36 kA",
        contactor: "320A",
        gland: "SC50/SC57",
        price: "89700",
      },
    ],
    metadata: {
      enclosureTypes: {
        ABS: "Outdoor",
        Metal: "Indoor",
      },
      mcbMccbBrands: ["ABB", "L&T"],
      spdType: {
        type: "II",
        brand: "STEL",
      },
      sppDetails: {
        upTo60KW: "Multispan",
        above60KW: "GIC",
      },
      priceNote: "Above all price for 1 in & 1 out ACDB",
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
      <h2 className="text-2xl font-bold mb-4">ACDB (With No Volt Relay)</h2>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Order Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                kW 3 Phase
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                boxType
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                MCB (A)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                MCCB (A)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Contactor (A)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Gland
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {acdbData.products.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                  {item.orderCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.kW3Phase}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.boxType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.mcb}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.mccb}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.contactor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {item.gland}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-400 ">
                  ₹{prices[item.orderCode] ?? item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-gray-500 flex flex-wrap gap-6">
        {/* Enclosure Types */}
        <div className="flex items-center gap-2">
          <p className="font-semibold">Enclosure Types:</p>
          {Object.entries(acdbData.metadata.enclosureTypes).map(
            ([key, value], index) => (
              <p key={index} className="ml-1">
                {key}: {value}
              </p>
            )
          )}
        </div>

        {/* MCB/MCCB Brands */}
        <div className="flex items-center gap-2">
          <p className="font-semibold">MCB/MCCB Brands:</p>
          <p>{acdbData.metadata.mcbMccbBrands.join(", ")}</p>
        </div>

        {/* SPD Type */}
        <div className="flex items-center gap-2">
          <p className="font-semibold">SPD Type:</p>
          <p>
            Type {acdbData.metadata.spdType.type}, Brand:{" "}
            {acdbData.metadata.spdType.brand}
          </p>
        </div>

        {/* SPP Details */}
        <div className="flex items-center gap-2">
          <p className="font-semibold">SPP Details:</p>
          <p>
            Up to 60KW: {acdbData.metadata.sppDetails.upTo60KW}, Above 60KW:{" "}
            {acdbData.metadata.sppDetails.above60KW}
          </p>
        </div>

        {/* Price Note */}
        <div className="flex items-center gap-2">
          <p className="font-semibold">Price Note:</p>
          <p>{acdbData.metadata.priceNote}</p>
        </div>
      </div>
    </div>
  );
};

export default ACDBTable2;
