import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [nama_umkm, setNamaUmkm] = useState("");
  const [id_user, setIdUser] = useState("");
  const [profil_url, setProfilUrl] = useState("");
  const [gambar_umkm, setGambarUmkm] = useState("");
  const [detail_umkm, setDetailUmkm] = useState("");
  const [alamat_umkm, setAlamatUmkm] = useState("");
  const [motto_umkm, setMottoUmkm] = useState("");
  const [token, setToken] = useState(localStorage.getItem(""));
  const navigate = useNavigate();
  const [status, setStatus] = useState('')
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { 
      nama_umkm: nama_umkm,
      id_user: id_user,
      profil_url: profil_url,
      gambar_umkm: gambar_umkm,
      detail_umkm: detail_umkm,
      alamat_umkm: alamat_umkm,
      motto_umkm: motto_umkm,
    };
    
    const response = await fetch("http://34.101.113.12/api/umkm", {
      method: 'POST', 
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data) 
    })
    
    if(response.ok) {
      setStatus(
        alert('Data added successfully')
      );
      navigate("/home")
    }else {
      setStatus(
        alert('Failed to add data')
      );
    }
  };

    return(
        <>
            <div className="container">
            {error && <div className="error-msg">{error}</div>}
            <h1>FORM UPLOAD DATA UMKM</h1>
            <form className="add-form"  onSubmit={handleSubmit}>
            <label>
                <input
                type="text" id="nama_umkm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nama UMKM"
                value={nama_umkm}
                onChange={(e) => setNamaUmkm(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="id_user" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Id User"
                value={id_user}
                onChange={(e) => setIdUser(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="profil_url" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Profil URL"
                value={profil_url}
                onChange={(e) => setProfilUrl(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="gambar_umkm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Gambar UMKM"
                value={gambar_umkm}
                onChange={(e) => setGambarUmkm(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="detail_umkm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Detail UMKM"
                value={detail_umkm}
                onChange={(e) => setDetailUmkm(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="alamat_umkm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Alamat UMKM"
                value={alamat_umkm}
                onChange={(e) => setAlamatUmkm(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text" id="motto-umkm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Motto UMKM"
                value={motto_umkm}
                onChange={(e) => setMottoUmkm(e.target.value)}
                />
            </label>
            <input className="submit-btn" type="submit" value="Submit" data-testid="submit" class="bg-blue-700 rounded-lg mt-5 h-12 w-24 left-20"/>
            <input className="cancle-btn" type="Cancel" value="Cancel" data-testid="Cancel" class="bg-red-700 rounded-lg mt-5 h-12 w-24 left-20 text-center" />
            </form>
        </div>
        </>
  );
}

export default Add