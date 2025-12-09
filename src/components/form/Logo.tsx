
function Logo() {
  return (
   <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="48" fill="white" fontFamily="sans-serif">L</text>
  </svg>
  )
}

export default Logo
