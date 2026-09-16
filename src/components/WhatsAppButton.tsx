import { useState } from 'react';
import './WhatsAppButton.css';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = '919422214567',
  defaultMessage = 'Hello Durga Rice Mill, I am inquiring about wholesale rice varieties and bulk pricing.',
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div
      className="whatsapp-float-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat with Durga Rice Mill on WhatsApp"
        title="Chat with our Sales Desk on WhatsApp"
      >
        {/* Soft Pulse Glow Rings */}
        <span className="whatsapp-pulse-ring" aria-hidden="true" />
        <span className="whatsapp-pulse-ring-delayed" aria-hidden="true" />

        {/* WhatsApp Icon */}
        <svg
          className="whatsapp-icon"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16c0 2.652.766 5.127 2.086 7.221L2.64 29.36a1 1 0 001.217 1.217l6.139-1.946A13.435 13.435 0 0016 29.5c7.456 0 13.5-6.044 13.5-13.5S23.456 2.5 16 2.5zm0 24.5a10.93 10.93 0 01-5.462-1.464l-.391-.233-4.226 1.34 1.34-4.226-.233-.391A10.933 10.933 0 015.1 16c0-6.02 4.88-10.9 10.9-10.9s10.9 4.88 10.9 10.9-4.88 10.9-10.9 10.9zm6.055-8.225c-.332-.166-1.963-.968-2.268-1.079-.304-.111-.526-.166-.747.166-.222.332-.858 1.079-1.052 1.301-.194.222-.388.249-.72.083a9.08 9.08 0 01-2.673-1.65 9.99 9.99 0 01-1.85-2.302c-.194-.332-.02-.512.146-.677.15-.149.332-.388.498-.582.166-.194.222-.332.332-.553.111-.222.056-.415-.028-.582-.083-.166-.747-1.8-1.024-2.464-.269-.647-.543-.559-.747-.569l-.637-.012c-.222 0-.582.083-.886.415-.304.332-1.163 1.135-1.163 2.769 0 1.634 1.19 3.212 1.356 3.433.166.222 2.342 3.576 5.674 5.015.792.342 1.411.547 1.893.7.795.253 1.519.217 2.091.132.639-.095 1.963-.803 2.24-1.577.277-.775.277-1.439.194-1.577-.083-.138-.305-.221-.637-.387z" />
        </svg>

        {/* Online Indicator Dot */}
        <span className="whatsapp-online-dot" aria-hidden="true" />
      </a>

      {/* Slide-out Tooltip / Pill on Desktop */}
      <div className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`} aria-hidden="true">
        <span className="tooltip-title">Chat with Sales Desk</span>
        <span className="tooltip-sub">Quick WhatsApp Response</span>
      </div>
    </div>
  );
}
