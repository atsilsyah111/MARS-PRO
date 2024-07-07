import React from "react";
import logofix from "../assets/logofix.png";
import { useState } from "react";

const SignOn = () => {
  const [nama_cru, setNamaCru] = useState("");
  const [no_paspor, setNoPaspor] = useState("");
  const [kebangsaan_cru, setKebangsaanCRU] = useState("");
  const [tg_rencana_sign_on, setRencanaOn] = useState("");
  const [nama_kapal, setNamaKapal] = useState("");
  const [kebangsaan_kapal, setKebangsaanKapal] = useState("");
  const [surat, setSurat] = useState("");
  const [waktu_lapor, setWaktuLapor] = useState("");
  const [nama_agen, setNamaAgen] = useState("");

  const handleDataSignOn = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/createSignOnCru", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama_cru,
        no_paspor,
        kebangsaan_cru,
        tg_rencana_sign_on,
        nama_kapal,
        kebangsaan_kapal,
        surat,
        waktu_lapor,
        nama_agen,
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
        <div className="flex justify-between items-center absolute gap-[224px]">
          <div>
            <a className="" href="/">
              <img className="w-[113px] h-[101px]" src={logofix} alt="" />
            </a>
          </div>
          <div>
            <ul className="flex justify-between gap-[185px] text-[24px] font-bold">
              <li>
                <a className="text-[#1A719C]" href="/sign-on">
                  Sign-On Form
                </a>
              </li>
              <li>
                <a className="" href="/sign-off">
                  Sign-Off Form
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-[48px] font-bold flex pt-[166px] justify-center gap-[10px]">
            <div>Crew</div>
            <div className="text-[#1A719C]">Sign-On</div>
            <div>Data Form</div>
          </div>
          <div className="flex justify-center font-bold text-[20px] text-[#5C5C68]">
            <div className="pt-[11px]">Fill in your crew details</div>
          </div>
        </div>
        <div className="pt-[48px] flex justify-center">
          <div className="flex font-bold text-left text-[20px]">
            <form
              className="flex justify-between items-end gap-[54px]"
              onSubmit={handleDataSignOn}
            >
              <div className="grid gap-[30px]">
                <div>
                  <div className="pl-[17px]">Nama Kru</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={nama_cru}
                      onChange={(e) => setNamaCru(e.target.value)}
                      placeholder="Input Nama Crew"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Nomor Paspor</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={no_paspor}
                      onChange={(e) => setNoPaspor(e.target.value)}
                      placeholder="Input Nomor Passport"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Kebangsaan Kru</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={kebangsaan_cru}
                      onChange={(e) => setKebangsaanCRU(e.target.value)}
                      placeholder="Input Kebangsaan Crew"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Jadwal Sign On</div>
                  <div className="pt-[11px]">
                    <input
                      type="date"
                      value={tg_rencana_sign_on}
                      onChange={(e) => setRencanaOn(e.target.value)}
                      className="pl-[17px] pr-[20px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px] appearance-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Nama Kapal</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={nama_kapal}
                      onChange={(e) => setNamaKapal(e.target.value)}
                      placeholder="Input Nama Kapal"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Kebangsaan Kapal</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={kebangsaan_kapal}
                      onChange={(e) => setKebangsaanKapal(e.target.value)}
                      placeholder="Input Kebangsaan Kapal"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Upload Dokumen</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={surat}
                      onChange={(e) => setSurat(e.target.value)}
                      placeholder="Upload Dokumen"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Waktu Melapor</div>
                  <div className="pt-[11px]">
                    <input
                      type="date"
                      value={waktu_lapor}
                      placeholder="Input Waktu Melapor"
                      onChange={(e) => setWaktuLapor(e.target.value)}
                      className="pl-[17px] pr-[20px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px] appearance-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Nama Agen</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={nama_agen}
                      onChange={(e) => setNamaAgen(e.target.value)}
                      placeholder="Input Nama Agen"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[214px] h-[65px] bg-[#1A719C] rounded-[20px] text-white"
                >
                  Buat Data Kru
                </button>
              </div>
            </form>
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

export default SignOn;
