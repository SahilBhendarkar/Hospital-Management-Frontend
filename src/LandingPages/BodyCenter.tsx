interface Props {
  active: "upper" | "lower";
}

const BodyCenter = ({ active }: Props) => {
  return (
    <img
      src={`/anatomy/Body-Anatomy-${active === "upper" ? "Upper" : "Lower"}.png`}
      alt="Human Body"
      className="h-[260px] sm:h-[320px] md:h-[420px] z-10 mx-auto"
    />
  );
};

export default BodyCenter;
