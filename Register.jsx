import React, { useState } from "react";
import logofix from "../assets/logofix.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id_agen_kapal, setIdAgenKapal] = useState("");
  const [nama_perusahaan, setNamaPerusahaan] = useState("");
  const [email, setEmail] = useState("");
  const [no_hp_agen, setNoHpAgen] = useState("");
  const [alamat_perusahaan, setAlamatPerusahaan] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/createRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        id_agen_kapal,
        nama_perusahaan,
        email,
        no_hp_agen,
        alamat_perusahaan,
      }),
    });
    if (response.ok) {
      alert("berhasil");
    } else {
      alert("failed");
    }
  };
  return (
    <div>
      <div className="px-[50px] py-[50px]">
        <div className="flex justify-between items-center absolute gap-[100px]">
          <div>
            <a className="" href="">
              <img className="w-[113px] h-[101px]" src={logofix} alt="" />
            </a>
          </div>
          <div>
            <ul className="flex justify-between gap-[185px] text-[24px] font-bold">
              <li>
                <a className="" href="/loginuser">
                  Login as User
                </a>
              </li>
              <li>
                <a className="" href="/loginadmin">
                  Login as Admin
                </a>
              </li>
              <li>
                <a className="text-[#1A719C]" href="/register">
                  Register as User
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="px-[200px] ">
            <div className="">
              <div className="flex justify-center text-[36px] font-bold pt-[166px]">
                <div>Create Your Account</div>
              </div>
              <div className="flex justify-center">
                <div>Welcome! Please fill the form to registered</div>
              </div>
            </div>
            <div className="pt-[34px]">
              <div className="flex font-bold text-left text-[20px]">
                <form
                  className="flex justify-between gap-[54px]"
                  onSubmit={handleRegister}
                >
                  <div className="grid gap-[3px]">
                    <div>
                      <div>Username</div>
                      <div className="pt-[11px]">
                        <input
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[515px] h-[65px] rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div>
                      <div>Password</div>
                      <div className="pt-[11px]">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[515px] h-[65px] rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div>
                      <div>Id Agen Kapal</div>
                      <div className="pt-[11px]">
                        <input
                          type="text"
                          value={id_agen_kapal}
                          onChange={(e) => setIdAgenKapal(e.target.value)}
                          placeholder="Id Agen Kapal"
                          className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[515px] h-[65px] rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div>
                      <div>Nama Perusahaan</div>
                      <div className="pt-[11px]">
                        <input
                          type="text"
                          value={nama_perusahaan}
                          onChange={(e) => setNamaPerusahaan(e.target.value)}
                          placeholder="Nama Perusahaan"
                          className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[515px] h-[65px] rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div>
                      <div>Email</div>
                      <div className="pt-[11px]">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[515px] h-[65px] rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div>
                      <div>Nomor Handphone Agen</div>
                      <div className="pt-[11px]">
                        <input
                          type="text"
                          value={no_hp_agen}
                          onChange={(e) => setNoHpAgen(e.target.value)}
                          placeholder="Nomor Handphone Agen"
                          className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[515px] h-[65px] rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div>
                      <div>Alamat Perusahaan</div>
                      <div className="pt-[11px]">
                        <input
                          type="text"
                          value={alamat_perusahaan}
                          onChange={(e) => setAlamatPerusahaan(e.target.value)}
                          placeholder="Alamat Perusahaan"
                          className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[515px] h-[65px] rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="flex place-content-end pt-[20px]">
                      <button
                        type="submit"
                        className="w-[125px] h-[56px] bg-[#1A719C] rounded-[20px] text-white"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[100px]">
        <div className="footer h-[100px] bg-[#1A719C] flex justify-center place-items-center font-bold text-[20px] text-white">
          Integrated of Banda Aceh, Sabang, and Lhokseumawe Information System
        </div>
      </div>
    </div>
  );
};

export default Register;
