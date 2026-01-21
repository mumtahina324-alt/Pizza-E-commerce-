export default function Testimonial({ img, name, star, comment }) {
  return (
    <div className=" bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl">
      <img
        src={img}
        alt={name}
        className="w-28 h-28 rounded-full border-4 border-red-300 mb-4"
      />

      <h1 className="text-lg font-semibold text-gray-800">{name}</h1>

      <div className="flex gap-1 text-yellow-400 my-2">
        {star}
        {star}
        {star}
        {star}
        {star}
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{comment}</p>
    </div>
  );
}
