import React from "react";
import logofix from "../assets/logofix.png";
import { useState } from "react";

const Arv = () => {
  const [nama_agen_kapal, setNamaAgenKapal] = useState("");
  const [perusahaan_agen_kapal, setPerusahaanAgenKapal] = useState("");
  const [imo_number, setIMONumber] = useState("");
  const [nama_kapal, setNamaKapal] = useState("");
  const [kebangsaan_kapal, setKebangsaanKapal] = useState("");
  const [data_cru_indonesia, setDataCRUIndonesia] = useState("");
  const [data_cru_asing, setDataCRUAsing] = useState("");
  const [pelabuhan_asal, setPelabuhanAsal] = useState("");
  const [pelabuhan_tujuan, setPelabuhanTujuan] = useState("");
  const [service_location, setServiceLocation] = useState("");
  const [jadwal_kedatangan, setJadwalKedatangan] = useState("");
  const [tujuan_kedatangan, setTujuanKedatangan] = useState("");
  const [dokument, setDokument] = useState("");
  const handleDataKedatangan = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:3001/api/createDatangKapal",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama_agen_kapal,
          perusahaan_agen_kapal,
          imo_number,
          nama_kapal,
          kebangsaan_kapal,
          data_cru_indonesia,
          data_cru_asing,
          pelabuhan_asal,
          pelabuhan_tujuan,
          service_location,
          jadwal_kedatangan,
          tujuan_kedatangan,
          dokument,
        }),
      }
    );
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
            <a className="" href="/">
              <img className="w-[113px] h-[101px]" src={logofix} alt="" />
            </a>
          </div>
          <div className="px-[100px]">
            <ul className="flex justify-between gap-[185px] text-[24px] font-bold">
              <li>
                <a className="text-[#1A719C]" href="/arrival">
                  Form Kedatangan
                </a>
              </li>
              <li>
                <a className="" href="/departure">
                  Form Keberangkatan                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-[48px] font-bold flex pt-[166px] justify-center gap-[10px]">
            <div>FORM</div>
            <div className="text-[#1A719C]">KEDATANGAN</div>
            <div>KAPAL</div>
          </div>
          <div className="flex justify-center font-bold text-[20px] text-[#5C5C68]">
            <div className="pt-[11px]">Silahkan isi data dibawah</div>
          </div>
        </div>
        <div className="pt-[48px] flex justify-center">
          <div className="flex font-bold text-left text-[20px]">
            <form
              className="flex justify-between items-end gap-[54px]"
              onSubmit={handleDataKedatangan}
            >
              <div className="grid gap-[30px]">
                <div>
                  <div className="pl-[17px]">Nama Agen Kapal</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={nama_agen_kapal}
                      onChange={(e) => setNamaAgenKapal(e.target.value)}
                      placeholder="Masukkan nama Agen Kapal"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Perusahaan Agen Kapal</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={perusahaan_agen_kapal}
                      onChange={(e) => setPerusahaanAgenKapal(e.target.value)}
                      placeholder="Masukkan Perusahaan Agen Kapal"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">IMO Number</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={imo_number}
                      onChange={(e) => setIMONumber(e.target.value)}
                      placeholder="Masukkan IMO Number"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
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
                      placeholder="Masukkan Nama Kapal"
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
                      placeholder="Masukkan Kebangsaan Kapal"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Data Kru Indonesia</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={data_cru_indonesia}
                      onChange={(e) => setDataCRUIndonesia(e.target.value)}
                      placeholder="Masukkan Data Kru Indonesia"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Data Kru Asing</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={data_cru_asing}
                      onChange={(e) => setDataCRUAsing(e.target.value)}
                      placeholder="Masukkan Data Crew Asing"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Pelabuhan Asal Kapal</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={pelabuhan_asal}
                      onChange={(e) => setPelabuhanAsal(e.target.value)}
                      placeholder="Masukkan Pelabuhan Asal Kapal"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Pelabuhan Tujuan Kapal</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={pelabuhan_tujuan}
                      onChange={(e) => setPelabuhanTujuan(e.target.value)}
                      placeholder="Masukkan Pelabuhan Tujuan Kapal"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Lokasi Pelayanan</div>
                  <div className="pt-[11px] relative">
                    <select
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px] appearance-none"
                      value={service_location}
                      onChange={(e) => setServiceLocation(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Masukkan Lokasi Pelayanan
                      </option>
                      <option value="Kantor Imigrasi Kelas II TPI Lhokseumawe">
                        Kantor Imigrasi Kelas II TPI Lhokseumawe
                      </option>
                      <option value="Kantor Imigrasi Kelas II TPI Sabang">
                        Kantor Imigrasi Kelas II TPI Sabang
                      </option>
                      <option value="Kantor Imigrasi Kelas I TPI Banda Aceh">
                        Kantor Imigrasi Kelas I TPI Banda Aceh
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Jadwal Kedatangan Kapal</div>
                  <div className="pt-[11px] relative">
                    <input
                      type="date"
                      value={jadwal_kedatangan}
                      placeholder="Pilih Jadwal Kedatangan Kapal"
                      onChange={(e) => setJadwalKedatangan(e.target.value)}
                      className="pl-[17px] pr-[20px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px] appearance-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Tujuan Kedatangan</div>
                  <div className="pt-[11px] relative">
                    <select
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px] appearance-none"
                      value={tujuan_kedatangan}
                      onChange={(e) => setTujuanKedatangan(e.target.value)}
                    >
                      <option>Pilih Tujuan Kedatangan</option>
                      <option value="Medical Evacuation">
                        Crew Change
                      </option>
                      <option value="Clearance">Clearance Document</option>
                      <option value="Docking">Docking</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Upload Dokumen (link)</div>
                  <div className="pt-[11px]">
                    <input
                      value={dokument}
                      onChange={(e) => setDokument(e.target.value)}
                      placeholder="Silahkan Upload Dokumen"
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
                  Submit Data Kapal
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

export default Arv;
