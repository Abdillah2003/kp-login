import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditUmkm = () => {
    const [nama_umkm, setNamaUmkm] = useState('')
    const [profil_url, setProfilUrl] = useState('')
    const [gambar_umkm, setGambarUmkm] = useState('')
    const [detail_umkm, setDetailUmkm] = useState('')
    const [alamat_umkm, setAlamatUmkm] = useState('')
    const [motto_umkm, setMottoUmkm]  = useState('')
    // const [useNavigate] = useNavigate();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id_user} = useParams()

    const EditUmkm = (e) => {
        e.preventDevault();
        let data ={
            nama_umkm: `${nama_umkm}`,
            profil_url: `${profil_url}`,
            gambar_umkm: `${gambar_umkm}`,
            detail_umkm: `${detail_umkm}`,
            alamat_umkm: `${alamat_umkm}`,
            motto_umkm: `${motto_umkm}`,
            updated_at: new Date()
        }
        console.log(JSON.stringify(data))
        fetch(`http://34.101.113.12/api/umkm${id_user}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        }, 
        body: JSON.stringify(data)
    })
    .then(hasil => hasil.json())
    .then(hasilAkhir => {
        alert("foto berhasil di edit")
        Navigate("/home")
    })

    };
    useEffect(() => {
        setLoading(true);
        fetch(`http://34.101.113.12/api/umkm${id_user}`)
        .then(hasil => hasil.json())
        .then(hasilAkhir => {
          setNamaUmkm(hasilAkhir.nama_umkm)
          setProfilUrl(hasilAkhir.profil_url)
          setGambarUmkm(hasilAkhir.gambar_umkm)
          setDetailUmkm(hasilAkhir.detail_umkm)
          setAlamatUmkm(hasilAkhir.alamat_umkm)
          setMottoUmkm(hasilAkhir.motto_umkm)
        })
        setLoading(false)
      }, [id_user]);

    return(
        <>
            <div className="container">
            {error && <div className="error-msg">{error}</div>}
            <h1 class="border-b-2">FORM EDIT DATA UMKM</h1>
            <form className="add-form"  onSubmit={EditUmkm}>
            <label>
                <input
                type="text" id="nama_umkm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nama UMKM"
                value={nama_umkm}
                onChange={(e) => setNamaUmkm(e.target.value)}
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
            <input className="submit-btn" type="submit" value="Submit" data-testid="submit" />
            <input className="cancle-btn" type="Cancel" value="Cancel" data-testid="Cancel" class="bg-red-700" />
            </form>
        </div>
        </>
  );
}

export default EditUmkm