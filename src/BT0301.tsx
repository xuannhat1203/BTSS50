import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Index {
  id: number;
  name: string;
}

export default function BT07() {
  const [team, setTeam] = useState<Index[]>([
    { id: 1, name: "Đây là team 1" },
    { id: 2, name: "Đây là team 2" },
    { id: 3, name: "Đây là team 3" },
  ]);

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    const teamInfo = team.find((item) => item.id === id);
    if (teamInfo) {
      navigate(`/teams/detail/${id}`);
    }
  };

  return (
    <>
      {team.map((item: Index) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => handleClick(item.id)}>Xem chi tiết</button>
        </div>
      ))}
    </>
  );
}
