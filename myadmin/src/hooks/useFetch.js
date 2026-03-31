// import {useState , useEffect} from "react";
// import axios from 'axios';


// const useFetch = (url) =>{
//     const [data,setData] = useState([]);
//     const [loading , setLoading] = useState(false)
//     const [error , setError] = useState(false);

//     useEffect(()=>{
//         const fetchData = async ()=>{
//             setLoading(true);
//             try {
//                 const res = await axios.get(url);
//                 setData(res.data)
//             } catch (err) {
//                 setError(err)
//             }
//             setLoading(false)
           
//         }
//         fetchData()

//     },[url])


//     const reFetch = async () => {
//         setLoading(true);
//         try {
//             const res = await axios.get("http://localhost:8000/auth/users/:id");
//             setData(res.data)
//         } catch (err) {
//             setError(err)
//         }
//         setLoading(false)
       
//     }
  

//     return { data , loading , error , reFetch}
// }

// export default useFetch;

import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔥 MAIN FETCH
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  };

  // 🔥 AUTO CALL (page load / url change)
  useEffect(() => {
    if (url) fetchData();
  }, [url]);

  // 🔥 MANUAL REFETCH (important)
  const reFetch = async () => {
    fetchData();
  };

  return { data, loading, error, reFetch };
};

export default useFetch;