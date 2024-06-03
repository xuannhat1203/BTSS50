import { useParams } from "react-router-dom";

export default function Private() {
  const { status } = useParams();
  console.log(status);
  return <>Đây là trang kiểm tra</>;
}
