import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-99">
      <a
        href="https://wa.me/9356779714?text=Hi%20Sir,%20I%20want%20to%20know%20more."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
