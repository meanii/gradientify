import { useState, useEffect } from "react";

export default function GradientCard(props) {
  const [color, setcolor] = useState(
    "bg-gradient-to-br from-stone-200 to-pink-200"
  );
  useEffect(() => setcolor(props.gradientClass), []);
  

  return (
    <div className="card text-center shadow-2xl">
      <div className="card-body">
        <div className={`${color} p-40 rounded-lg`}></div>
      </div>
    </div>
  );
}
