
import GradientCard from "./GradientCard";
import { gradientArray } from "../lib/gradientColors"

export default function GradientCards() {

  return (
    <div className="grid grid-cols-4 gap-4 flex-wrap">
      {gradientArray.map((value, index) => {
        return <GradientCard key={index} gradientClass={value} />;
      })}
    </div>
  );
}
