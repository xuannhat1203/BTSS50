import { Outlet } from "react-router-dom";
const PrivateRouter = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Outlet />
    </div>
  );
};

export default PrivateRouter;
