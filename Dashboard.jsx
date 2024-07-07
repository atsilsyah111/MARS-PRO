import React, { useState, useEffect } from "react";
import logofix from "../assets/logofix.png";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    setLoading(true);
    localStorage.getItem(username);
    fetch(`http://localhost:3001/api/Register/${localStorage.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Logging the fetched data
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); // Ensure error is logged
        setLoading(false);
      });
  }, [username]);
  console.log(data);
  const logout = () => {
    setData([]); // Membersihkan data pengguna dari state setelah logout
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/loginuser";
  };

  return (
    <div>
      <div className="px-[50px] py-[50px] font-bold">
        <div className="flex justify-between items-center absolute gap-[55px]">
          <div>
            <a className="" href="/">
              <img className="w-[113px] h-[101px]" src={logofix} alt="" />
            </a>
          </div>
          <div>
            <ul className="flex justify-between gap-[70px] text-[24px] font-bold">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  <li>
                    <a className="" href="/">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a className="" href="/">
                      Ship Arrival & Departure
                    </a>
                  </li>
                  <li>
                    <a className="" href="/">
                      Crew Sign-On & Sign-Off
                    </a>
                  </li>
                  <li className="flex gap-[5px]">
                    {data ? (
                      <>
                        <div>
                          <a className="" onClick={logout}>
                            Logout
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <a className="" href="/loginuser">
                          Login
                        </a>
                        <a className="" href="">
                          |
                        </a>
                        <a className="" href="/signup">
                          SignUp
                        </a>
                      </>
                    )}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="px-[100px]">
          <div className="profil pt-[150px]">
            <div className="flex gap-[8px] justify-center text-[48px]">
              <div className="text-[#1A719C]">PROFILE</div>
              <div className="">AGENT</div>
            </div>
            <div className="flex flex-col pt-[30px]">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    {loading ? (
                      <div>Loading...</div>
                    ) : Array.isArray(data) ? (
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr className="bg-[#83B3CA]">
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                            >
                              Nama
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                            >
                              ID Agen Kapal
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                            >
                              Nama Perusahaan
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                            >
                              Nomor Handphone
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                            >
                              Alamat Perusahaan
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {data.map((e) => (
                            <tr
                              key={e.username}
                              className="px-6 py-3 text-left text-xs font-medium text-black tracking-wider"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                {e.username}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {e.id_agen_kapal}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {e.nama_perusahaan}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {e.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {e.no_hp_agen}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {e.alamat_perusahaan}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div>
                        Data tidak ditemukan atau format data tidak sesuai.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[200px]">
        <div className="footer h-[100px] bg-[#1A719C] flex justify-center place-items-center font-bold text-[20px] text-white">
          Integrated of Banda Aceh, Sabang, and Lhokseumawe Information System
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
