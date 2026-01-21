import Image from "next/image";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#063f5c] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT: Brand Info */}
        <div>
          <Image
            src="/logo-banner.png"
            alt="MH Global Logo"
            width={100}
            height={30}
          />
          <p className="text-sm text-gray-200 mb-4">
            Empowering businesses with complete staffing, recruitment, and
            workforce solutions.
          </p>

          <p className="text-sm text-gray-300 mb-6">
            <strong>CIN:</strong> U78100BR2025PTC080245
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a className="bg-[#3b5998] p-2 rounded" href="#">
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/9356779714?text=Hi%20Sir,%20I%20want%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] p-2 rounded"
            >
              <FaWhatsapp />
            </a>

            <a className="bg-[#0077b5] p-2 rounded" href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* RIGHT: Addresses */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address 1 */}
          <div className="bg-[#073b54] p-6 rounded-lg">
            <h4 className="font-semibold flex items-center gap-2 mb-3">
              <FaMapMarkerAlt /> Head Office
            </h4>

            <p className="text-sm text-gray-200 mb-4">
              Sai Baba Chowak, <br />
              Shantinagar, <br />
              Nagpur, MH – 440002
            </p>

            <iframe
              className="w-full h-40 rounded"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14883.235446517332!2d79.12145179838959!3d21.160003588354684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7247c677ebf%3A0x900eeef3392d05a9!2sShantinagar%20Colony%2C%20Nagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1768977743813!5m2!1sen!2sus"
            ></iframe>
          </div>

          {/* Address 2 */}
          <div className="bg-[#073b54] p-6 rounded-lg">
            <h4 className="font-semibold flex items-center gap-2 mb-3">
              <FaMapMarkerAlt /> Branch Office
            </h4>

            <p className="text-sm text-gray-200 mb-4">
              Office No. 12,Sarai Sattar Khan, <br />
              Laheriasarai, Darbhanga, <br />
              Bihar, BR – 846001
            </p>

            <iframe
              className="w-full h-40 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.2337184009334!2d85.88975337519594!3d26.123921477126185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb9b2ccf040ef%3A0x482224c56b3df172!2sSarai%20apartment!5e0!3m2!1sen!2sus!4v1768977886078!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} MH-GLOBAL. <br />
        All rights reserved. Designed & developed by{" "}
        <a
          href="https://dilshad.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 hover:underline"
        >
          Md Dilshad
        </a>
      </div>
    </footer>
  );
}
