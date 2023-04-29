import Logo from "../assets/logo.png";
import './List.css'
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
// import { Grid, Image } from "@chakra-ui/react";
// import Card from "./Card";
// import { Link } from "react-router-dom";


function List() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const menus = ['Home', 'List UMKM', 'Gallery UMKM', 'Contact'];
  const profmenus = ['Account', 'Log Out'];

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setOpenProfile(false);
    }
  };

  const [data, setData] = useState(null)
//   const [load, setLoad] = useState(true)

  useEffect(() => {
    // setLoad(true)
  fetch('http://34.101.113.12/api/umkm')
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        // setLoad(false);
      })
  },[]);

//   if (load) {
//     return <h1>Loading...</h1>
//   }
console.log(data)

  return (
    <>
    <div className='header'>
      <div className='container'>
        <div className="imgs">
          <div className="container-image">
            <img src={Logo} alt="logo" className="logo"/>
          </div>
        </div>
        <ul className='nav-menu ml-auto cursor-pointer'>
          <li>
            <div className="relative left-56" ref={menuRef}>
              <h1 className='dash' href='/' onClick={() => setOpenMenu(!openMenu)}>Menu</h1>
              {openMenu && (
                <div className="bg-slate-300 opacity-50 m-3 p-4 w-64 shadow-lg absolute text-center -left-32 top-16 rounded-lg">
                  <ul>
                    {menus.map((menu) => (
                      <li className="font-bold p-2 text-lg cursor-pointer rounded hover:bg-blue-700" key={menu}>
                        {menu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className="relative left-48" ref={profileRef}>
              <FaUserCircle  size='3rem' color='gray' onClick={() => setOpenProfile(!openProfile)}/>
              {openProfile && (
                <div className="bg-slate-300 opacity-50 m-3 p-4 w-46 shadow-lg absolute text-center -left-20 top-16 rounded-lg">
                  <ul>
                    {profmenus.map((menu) => (
                      <li className="font-bold p-2 text-lg cursor-pointer rounded hover:bg-blue-700" key={menu}>
                        {menu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="wrapper">
        <div className="search">
            <input type="text" placeholder="Search"/>
            <FaSearch className="cursor-pointer"/>
        </div>
    </div>
    <div className="textumkm">
        <h1>UMKM Membangun Negeri</h1>
        <p className='info-text'>UMKM atau Usaha Mikro Kecil Menengah adalah jenis usaha yang memiliki skala <br/> kecil dengan jumlah aset terbatas dan jumlah karyawan yang juga terbatas.</p>
    </div>
    </>
  );
}

export default List;