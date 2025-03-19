import React from "react";

// const data = {
//   title: "BOS Kit for Residential Solar Project",
//   sections: {
//     "Bills of Material": [
//       {
//         category: "SPD - STEL/ Finder",
//         items: [
//           {
//             description: "DCDB",
//             specification: "DCDB with 600V SPD, 500V MCB",
//             quantity: {
//               "1-5KW": "1 Nos. (1 In 1 Out)",
//               "4-6KW": "1 Nos. (2 In 2 Out)",
//               "6-10KW": "1 Nos.",
//             },
//           },
//         ],
//       },
//       {
//         category: "MCB - C&S",
//         items: [
//           {
//             description: "ACDB 1-Ph",
//             specification: "ACDB with 1-Ph. SPD & 1-Ph. MCB",
//             quantity: {
//               "1-5KW": "1 Nos.",
//               "4-6KW": "1 Nos.",
//               "6-10KW": "-",
//             },
//           },
//         ],
//       },
//     ],
//   },
//   pricing: {
//     "Option-1 (Polycab )": {
//       "1-5KW": "10750 ₹",
//       "4-6KW": "15000 ₹",
//       "6-10KW": "17650 ₹",
//     },
//     "Option-2 (Polygauard)": {
//       "1-5KW": "9400 ₹",
//       "4-6KW": "12625 ₹",
//       "6-10KW": "15500 ₹",
//     },
//   },
// };

const data = [
  {
    title: "BOS Kit for Residential Solar Project",
    sections: {
      "Bills of Material": {
        "Item Categories": [
          {
            category: "SPD - STEL/ Finder",
            items: [
              {
                description: "DCDB",
                specification: "DCDB with 600V SPD, 500V MCB",
                quantity: {
                  "1-5KW (1-String, 1-Phase)": "1 Nos. (1 In 1 Out)",
                  "4-6KW (2-Strings, 1-Phase)": "1 Nos. (2 In 2 Out)",
                  "6-10KW (2-Strings, 3-Phase)": "1 Nos.",
                },
              },
            ],
          },
          {
            category: "MCB - C&S",
            items: [
              {
                description: "ACDB 1-Ph",
                specification: "ACDB with 1-Ph. SPD & 1-Ph. MCB",
                quantity: {
                  "1-5KW (1-String, 1-Phase)": "1 Nos.",
                  "4-6KW (2-Strings, 1-Phase)": "1 Nos.",
                  "6-10KW (2-Strings, 3-Phase)": "-",
                },
              },
              {
                description: "ACDB 3-Ph",
                specification: "ACDB with 3-Ph SPD & 3-Ph MCB",
                quantity: {
                  "1-5KW (1-String, 1-Phase)": "-",
                  "4-6KW (2-Strings, 1-Phase)": "-",
                  "6-10KW (2-Strings, 3-Phase)": "1 Nos.",
                },
              },
            ],
          },
          {
            category: "Polycab",
            items: [
              {
                description: "Solar DC Wire",
                specification: "2.5 Sq.mm EN Standard",
                quantity: {
                  "1-5KW (1-String, 1-Phase)": "25 Mtr.",
                  "4-6KW (2-Strings, 1-Phase)": "50 Mtr.",
                  "6-10KW (2-Strings, 3-Phase)": "50 Mtr.",
                },
              },
            ],
          },
          {
            category: "Polycab / Polygauard or Reputed (SiS)",
            items: [
              {
                description: "AC Copper Flexible Wire",
                specification: [
                  {
                    option: "Option-1",
                    values: [
                      "2.5 Sq.mm Red & Black Wire Polycab",
                      "4 Sq.mm Red & Black Wire Polycab",
                      "4C x 4 Sq.mm Cable Polycab",
                    ],
                  },
                  {
                    option: "Option-2",
                    values: [
                      "2C x 4 Sq.mm Cable Polygauard",
                      "4C x 4 Sq.mm Cable Polygauard",
                    ],
                  },
                ],
                quantity: {
                  "1-5KW (1-String, 1-Phase)": "30 Mtr.",
                  "4-6KW (2-Strings, 1-Phase)": "-",
                  "6-10KW (2-Strings, 3-Phase)": "30 Mtr.",
                },
              },
            ],
          },
          {
            category: "Samptel",
            items: [
              {
                description: "Earthing & LA",
                specification: [
                  "4 Sq.mm Copper Wire",
                  "16 Sq.mm Aluminum Wire",
                  "Copper Bolted Solid Electrode 14mm x 1.5 Mtr.",
                  "Copper Bonded Multi-Spike LA 14mm x 1 Mtr.",
                  "Earthing Compound 15Kg Bag",
                ],
                quantity: {
                  "1-5KW (1-String, 1-Phase)": [
                    "50 Mtr.",
                    "34 Mtr.",
                    "3 Nos.",
                    "1 Nos.",
                    "1 Bag",
                  ],
                  "4-6KW (2-Strings, 1-Phase)": [
                    "50 Mtr.",
                    "34 Mtr.",
                    "3 Nos.",
                    "1 Nos.",
                    "1 Bag",
                  ],
                  "6-10KW (2-Strings, 3-Phase)": [
                    "50 Mtr.",
                    "34 Mtr.",
                    "3 Nos.",
                    "1 Nos.",
                    "1 Bag",
                  ],
                },
              },
            ],
          },
          {
            category: "Reputed",
            items: [
              {
                description: "PVC Conduit & Accessories",
                specification: [
                  "25mm PVC Conduit LMS (Non-ISI)",
                  "25mm PVC Elbow/Bend",
                  "25mm PVC Tee",
                  "25mm Flexible Pipe",
                ],
                quantity: {
                  "1-5KW (1-String, 1-Phase)": [
                    "15 Nos.",
                    "15/20 Nos.",
                    "15 Nos.",
                    "1 Pkt.",
                  ],
                  "4-6KW (2-Strings, 1-Phase)": [
                    "15 Nos.",
                    "15/20 Nos.",
                    "15 Nos.",
                    "1 Pkt.",
                  ],
                  "6-10KW (2-Strings, 3-Phase)": [
                    "15 Nos.",
                    "15/20 Nos.",
                    "15 Nos.",
                    "1 Pkt.",
                  ],
                },
              },
            ],
          },
          {
            category: "Reputed",
            items: [
              {
                description: "Clamp & Cable Tie",
                specification: [
                  "25mm PVC Nail Saddle",
                  "300x4.8mm UV Cable Tie",
                ],
                quantity: {
                  "1-5KW (1-String, 1-Phase)": ["1 Pkt.", "2 Pair"],
                  "4-6KW (2-Strings, 1-Phase)": ["1 Pkt.", "2 Pair"],
                  "6-10KW (2-Strings, 3-Phase)": ["1 Pkt.", "4 Pair"],
                },
              },
            ],
          },
          {
            category: "Ningbo Jinghua",
            items: [
              {
                description: "MC 4",
                specification: "Solar MC 4 Connector (TUV)",
                quantity: {
                  "1-5KW (1-String, 1-Phase)": "2 Pair",
                  "4-6KW (2-Strings, 1-Phase)": "4 Pair",
                  "6-10KW (2-Strings, 3-Phase)": "4 Pair",
                },
              },
            ],
          },
          {
            category: "Reputed",
            items: [
              {
                description: "Lugs",
                specification: [
                  "2.5/4 Sq.mm Plastic Lug",
                  "4 Sq.mm Ring Copper Lug",
                  "16 Sq.mm Ring Alu. Lug",
                ],
                quantity: {
                  "1-5KW (1-String, 1-Phase)": [
                    "20 Nos.",
                    "10 Nos.",
                    "10 Nos.",
                  ],
                  "4-6KW (2-Strings, 1-Phase)": [
                    "20 Nos.",
                    "10 Nos.",
                    "10 Nos.",
                  ],
                  "6-10KW (2-Strings, 3-Phase)": [
                    "20 Nos.",
                    "10 Nos.",
                    "10 Nos.",
                  ],
                },
              },
            ],
          },
          {
            category: "Reputed",
            items: [
              {
                description: "Screw",
                specification: "25x6mm Screw for Earthing Link, ACDB & DCDB",
                quantity: {
                  "1-5KW (1-String, 1-Phase)": "20 Nos.",
                  "4-6KW (2-Strings, 1-Phase)": "20 Nos.",
                  "6-10KW (2-Strings, 3-Phase)": "20 Nos.",
                },
              },
            ],
          },
        ],
      },
    },
    pricing: {
      "Option-1 (Polycab)": {
        "1-5KW": "10750 ₹",
        "4-6KW": "15000 ₹",
        "6-10KW": "17650 ₹",
      },
      "Option-2 (Polygauard)": {
        "1-5KW": "9400 ₹",
        "4-6KW": "12625 ₹",
        "6-10KW": "15500 ₹",
      },
    },
  },
];

   const data2 = [
     {
       option: "Option 1",
       brand: "Polycab",
       prices: [10750, 15600, 17650],
     },
     {
       option: "Option 2",
       brand: "Polyguard",
       prices: [9400, 12560, 15550],
     },
   ];

   const BOSKitTable = () => {
     return (
       <div className="p-6">
         <h2 className="text-2xl font-bold mb-4">
           BOS Kit - For Residential Solar Project
         </h2>
         <div className="overflow-x-auto rounded-lg border">
           <table border={1} className="min-w-full divide-y divide-gray-200">
             <thead className="bg-gray-50">
               <tr>
                 <th
                   className="px-6 py-3 text-left text-md font-semibold text-gray-800 uppercase"
                   colSpan="4"
                 >
                   Bills of Material
                 </th>
                 <th
                   className="px-6 py-3 text-left text-md font-semibold text-gray-800 uppercase"
                   colSpan="3"
                 >
                   Item Quantity
                 </th>
               </tr>
             </thead>
             <tbody>
               <tr className="bg-gray-100">
                 <th className="px-6 py-3 text-left text-md font-semibold text-gray-800 uppercase">
                   Option 1
                 </th>
                 <th className="px-6 py-3 text-left text-md font-semibold text-gray-800 uppercase">
                   Option 2
                 </th>
                 <th className="px-6 py-3 text-left text-md font-semibold text-gray-800 uppercase">
                   Item Description
                 </th>
                 <th className="px-6 py-3 text-left text-md font-semibold text-gray-800 uppercase">
                   Item Specification
                 </th>
                 <th className="px-6 py-3 text-left text-md font-semibold text-gray-800 uppercase">
                   1‑5KW
                 </th>
                 <th className="px-6 py-3 text-left text-md font-semibold text-gray-800 uppercase">
                   4‑6KW
                 </th>
                 <th className="px-6 py-3 text-left text-md font-semibold text-gray-800 uppercase">
                   6‑10KW
                 </th>
               </tr>
               <tr className="">
                 <td rowSpan={3} colSpan={2}>
                   SPD‑STEL/ Finder MCB‑C&S{" "}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">DCDB</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   DCDB witd 600V SPD, 500V MCB
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   1 Nos. (1 in 1 Out)
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   1 Nos. (2 in 2 Out)
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   1 Nos. (2 in 2 Out)
                 </td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   ACDB 1‑Ph.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   ACDB witd 1‑Ph. SPD & 1‑Ph. MCB
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Nos.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Nos.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   ACDB 3‑Ph.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   ACDB witd 3 ‑Ph SPD & 3‑Ph. MCB
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Nos.</td>
               </tr>

               <tr>
                 <td colSpan={2}>Polycab</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   Solar DC Wire
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   2.5 Sq.mm EN Standard
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   50 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   50 Mtr.
                 </td>
               </tr>
               <tr>
                 <td rowSpan={8}>Polycab</td>
                 <td rowSpan={8}>Polyguard Or Reputed (ISI)</td>
                 <td rowSpan={6}>AC Copper Flexible Wire</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   <span className="text-red-500 px-3">(Option 1)</span> 2.5
                   Sq.mm Red & Black Wire{" "}
                   <span className="text-red-500 px-3">Polycab</span>
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   <span className="text-red-500 px-3">(Option 1)</span>4 Sq.mm
                   Red & Black Wire{" "}
                   <span className="text-red-500 px-3">Polycab</span>
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   <span className="text-red-500 px-3">(Option 1)</span>
                   4C x 4 Sq.mm Cable{" "}
                   <span className="text-red-500 px-3">Polycab</span>
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25 Mtr.
                 </td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   <span className="text-red-500 px-3">(Option 2)</span> 2C x
                   2.5 Sq.mm Cable{" "}
                   <span className="text-red-500 px-3">Polyguard</span>
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   30 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   <span className="text-red-500 px-3">(Option 2)</span>
                   2C x 4 Sq.mm Cable{" "}
                   <span className="text-red-500 px-3">Polyguard</span>
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   30 Mtr.{" "}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   {" "}
                   <span className="text-red-500 px-3">(Option 2)</span>4C x 4
                   Sq.mm Cable{" "}
                   <span className="text-red-500 px-3">Polyguard</span>
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   30 Mtr.
                 </td>
               </tr>
               <tr>
                 <td rowSpan={2}>Eartding & LA Wire</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   4 Sq.mm Copper Wire
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   50 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   50 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   50 Mtr.
                 </td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   16 Sq.mm Aluminum Wire
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   34 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   34 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   34 Mtr.
                 </td>
               </tr>
               <tr>
                 <td rowSpan={3} colSpan={2}>
                   Samptel
                 </td>
                 <td rowSpan={3}>Eartding & LA</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   Copper Bonded Multi‑Spike LA 14mm x 1 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Nos.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Nos.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Nos.</td>
               </tr>
               <tr>
                 {/* <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
            <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
            <td className="px-6 py-4 whitespace-nowrap text-sm"></td> */}
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   Copper Bonded Multi‑Spike LA 14mm x 1 Mtr.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">3 Nos.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">3 Nos.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">3 Nos.</td>
               </tr>
               <tr>
                 {/* <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
            <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
            <td className="px-6 py-4 whitespace-nowrap text-sm"></td> */}
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   Eartding Compound 15Kg Bag
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Bag</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Bag</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Bag</td>
               </tr>
               <tr>
                 <td rowSpan={4} colSpan={2}>
                   Reputed
                 </td>
                 <td rowSpan={4}>PVC Conduit & Accessories</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25mm PVC Conduit LMS (Non‑ISI)
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   40 Nos.{" "}
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   40 Nos.{" "}
                 </td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25mm PVC Elbow/Bend
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   15/20 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   15/20 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   15/20 Nos.
                 </td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25mm PVC Tee
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   15 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   15 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   15 Nos.
                 </td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25mm Flexible Pipe
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">5 Mtr.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">5 Mtr.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">5 Mtr.</td>
               </tr>
               <tr>
                 <td rowSpan={2} colSpan={2}>
                   Reputed
                 </td>
                 <td rowSpan={2}>Clamp & Cable Tie</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25mm PVC Nail Sadle
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Pkt.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Pkt.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Pkt.</td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   300x4.8mm UV Cable Tie
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Pkt.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Pkt.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">1 Pkt.</td>
               </tr>
               <tr>
                 <td colSpan={2}>Ningbo Jinghua</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">MC 4</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   Solar MC 4 Connector (TUV)
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">2 Pair</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">4 Pair</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">4 Pair</td>
               </tr>
               <tr>
                 <td rowSpan={3} colSpan={2}>
                   Reputed
                 </td>
                 <td rowSpan={3}>Lugs</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   2.5/4 Sq.mm Plastic Lug
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   20 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   20 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   20 Nos.
                 </td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   4 Sq.mm Ring Copper Lug
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   10 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   10 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   10 Nos.
                 </td>
               </tr>
               <tr>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   16 Sq.mm Ring Alu. Lug
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">4 Nos.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">4 Nos.</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">4 Nos.</td>
               </tr>
               <tr>
                 <td colSpan={2}>Reputed</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">Screw</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   25x6mm Screw for Eartding Link, ACDB & DCDB
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   20 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   20 Nos.
                 </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                   20 Nos.
                 </td>
               </tr>
               <tr className="bg-green-50 border border-green-700">
                 <td rowSpan={2} colSpan={3} className=" ">
                   MRP
                 </td>
                 <td>
                   Option 1 <span className="text-red-500">( Polycab )</span>
                 </td>
                 <td className="text-orange-400 font-bold">10750 ₹</td>
                 <td className="text-orange-400 font-bold">15600 ₹</td>
                 <td className="text-orange-400 font-bold">17650 ₹</td>
               </tr>
               <tr className="bg-green-50 border border-green-700">
                 <td>
                   Option 2{" "}
                   <span className="text-green-600">( Polyguard )</span>
                 </td>
                 <td className="text-orange-400 font-bold">9400 ₹</td>
                 <td className="text-orange-400 font-bold">12625 ₹</td>
                 <td className="text-orange-400 font-bold">15500 ₹</td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>
     );
   };

export default BOSKitTable;
