import type { BodyPart } from "../data/Data";
import BodyPartItem from "../LandingPages/BodyPartItem";

const BodyOrbit = ({ parts }: { parts: BodyPart[] }) => {
  return (
    <div
      className="relative w-full aspect-square max-w-[95vw] sm:max-w-[650px] md:max-w-[750px] lg:max-w-[900px] mx-auto"
      style={
        {
          "--orbit-radius": "min(42vmin, 420px)",
        } as React.CSSProperties
      }
    >
      {parts.map((item, i) => (
        <div
          key={item.id ?? i}
          className="absolute left-1/2 top-1/2 origin-center"
          style={{
            transform: `
              translate(-50%, -50%)
              rotate(${item.angle}deg)
              translate(var(--orbit-radius))
              rotate(-${item.angle}deg)
            `,
          }}
        >
          <BodyPartItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default BodyOrbit;
