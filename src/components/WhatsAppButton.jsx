
export default function WhatsAppButton() {
  const phoneNumber = '918679421627'

  const message =
    'Hello Chauntra Aqua Zone! I am interested in swimming classes and training. Please share more details.'

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Chauntra Aqua Zone on WhatsApp"
      className="fixed bottom-6 right-6 z-100 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a]"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 .5C7.45.5.5 7.45.5 16c0 2.73.72 5.4 2.08 7.76L.5 31.5l7.94-2.08A15.4 15.4 0 0 0 16 31.5c8.55 0 15.5-6.95 15.5-15.5S24.55.5 16 .5Zm0 28.1c-2.37 0-4.7-.64-6.7-1.85l-.48-.28-4.72 1.24 1.26-4.6-.31-.5A12.6 12.6 0 1 1 16 28.6Zm6.92-9.44c-.38-.19-2.23-1.1-2.58-1.23-.35-.13-.6-.19-.85.19-.25.38-.98 1.23-1.2 1.48-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.04-1.88-1.12-1-1.88-2.23-2.1-2.61-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.07-.47-.03-.66-.1-.19-.85-2.05-1.16-2.8-.3-.73-.61-.63-.85-.64h-.73c-.25 0-.66.09-1 .47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.65 4.05 6.43 5.68.9.39 1.6.63 2.15.8.9.29 1.72.25 2.37.15.72-.1 2.23-.91 2.55-1.79.31-.88.31-1.63.22-1.79-.09-.16-.35-.25-.73-.44Z" />
      </svg>
    </a>
  )
}
