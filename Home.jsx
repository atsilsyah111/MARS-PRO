import React from "react";
import logofix from "../assets/logofix.png";
import bg from "../assets/bg-1.png";
import { useState, useEffect } from "react";

const Home = () => {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3001/api/Register${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(data);
  const logout = () => {
    setData([]); // Membersihkan data pengguna dari state setelah logout
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/loginuser";
  };

  return (
    <div>
      <div
        className="px-[50px] py-[25px] font-bold bg-cover bg-center w-full h-screen"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="">
          <div className="flex justify-between items-center absolute gap-[55px]">
            <div>
              <a className="" href="/">
                <img className="w-[113px] h-[101px]" src={logofix} alt="" />
              </a>
            </div>
            <div>
              <ul className="flex justify-between gap-[50px] text-[20px] font-bold">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    <li>
                      <a className="" href="#services">
                        Layanan
                      </a>
                    </li>
                    <li>
                      <a className="" href="#ship">
                        Kedatangan & Keberangkatan
                      </a>
                    </li>
                    <li>
                      <a className="" href="#crew">
                         Sign-On & Sign-Off
                      </a>
                    </li>
                    <li>
                      <a className="" href="https://www.marinetraffic.com/en/ais/home/centerx:-53.4/centery:-56.9/zoom:2">
                        Marine Traffic 
                      </a>
                    </li>
                    <li className="flex gap-[5px]">
                      {data ? (
                        <>
                          <div>
                            <a href="/dashboard">Profil</a>
                          </div>
                          <div>|</div>
                          <div>
                            <a className="" href="" onClick={logout}>
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
          <div className="pt-[80px] px-[80px]">
            <div className="flex gap-[8px] text-[96px]">
              <div className="">COME TO</div>
              <div className="text-[#1A719C]">MARS</div>
            </div>
            <div className="text-[#1A719C] text-[20px]">
              MALACCA AND ANDAMAN INTEGRATED REGISTRATION ON
            </div>
            <div className="text-[#1A719C] text-[20px]">
            PRE SEACLEARANCE AND MARITIME CREW CHANGE 
            </div>
            <div className="text-[#1A719C] text-[20px]">
            INFORMATION SYSTEM (MARS)
            </div>
            <div className="text-[20px] pt-[20px] pr-[100px]">
              "Your gateway to seamless ship clearance
              and efficient crew changes."
              Integrated Between Three Immigration Office
            </div>
          </div>
        </div>
      </div>
      <div className="px-[100px] font-bold">
        <div id="services" className="pt-[100px]">
          <div className="flex gap-[8px] justify-center text-[48px]">
            <div className="">OUR</div>
            <div className="text-[#1A719C]">SERVICES</div>
          </div>
          <div className="flex justify-between text-center pt-[50px] gap-[80px]">
            {/* <div>
              <div className="text-[24px]">Clearance Ship</div>
              <div className="text-[#5C5C68] text-[14px]">
                Streamline your vessel clearance process with our efficient
                services
              </div>
            </div> */}
            <div>
              <div className="text-[24px]">Clearance</div>
              <div className="text-[#5C5C68] text-[14px]">
                Pelayanan Keimigrasian Dalam Pemeriksaan Dokumen Awak 
                Kapal
              </div>
            </div>
            <div>
              <div className="text-[24px]">Crew Change</div>
              <div className="text-[#5C5C68] text-[14px]">
                Pelayanan Keimigrasian Dalam Pertukaran Kru
                Kapal
              </div>
            </div>
          </div>
        </div>
        <div id="ship" className="py-[150px]">
          <div className="flex gap-[8px] justify-center text-[48px]">
            <div className="">Keberangkatan</div>
            <div className="text-[#1A719C]">dan Kedatangan Kapal</div>
          </div>
          <div className="text-[#5C5C68] text-[16px] text-center px-[200px] py-[20px]">
          Mengelola kedatangan dan keberangkatan kapal secara efisien dengan formulir pengiriman data kami yang efisien
          </div>
          <div className="flex justify-center">
            <a href="/arrival">
              <button
                type="submit"
                className="w-[175px] h-[50px] bg-[#1A719C] rounded-[20px] text-white "
              >
                Isi Data Form Kapal
              </button>
            </a>
          </div>
        </div>
        <div id="crew" className="">
          <div className="flex gap-[8px] justify-center text-[48px]">
            <div className="">Crew</div>
            <div className="text-[#1A719C]">Sign-On & Sign-Off</div>
          </div>
          <div className="text-[#5C5C68] text-[16px] text-center px-[200px] py-[20px]">
          Menyederhanakan manajemen kru dengan formulir kami yang mudah digunakan untuk proses masuk dan keluar yang lancar
          </div>
          <div className="flex justify-center">
            <a href="/sign-on">
              <button
                type="submit"
                className="w-[190px] h-[50px] bg-[#1A719C] rounded-[20px] text-white "
              >
                Isi Data Form Kru
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-[200px]">
        <div className="footer h-[100px] bg-[#1A719C] flex justify-center place-items-center font-bold text-[20px] text-white">
          Integrated of Banda Aceh, Lhokseumawe, and Sabang Immigration System
        </div>
      </div>
    </div>
  );
};

export default Home;
