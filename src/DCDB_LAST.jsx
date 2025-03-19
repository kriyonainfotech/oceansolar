import React from 'react'

const DCDB_LAST = () => {

    const solarComponents = {
      mainProducts: [
        {
          orderCode: "536",
          inOut: "2 in 1 Out",  
          fuse: "20/25A",
          dcMCB: "32A-500V",
          dcIsolator: "-",
          spdType: "T2-600V",
          price: "1650 ₹",
        },
        {
          orderCode: "537",
          inOut: "3 in 1 Out",
          fuse: "20/25A",
          dcMCB: "32A-500V",
          dcIsolator: "-",
          spdType: "T2-600V",
          price: "2175 ₹",
        },
        {
          orderCode: "538",
          inOut: "4 in 1 Out",
          fuse: "20/25A",
          dcMCB: "63A-500V",
          dcIsolator: "-",
          spdType: "T2-600V",
          price: "2800 ₹",
        },
        {
          orderCode: "538",
          inOut: "6 in 1 Out",
          fuse: "20/25A",
          dcMCB: "63A-500/800V",
          dcIsolator: "-",
          spdType: "T2-1000V",
          price: "4500 ₹",
        },
        {
          orderCode: "540",
          inOut: "8 in 1 Out",
          fuse: "20/25A",
          dcMCB: "-",
          dcIsolator: "125/160A-1000V",
          spdType: "T2-1000V",
          price: "10700 ₹",
        },
        {
          orderCode: "541",
          inOut: "10 in 1 Out",
          fuse: "20/25A",
          dcMCB: "-",
          dcIsolator: "160/200A-1000V",
          spdType: "T2-1000V",
          price: "14500 ₹",
        },
      ],

      mc4Components: {
        connectors: [
          {
            item: "MC4 Connector LQ 1",
            price: "21",
          },
          {
            item: "MC4 Panel Connector LQ 2",
            price: "24",
          },
          {
            item: "2 in 1 out Y Connector Cable",
            price: "195",
          },
          {
            item: "MC4 Branch Connector 2 in 1 out T2",
            price: "150",
          },
          {
            item: "MC4 Branch Connector 3 in 1 out T3",
            price: "240",
          },
          {
            item: "MC4 Branch Connector 4 in 1 out T4",
            price: "325",
          },
        ],
        inlineFuse: {
          item: "MC4 Inline Fuse Connector 1500V 20A-30A",
          price: "310 ₹ per Piece",
        },
      },
    };

   return (
     <div className="p-6">
       {/* Main Products Table */}
       <div className="overflow-x-auto rounded-lg border mb-6">
         <h3 className="text-lg font-semibold p-4 bg-gray-100">AJB</h3>

         <table className="min-w-full divide-y divide-gray-200">
           <thead className="bg-gray-50">
             <tr>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 Order Code
               </th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 In/Out
               </th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 Fuse
               </th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 DC MCB
               </th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 DC Isolator
               </th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 SPD Type
               </th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 Price
               </th>
             </tr>
           </thead>
           <tbody className="bg-white divide-y divide-gray-200">
             {solarComponents.mainProducts.map((item, index) => (
               <tr key={index}>
                 <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                   {item.orderCode}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   {item.inOut}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   {item.fuse}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   {item.dcMCB}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   {item.dcIsolator}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   {item.spdType}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-400">
                   {item.price}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>

       {/* MC4 Connectors Table */}
       <div className="overflow-x-auto rounded-lg border mb-6">
         <h3 className="text-lg font-semibold p-4 bg-gray-100">MC 4</h3>
         <table className="min-w-full divide-y divide-gray-200">
           <thead className="bg-gray-50">
             <tr>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 Item
               </th>
               <th className="px-6 py-3 text-left text-xs font-medium uppercase">
                 Price
               </th>
             </tr>
           </thead>
           <tbody className="bg-white divide-y divide-gray-200">
             {solarComponents.mc4Components.connectors.map((item, index) => (
               <tr key={index}>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   {item.item}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-400">
                   {item.price} ₹
                 </td>
               </tr>
             ))}
             <tr>
               <td className="px-6 py-4 whitespace-nowrap text-sm">
                 {solarComponents.mc4Components.inlineFuse.item}
               </td>
               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                 {solarComponents.mc4Components.inlineFuse.price}
               </td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   );
}

export default DCDB_LAST