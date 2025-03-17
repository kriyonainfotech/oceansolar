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

const BOSKitTable = () => {
  return (
    <div className="p-6  min-h-screen">
      <table
        border={1}
        className="min-w-full border-collapse border border-gray-800"
      >
        <thead>
          <tr className="bg-cyan-900 text-white">
            <th colSpan="4">Bills of Material</th>
            <th colSpan="3">Item Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Item Description</th>
            <th>Item Specification</th>
            <th>1‑5KW</th>
            <th>4‑6KW</th>
            <th>6‑10KW</th>
          </tr>
          <tr className="">
            <th rowSpan={3} colSpan={2}>
              SPD‑STEL/ Finder MCB‑C&S{" "}
            </th>
            <th>DCDB</th>
            <th>DCDB with 600V SPD, 500V MCB</th>
            <th>1 Nos. (1 in 1 Out)</th>
            <th>1 Nos. (2 in 2 Out)</th>
            <th>1 Nos. (2 in 2 Out)</th>
          </tr>
          <tr>
            <th>ACDB 1‑Ph.</th>
            <th>ACDB with 1‑Ph. SPD & 1‑Ph. MCB</th>
            <th>1 Nos.</th>
            <th>1 Nos.</th>
            <th>-</th>
          </tr>
          <tr>
            <th>ACDB 3‑Ph.</th>
            <th>ACDB with 3 ‑Ph SPD & 3‑Ph. MCB</th>
            <th>-</th>
            <th>-</th>
            <th>1 Nos.</th>
          </tr>

          <tr>
            <th colSpan={2}>Polycab</th>
            <th>Solar DC Wire</th>
            <th>2.5 Sq.mm EN Standard</th>
            <th>25 Mtr.</th>
            <th>50 Mtr.</th>
            <th>50 Mtr.</th>
          </tr>
          <tr>
            <th rowSpan={8}>Polycab</th>
            <th rowSpan={8}>Polyguard Or Reputed (ISI)</th>
            <th rowSpan={6}>AC Copper Flexible Wire</th>
            <th>
              <span className="text-red-500 px-3">(Option 1)</span> 2.5 Sq.mm
              Red & Black Wire{" "}
              <span className="text-red-500 px-3">Polycab</span>
            </th>
            <th>25 Mtr.</th>
            <th>-</th>
            <th>-</th>
          </tr>
          <tr>
            <th>
              <span className="text-red-500 px-3">(Option 1)</span>4 Sq.mm Red &
              Black Wire <span className="text-red-500 px-3">Polycab</span>
            </th>
            <th>-</th>
            <th>25 Mtr.</th>
            <th>-</th>
          </tr>
          <tr>
            <th>
              <span className="text-red-500 px-3">(Option 1)</span>
              4C x 4 Sq.mm Cable{" "}
              <span className="text-red-500 px-3">Polycab</span>
            </th>
            <th>-</th>
            <th>-</th>
            <th>25 Mtr.</th>
          </tr>
          <tr>
            <th>
              <span className="text-red-500 px-3">(Option 2)</span> 2C x 2.5
              Sq.mm Cable <span className="text-red-500 px-3">Polyguard</span>
            </th>
            <th>30 Mtr.</th>
            <th>-</th>
            <th>-</th>
          </tr>
          <tr>
            <th>
              <span className="text-red-500 px-3">(Option 2)</span>
              2C x 4 Sq.mm Cable{" "}
              <span className="text-red-500 px-3">Polyguard</span>
            </th>
            <th>-</th>
            <th>30 Mtr. </th>
            <th>-</th>
          </tr>
          <tr>
            <th>
              {" "}
              <span className="text-red-500 px-3">(Option 2)</span>4C x 4 Sq.mm
              Cable <span className="text-red-500 px-3">Polyguard</span>
            </th>
            <th>-</th>
            <th>-</th>
            <th>30 Mtr.</th>
          </tr>
          <tr>
            <th rowSpan={2}>Earthing & LA Wire</th>
            <th>4 Sq.mm Copper Wire</th>
            <th>50 Mtr.</th>
            <th>50 Mtr.</th>
            <th>50 Mtr.</th>
          </tr>
          <tr>
            <th>16 Sq.mm Aluminum Wire</th>
            <th>34 Mtr.</th>
            <th>34 Mtr.</th>
            <th>34 Mtr.</th>
          </tr>
          <tr>
            <th rowSpan={3} colSpan={2}>
              Samptel
            </th>
            <th rowSpan={3}>Earthing & LA</th>
            <th>Copper Bonded Multi‑Spike LA 14mm x 1 Mtr.</th>
            <th>1 Nos.</th>
            <th>1 Nos.</th>
            <th>1 Nos.</th>
          </tr>
          <tr>
            {/* <th></th>
            <th></th>
            <th></th> */}
            <th>Copper Bonded Multi‑Spike LA 14mm x 1 Mtr.</th>
            <th>3 Nos.</th>
            <th>3 Nos.</th>
            <th>3 Nos.</th>
          </tr>
          <tr>
            {/* <th></th>
            <th></th>
            <th></th> */}
            <th>Earthing Compound 15Kg Bag</th>
            <th>1 Bag</th>
            <th>1 Bag</th>
            <th>1 Bag</th>
          </tr>
          <tr>
            <th rowSpan={4} colSpan={2}>
              Reputed
            </th>
            <th rowSpan={4}>PVC Conduit & Accessories</th>
            <th>25mm PVC Conduit LMS (Non‑ISI)</th>
            <th>25 Nos.</th>
            <th>40 Nos. </th>
            <th>40 Nos. </th>
          </tr>
          <tr>
            <th>25mm PVC Elbow/Bend</th>
            <th>15/20 Nos.</th>
            <th>15/20 Nos.</th>
            <th>15/20 Nos.</th>
          </tr>
          <tr>
            <th>25mm PVC Tee</th>
            <th>15 Nos.</th>
            <th>15 Nos.</th>
            <th>15 Nos.</th>
          </tr>
          <tr>
            <th>25mm Flexible Pipe</th>
            <th>5 Mtr.</th>
            <th>5 Mtr.</th>
            <th>5 Mtr.</th>
          </tr>
          <tr>
            <th rowSpan={2} colSpan={2}>
              Reputed
            </th>
            <th rowSpan={2}>Clamp & Cable Tie</th>
            <th>25mm PVC Nail Sadle</th>
            <th>1 Pkt.</th>
            <th>1 Pkt.</th>
            <th>1 Pkt.</th>
          </tr>
          <tr>
            <th>300x4.8mm UV Cable Tie</th>
            <th>1 Pkt.</th>
            <th>1 Pkt.</th>
            <th>1 Pkt.</th>
          </tr>
          <tr>
            <th colSpan={2}>Ningbo Jinghua</th>
            <th>MC 4</th>
            <th>Solar MC 4 Connector (TUV)</th>
            <th>2 Pair</th>
            <th>4 Pair</th>
            <th>4 Pair</th>
          </tr>
          <tr>
            <th rowSpan={3} colSpan={2}>
              Reputed
            </th>
            <th rowSpan={3}>Lugs</th>
            <th>2.5/4 Sq.mm Plastic Lug</th>
            <th>20 Nos.</th>
            <th>20 Nos.</th>
            <th>20 Nos.</th>
          </tr>
          <tr>
            <th>4 Sq.mm Ring Copper Lug</th>
            <th>10 Nos.</th>
            <th>10 Nos.</th>
            <th>10 Nos.</th>
          </tr>
          <tr>
            <th>16 Sq.mm Ring Alu. Lug</th>
            <th>4 Nos.</th>
            <th>4 Nos.</th>
            <th>4 Nos.</th>
          </tr>
          <tr>
            <th colSpan={2}>Reputed</th>
            <th>Screw</th>
            <th>25x6mm Screw for Earthing Link, ACDB & DCDB</th>
            <th>20 Nos.</th>
            <th>20 Nos.</th>
            <th>20 Nos.</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BOSKitTable;
