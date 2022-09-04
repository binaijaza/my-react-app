export default function ContactDetails(props) {
  return (
    <div className="flex items-center mb-4 shadow-md w-64 p-2 bg-cyan-200 rounded-md">
      <div>
        <img src={props.avatar} alt="img" className="h-16 w-16 rounded-full " />
      </div>
      <div className="ml-5">{props.name}</div>
    </div>
  );
}
