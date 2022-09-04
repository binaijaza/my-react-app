export default function ProductCard(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      ProductCard
      <h2>{props.title}</h2>
    </div>
  );
}
