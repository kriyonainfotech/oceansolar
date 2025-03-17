// DCDBTable.jsx
import React from 'react';
import { dcdb_mcbspd } from './data/data';

const DCDBTable = () => {
  return (
    <div className="p-6 font-sans max-w-6xl mx-auto">
      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <h2 className="text-2xl font-bold bg-[#24578a] text-white p-4">
          DCDB (Fuse+SPD)
        </h2>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {["Order Code", "PV Rating", "String", "DB Size (cm)", "Fuse (1000V)",
                "SPD Type", "SPD NOS", "Price (¥)"].map((header, index) => (
                  <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                    {header}
                  </th>
                ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {dcdb_mcbspd.tableData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-700">{item.orderCode}</td>
                <td className="px-4 py-3 text-gray-700">{item.pvRating}</td>
                <td className="px-4 py-3 text-gray-700">{item.string}</td>
                <td className="px-4 py-3 text-gray-700">{item.dbSize}</td>
                <td className="px-4 py-3 text-gray-700">{item.fuse}</td>
                <td className="px-4 py-3 text-gray-700">{item.spdType}</td>
                <td className="px-4 py-3 text-gray-700">{item.spdNos}</td>
                <td className="px-4 py-3 font-semibold text-[#ff9100]">
                  ₹{item.price.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notes Section */}
      <div className="mb-8">
        {dcdb_mcbspd.notes.map((note, index) => (
          <p key={index} className="text-sm text-gray-600 mb-2">* {note}</p>
        ))}
      </div>

      {/* Specifications Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-[#24578a] mb-2">MCB</h3>
          {dcdb_mcbspd.specifications.mcb.map((item, index) => (
            <p key={index} className="text-gray-700">{item}</p>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#24578a] mb-2">SPD</h3>
          {dcdb_mcbspd.specifications.spd.map((item, index) => (
            <p key={index} className="text-gray-700">{item}</p>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#24578a] mb-2">Fuse</h3>
          {dcdb_mcbspd.specifications.fuse.map((item, index) => (
            <p key={index} className="text-gray-700">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DCDBTable;