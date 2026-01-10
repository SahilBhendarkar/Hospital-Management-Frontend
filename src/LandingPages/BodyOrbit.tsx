import type { BodyPart } from "../data/Data";
import BodyPartItem from "../LandingPages/BodyPartItem";

const BodyOrbit = ({ parts }: { parts: BodyPart[] }) => {

  return (
    <div
      className="relative w-full aspect-square max-w-[min(90vw,800px)] mx-auto"
      style={{ '--orbit-radius': 'min(45vmin, 500px)' } as React.CSSProperties}
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
          <div className="mb-20"></div>
          <BodyPartItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default BodyOrbit;