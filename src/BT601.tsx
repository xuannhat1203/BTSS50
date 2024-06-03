import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface Infor {
  email: string;
  password: string;
  role: string;
}

export default function BT601() {
  const [newInfor, setNewInfor] = useState<Infor>({
    email: "",
    password: "",
    role: "",
  });
  const [check, setCheck] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (check) {
      navigate("/login/accounts");
    }
  }, [check, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewInfor((prevInfor) => ({
      ...prevInfor,
      [name]: value,
    }));
  };

  const handleClick = () => {
    setCheck(true);
  };

  return (
    <>
      <form>
        <h4>Đăng nhập</h4>
        <input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Nhập email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="text"
          placeholder="Nhập mật khẩu"
        />
        <select onChange={handleChange} name="role" id="">
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <br />
        <button type="button" onClick={handleClick}>
          Đăng nhập
        </button>
      </form>
    </>
  );
}
