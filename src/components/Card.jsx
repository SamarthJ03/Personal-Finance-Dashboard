export default function Card({ img, title, amount }) {
  return (
    <div className="w-full rounded-2xl p-5 shadow-sm bg-white flex flex-col items-center text-center gap-3">
      <div className="flex items-center justify-center">
        <img src={img} alt="logo" className="w-14 h-14 object-contain" />
      </div>

      <span className="text-base md:text-lg text-gray-900 font-semibold">
        {title}
      </span>

      <span className="text-xl md:text-2xl font-bold text-gray-900 break-words">
        {amount}
      </span>
    </div>
  );
}