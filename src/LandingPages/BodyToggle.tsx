interface Props {
  active: "upper" | "lower";
  setActive: (v: "upper" | "lower") => void;
}

const BodyToggle = ({ active, setActive }: Props) => {
  return (
    <div className="flex justify-center gap-4 mb-10">
      {["upper", "lower"].map((type) => (
        <button
          key={type}
          onClick={() => setActive(type as any)}
          className={`px-6 py-2 rounded-full font-semibold transition py-3
            ${active === type
              ? "bg-red-600 text-white"
              : "bg-white text-red-600 border border-red-300"
            }`}
        >
          {type === "upper" ? "Upper Body" : "Lower Body"}
        </button>
      ))}
    </div>
  );
};

export default BodyToggle;
