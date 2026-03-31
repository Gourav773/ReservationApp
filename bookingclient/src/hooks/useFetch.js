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
//             const res = await axios.get(url);
//             setData(res.data)
//         } catch (err) {
//             setError(err)
//         }
//         setLoading(false)
       
//     }
  

//     return { data , loading , error , reFetch}
// }

// export default useFetch;

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
//             const res = await axios.get(url);
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

  const fetchData = async () => {
    setLoading(true);
    setError(null); // ✅ reset error

    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const reFetch = () => {
    fetchData();
  };

  return { data, loading, error, reFetch };
};

export default useFetch;