import Image from "next/image";

export default function WZPButton() {
    return (
        <a href="https://wa.me/5519999158816" target="_blank" rel="noopener noreferrer">
            <button className="fixed bottom-10 right-10 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
                <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
            </button>
        </a>
    );
}