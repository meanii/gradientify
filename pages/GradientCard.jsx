export default function GradientCard(props) {

  return (
    <div className="card text-center shadow-2xl">
      <div className="card-body">
        <div className={`${props.gradientClass} p-40 rounded-lg`}></div>
      </div>
    </div>
  );
}
