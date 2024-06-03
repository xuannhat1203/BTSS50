import { useParams } from "react-router-dom";

export default function BT02() {
  let { name } = useParams();
  return <div>BT02: Name = {name}</div>;
}
