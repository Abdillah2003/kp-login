import { useState, useEffect } from "react";
import './List.css'
import { FaUserCircle, FaSearch } from "react-icons/fa";
import Logo from '../assets/logo.png'
import { message } from "antd";

const List = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [access_token, setToken] = useState('');

  useEffect(() => {
    const access_token = localStorage.getItem('token');
    setToken(access_token);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("http://34.101.113.12/api/umkm",{
      method: "GET",
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
    })
      .then(response =>{
        response.json()
        console.log(response.data)
      } )
      .then(data => {
        setData(data);
        setLoading(false);
       
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });   
  }, [access_token]);

  console.log(data)
  console.log(access_token)
  
  
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && Array.isArray(data) && data.map((hasil => {
        return <div key={hasil.id}>{hasil.nama_umkm}</div>
      }))}
      {!loading && !Array.isArray(data) && <p>Data is not an array</p>}
    </>
  );
  
}

export default List;
