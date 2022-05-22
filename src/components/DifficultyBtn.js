function DifficultyBtn({ title, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(title)}
      className="bg-red-500 border-2 border-slate-800 w-40 text-white m-2 rounded-md h-8 font-bold hover:rotate-3 hover:transition-all"
    >
      {title}
    </button>
  );
}

export default DifficultyBtn;
