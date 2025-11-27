export default function TopBar() {
  return (
    <div className="w-full bg-black text-white flex items-center justify-between px-4 h-10 relative overflow-hidden">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-4 z-20">
        <span className="flex items-center gap-1">
          📍 23 Ranking Street, New York
        </span>
        <span className="flex items-center gap-1">
          ✉️ Email@example.com
        </span>
      </div>

      {/* CENTER TICKER */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="ticker-wrapper">
          <p className="ticker-text">
            Note : We help you to Grow your Business • Note : We help you to Grow your Business •
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3 z-20">
        <a href="#" className="text-white">🔵</a>
        <a href="#" className="text-white">🐦</a>
        <a href="#" className="text-white">📷</a>
        <a href="#" className="text-white">💼</a>
      </div>

    </div>
  );
}
