interface Props { 
  active:  "upper" | "lower";
}

const bodyImages = {
  upper: "../body/Upper.png",
  lower: "../body/Lower.png",
} as const;


const BodyCenter = ({ active }: Props) => {
  return (
<img
  src={`/anatomy/Body-Anatomy-${active === "upper" ? "Upper" : "Lower"}.png`}
  alt="Human Body"
  className="h-[420px] z-10"
/>
  );
};
export default BodyCenter;
