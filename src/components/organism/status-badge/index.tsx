export function StatusBadge() {
  return (
    <div className="rounded-l-full p-3 inline-flex bg-gradient-to-r from-[#301f63]/25 to-[#301f63]/0 -ml-3">
      <div className="rounded-l-full px-4 py-2.5 sm:px-6 sm:py-3.5 inline-flex items-center gap-4 bg-gradient-to-r from-[#301f63]/25 to-[#301f63]/0">
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />

        <div className="text-white font-normal">As a Frontend Developer 💻</div>
      </div>
    </div>
  );
}
