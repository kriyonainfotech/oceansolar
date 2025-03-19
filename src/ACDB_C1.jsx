const ACDBTable1 = () => {
  const tableData = [
    {
      orderCode: "A.5-15.1IIO.AOS",
      kW: "5-15kW",
      enclosure: "ABS Outdoor",
      mcb: "32A",
      mccb: "-",
      gland: "PG 21",
      price: "2825",
    },
    {
      orderCode: "A.5-15.1IIO.AOB",
      kW: "5-15kW",
      enclosure: "ABS Outdoor",
      mcb: "32A",
      mccb: "-",
      gland: "SC21/SC25",
      price: "3200",
    },
    {
      orderCode: "A.20.1IIO.AO",
      kW: "16-20kW",
      enclosure: "ABS Outdoor",
      mcb: "40A",
      mccb: "-",
      gland: "SC 25",
      price: "5200",
    },
    {
      orderCode: "A.25.1IIO.AO",
      kW: "21-25kW",
      enclosure: "ABS Outdoor",
      mcb: "50A",
      mccb: "-",
      gland: "SC 25",
      price: "5200",
    },
    {
      orderCode: "A.35.1IIO.AO",
      kW: "26-35kW",
      enclosure: "ABS Outdoor",
      mcb: "63A",
      mccb: "-",
      gland: " SC28/SC35",
      price: "5200",
    },
    {
      orderCode: "A.40.1IIO.AO",
      kW: "36-40kW",
      enclosure: "ABS Outdoor",
      mcb: "-",
      mccb: "80A 10 kA",
      gland: "SC 38",
      price: "8250",
    },
    {
      orderCode: "A.50.1IIO.AO",
      kW: "50kW",
      enclosure: "ABS Outdoor",
      mcb: "-",
      mccb: "100A 10 kA",
      gland: "SC 45 / SC 50",
      price: "8450",
    },
    {
      orderCode: "A.60.1IIO.AO",
      kW: "60kW",
      enclosure: "ABS Outdoor",
      mcb: "-",
      mccb: " 125A 10 kA",
      gland: "SC 38",
      price: "9250",
    },
    {
      orderCode: "A.80.1IIO.MI",
      kW: "70-80kW",
      enclosure: "Metal Indoor",
      mcb: "-",
      mccb: " 160A 25 kA",
      gland: "SC 45",
      price: "21000",
    },

    {
      orderCode: "A.100.1IIO.MI",
      kW: "100kW",
      enclosure: "Metal Indoor",
      mcb: "-",
      mccb: "200A 25 kA",
      gland: "SC 45",
      price: "23500",
    },
    {
      orderCode: "A.125.1IIO.MI",
      kW: "110-125kW",
      enclosure: "Metal Indoor",
      mcb: "-",
      mccb: "250A 25 kA",
      gland: " SC45/SC50",
      price: "26500",
    },
    {
      orderCode: "A.150.1IIO.MI",
      kW: "150 kW",
      enclosure: "Metal Indoor",
      mcb: "-",
      mccb: "320A 36 kA",
      gland: "SC50/SC57",
      price: "50500",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl text-center text-gray-800 border-b pb-2 border-gray-300 font-bold mb-4">
        Commercial & Industrial
      </h2>
      <h2 className="text-2xl font-bold mb-4">ACDB (Without No Volt Relay)</h2>
     
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
                Enclosure
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                MCB (A)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                MCCB (A)
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
            {tableData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                  {item.orderCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.kW}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.enclosure}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.mcb}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.mccb}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {item.gland}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-400 font-bold">
                  {item.price} ₹
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        * Above all price for 1 in & 1 out ACDB
      </p>
    </div>
  );
};

export default ACDBTable1;
