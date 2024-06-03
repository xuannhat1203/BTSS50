import { useParams } from "react-router-dom";

export default function BT01() {
  let { id } = useParams();
  return <div>BT01: ID: {id}</div>;
}
