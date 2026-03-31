// export const userColumns = [
//   { field: "_id", headerName: "ID", width: 70 },
//   {
//     field: "user",
//     headerName: "User",
//     width: 230,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img className="cellImg" src={params.row.img} alt="avatar" />
//           {params.row.username}
//         </div>
//       );
//     },
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     width: 230,
//   },

//   {
//     field: "phone",
//     headerName: "Phone",
//     width: 100,
//   },

//   {
//     field: "city",
//     headerName: "City",
//     width: 100,
//   },
//   {
//     field: "country",
//     headerName: "Country",
//     width: 100,
//   },
//   {
    
//     renderCell: (params) => {
//       return (
//         <div className={`cellWithStatus ${params.row.status}`}>
//           {params.row.status}
//         </div>
//       );
//     },
//   },
// ];
// export const hotelColumns = [
//   { field: "id", headerName: "ID", width: 70 },
//   {
//     field: "name",
//     headerName: "Name",
//     width: 230,
    
//   },
//   {
//     field: "type",
//     headerName: "type",
//     width: 230,
//   },

//   {
//     field: "title",
//     headerName: "title",
//     width: 100,
//   },
//   {
//     field: "city",
//     headerName: "city",
//     width: 100,
//   },
//   {
    
//     renderCell: (params) => {
//       return (
//         <div className={`cellWithStatus ${params.row.status}`}>
//           {params.row.status}
//         </div>
//       );
//     },
//   },
// ];
// export const roomColumns = [
//   { field: "id", headerName: "ID", width: 70 },
//   {
//     field: "title",
//     headerName: "Title",
//     width: 230,
    
//   },
//   {
//     field: "desc",
//     headerName: "description",
//     width: 230,
//   },

//   {
//     field: "price",
//     headerName: "price",
//     width: 100,
//   },
//   {
//     field: "maxPeople",
//     headerName: "Capacity/person",
//     width: 100,
//   },
//   {
    
//     renderCell: (params) => {
//       return (
//         <div className={`cellWithStatus ${params.row.status}`}>
//           {params.row.status}
//         </div>
//       );
//     },
//   },
// ];


// ================= USER TABLE =================
export const userColumns = [
  { field: "_id", headerName: "ID", width: 90 },

  {
    field: "user",
    headerName: "User",
    width: 220,
    renderCell: (params) => (
      <div className="cellWithImg">
        <img
          className="cellImg"
          src={params.row.img || "https://via.placeholder.com/40"}
          alt=""
        />
        {params.row.username}
      </div>
    ),
  },

  { field: "email", headerName: "Email", width: 220 },
  { field: "phone", headerName: "Phone", width: 120 },
  { field: "city", headerName: "City", width: 120 },
  { field: "country", headerName: "Country", width: 120 },
];


// ================= HOTEL TABLE =================
export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 180 }, // 🔥 FIX

  {
    field: "name",
    headerName: "Hotel Name",
    width: 200,
  },

  {
    field: "type",
    headerName: "Type",
    width: 120,
  },

  {
    field: "city",
    headerName: "City",
    width: 120,
  },

  {
    field: "cheapestprice",
    headerName: "Price",
    width: 120,
  },

  {
    field: "title",
    headerName: "Title",
    width: 200,
  },
];


// ================= ROOM TABLE =================
export const roomColumns = [
  { field: "_id", headerName: "ID", width: 180 },

  {
    field: "title",
    headerName: "Title",
    width: 200,
  },

  {
    field: "desc",
    headerName: "Description",
    width: 250,
  },

  {
    field: "price",
    headerName: "Price (₹)",
    width: 120,
  },

  {
    field: "maxPeople",
    headerName: "Capacity",
    width: 120,
  },

  {
    field: "roomNumbers",
    headerName: "Rooms",
    width: 200,
    renderCell: (params) => {
      return params.row.roomNumbers
        ?.map((r) => r.number)
        .join(", ");
    },
  },
];