// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import PropTypes from "prop-types";

// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import useFetch from "../../hooks/useFetch";
// import axios from "axios";

// const Datatable = ({ columns }) => {
//   const location = useLocation();
//   const path = location.pathname.split("/")[1];

// const { data, loading, error } = useFetch(
//   path === "users"
//     ? `http://localhost:8000/auth/${path}`
//     : `http://localhost:8000/auth/allhotels`
// );

//   const [list, setList] = useState([]);
//     const [deleteOpen, setDeleteOpen] = useState(false);
//   const [selectedId, setSelectedId] = useState(null);

//   useEffect(() => {
//     setList(data);
//   }, [data]);

  
//   // ✅ Final delete function
//   const confirmDelete = async () => {
//     try {
//      await axios.delete(
//   path === "users"
//     ? `http://localhost:8000/auth/${path}/${selectedId}`
//     : `http://localhost:8000/auth/hotels/${selectedId}`
// );

//       setList(list.filter((item) => item._id !== selectedId));
//       setDeleteOpen(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };


//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => (
//          <div className="cellAction">

//           {/* ✅ VIEW */}
//           <Link to={`/${path}/${params.row._id}`}>
//             <div className="viewButton">View</div>
//           </Link>

//           {/* ✅ DELETE (Open Modal) */}
//           <div
//             className="deleteButton"
//             onClick={() => {
//               setSelectedId(params.row._id);
//               setDeleteOpen(true);
//             }}
//           >
//             Delete
//           </div>

//         </div>
//       ),
//     },
//   ];

//   // ✅ FIX: use loading & error
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error loading data</div>;

//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//        Add New {path}
//         <Link to={`/${path}/new`} className="link">
//           Add New
//         </Link>
//       </div>

//       {/* ✅ FIX: use list instead of data */}
//       <DataGrid
//         className="datagrid"
//         rows={list}
//         columns={columns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//         getRowId={(row) => row._id}
//       />
//       {/* 🔥 DELETE CONFIRMATION MODAL */}
//       {deleteOpen && (
//         <div className="modal">
//           <div className="modalContent">
//             <h3>Are you sure?</h3>
//             <p>This action cannot be undone.</p>

//             <div className="modalButtons">
//               <button onClick={() => setDeleteOpen(false)}>
//                 Cancel
//               </button>

//               <button className="confirmDelete" onClick={confirmDelete}>
//                 Yes Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // ✅ FIX: PropTypes added
// Datatable.propTypes = {
//   columns: PropTypes.array.isRequired,
// };

// export default Datatable;

import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const  Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  // 🔥 Dynamic API (users + hotels)
 const { data, loading, error, reFetch } = useFetch(
  path === "users"
    ? "http://localhost:8000/auth/users"
    : path === "hotels"
    ? "http://localhost:8000/auth/allhotels"
    : path === "rooms"
    ? "http://localhost:8000/auth/rooms" // 🔥 ADD THIS
    : ""
);

  const [list, setList] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // 🔥 Sync data
  useEffect(() => {
    setList(data);
  }, [data]);

  // 🔥 DELETE FUNCTION
  const confirmDelete = async () => {
    try {
      await axios.delete(
  path === "users"
    ? `http://localhost:8000/auth/users/${selectedId}`
    : path === "hotels"
    ? `http://localhost:8000/auth/hotels/${selectedId}`
    : path === "rooms"
    ? `http://localhost:8000/auth/deleteroom/${selectedId}` // 🔥 ADD
    : ""
);

      // 🔥 Better: refetch instead of filter
      reFetch();

      setDeleteOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 ACTION COLUMN
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="cellAction">
          {/* ✅ VIEW */}
          <Link to={`/${path}/${params.row._id}`}>
            <div className="viewButton">View</div>
          </Link>

          {/* ✅ DELETE */}
          <div
            className="deleteButton"
            onClick={() => {
              setSelectedId(params.row._id);
              setDeleteOpen(true);
            }}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];

  // 🔥 LOADING / ERROR
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>

      {/* 🔥 TABLE */}
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id} // 🔥 IMPORTANT
      />

      {/* 🔥 DELETE MODAL */}
      {deleteOpen && (
        <div className="modal">
          <div className="modalContent">
            <h3>Are you sure?</h3>
            <p>This action cannot be undone.</p>

            <div className="modalButtons">
              <button onClick={() => setDeleteOpen(false)}>
                Cancel
              </button>

              <button className="confirmDelete" onClick={confirmDelete}>
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ✅ PropTypes
Datatable.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default Datatable;