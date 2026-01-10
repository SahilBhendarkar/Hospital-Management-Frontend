interface Props {
  active: "upper" | "lower";
  setActive: (v: "upper" | "lower") => void;
}

const BodyToggle = ({ active, setActive }: Props) => {
  return (
    <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-10 px-4">
      {["upper", "lower"].map((type) => (
        <button
          key={type}
          onClick={() => setActive(type as "upper" | "lower")}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition text-sm sm:text-base
            ${
              active === type
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
