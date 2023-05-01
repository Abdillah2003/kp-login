import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Logo from '../assets/logo.png'
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useRef } from "react";
import './navbar.css'

const Add = () => {
  const [nama_umkm, setNamaUmkm] = useState("");
  const [id_user, setIdUser] = useState("");
  const [profil_url, setProfilUrl] = useState("");
  const [gambar_umkm, setGambarUmkm] = useState("");
  const [detail_umkm, setDetailUmkm] = useState("");
  const [alamat_umkm, setAlamatUmkm] = useState("");
  const [motto_umkm, setMottoUmkm] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [access_token, setToken] =  useState([]);

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

  useEffect(() => {
    const access_token = localStorage.getItem('token');
    setToken(access_token);
    // console.log(`token : ${token}`)
  }, [access_token]);
  // console.log("aces token " + access_token)

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = { 
      nama_umkm: `${nama_umkm}`,
      id_user: `${id_user}`,
      profil_url: `${profil_url}`,
      gambar_umkm: `${gambar_umkm}`,
      detail_umkm:`${detail_umkm}`,
      alamat_umkm:`${alamat_umkm}`,
      motto_umkm: `${motto_umkm}`,
    };
    
    try {
      const response = await fetch("http://34.101.113.12/api/umkm", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
     console.log(JSON.stringify(data))
      const responseData = await response.json();
      
      console.log(response.body.data)
      
      if (response.ok) {
        localStorage.setItem('token', access_token);
        alert('Data added successfully');
        localStorage.setItem('token',access_token);
        navigate("/list")
        
      } else {
        setError(
          alert(responseData.message || 'Failed to add data')
        );
      
      }
    } catch (error) {
      console.log(error);
      setError(
        alert('Error adding data')
      );
      
    }
   
  };


    return(
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
          <div className="container">
            {error && <div className="error-msg">{error}</div>}
            <h1 class="mt-10 shadow-black m-4 w-full text-center text-3xl font-serif border-b-4 border-black">FORM UPLOAD DATA UMKM</h1>
            <br></br>
            <form className="add-form" class="mt-5" onSubmit={handleSubmit}>
            <label>
                <input
                type="text" id="nama_umkm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2 m-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nama UMKM"
                value={nama_umkm}
                onChange={(e) => setNamaUmkm(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="id_user" class="m-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Id User"
                value={id_user}
                onChange={(e) => setIdUser(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="profil_url" class="m-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-12 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Profil URL"
                value={profil_url}
                onChange={(e) => setProfilUrl(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="gambar_umkm" class="m-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-12 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Gambar UMKM"
                value={gambar_umkm}
                onChange={(e) => setGambarUmkm(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="detail_umkm" class="m-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-12 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Detail UMKM"
                value={detail_umkm}
                onChange={(e) => setDetailUmkm(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="alamat_umkm" class="m-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-12 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Alamat UMKM"
                value={alamat_umkm}
                onChange={(e) => setAlamatUmkm(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="motto-umkm" class="m-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-12 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Motto UMKM"
                value={motto_umkm}
                onChange={(e) => setMottoUmkm(e.target.value)}
                />
            </label>
            <input className="submit-btn" type="submit" value="Submit" data-testid="submit" class="bg-blue-700 rounded-lg mt-5 h-12 w-24 left-20 m-4"/>
            <input className="cancle-btn" type="Cancel" value="Cancel" data-testid="Cancel" class="bg-red-700 rounded-lg mt-5 h-12 w-24 left-20 text-center" />
            </form>
        </div>
        </>
  );
}

export default Add