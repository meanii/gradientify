import { getGradientArray } from "../lib";
import GradientCard from "./GradientCard";

export default function GradientCards() {
  const gradientArray = getGradientArray(10);

  return (
    <div className="grid grid-cols-4 gap-4 flex-wrap">
      {gradientArray.map((value, index) => {
        return <GradientCard key={index} gradientClass={value} />;
      })}
    </div>
  );
}
