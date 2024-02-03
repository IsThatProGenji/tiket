import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-[85vh] md:px-[80px] px-[20px] flex flex-col md:items-center justify-center">
      <h1 className="md:text-5xl text-3xl text-white font-extrabold mb-5 md:text-center">
        Bersiaplah untuk merasakan{" "}
        <span className="md:text-[#C07F00] text-white">event berkesan</span>
      </h1>
      <p className="mb-2 md:text-center md:text-lg md:text-gray-100 text-white">
        Pesan tiket Anda untuk pertunjukan, konser, dan festival terpanas di
        sekitar. Mulai dari konser musik yang mendebarkan hingga acara olahraga
        penuh aksi, kami telah siap menyambut Anda.
      </p>
      <p className="mb-6 md:text-center md:text-lg md:text-gray-100 text-white">
        Jangan lewatkan momen berharga ini - segera dapatkan tiket Anda
        sekarang!
      </p>
      <Link href="/register">
        <button className="bg-white md:px-6 px-4 py-4 text-[#C07F00] rounded font-bold">
          BUAT TIKET EVENT SEKARANG
        </button>
      </Link>
    </div>
  );
};

export default Hero;
