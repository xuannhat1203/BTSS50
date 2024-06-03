import { useSearchParams } from "react-router-dom";

export default function BT04() {
  const [name, setName] = useSearchParams();
  const studentName = name.get("studentName");
  return <div>BT04: {studentName}</div>;
}
