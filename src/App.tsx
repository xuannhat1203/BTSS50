import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BT01 from "./BT01";
import BT02 from "./BT02";
import BT0301 from "./BT0301";
import BT04 from "./BT04";
import Account from "./Account/Account";
import Login from "./Login/Login";
import BT601 from "./BT601";
import BT07 from "./BT07";
import BT0702 from "./BT0702";
import Account2 from "./BT08/Account2";
import PrivateRouter from "./BT08/PrivateRouter";
import AdminIndex from "./BT08/AdminIndex";
import Product2 from "./BT08/Product2";
import Order from "./BT08/Order";
import Loading from "./Loading";

const BT09 = React.lazy(() => import("./BT09"));

export default function App() {
  return (
    <Routes>
      <Route path="/product">
        <Route path=":id" element={<BT01 />} />
      </Route>
      <Route path="/student">
        <Route path=":name" element={<BT02 />} />
      </Route>
      <Route path="/student2" element={<BT0301 />} />
      <Route path="/student2s" element={<BT04 />} />
      <Route path="/private">
        <Route path="true" element={<Account />} />
        <Route path="false" element={<Login />} />
      </Route>
      <Route path="/login" element={<BT601 />} />
      <Route path="/teams" element={<BT07 />} />
      <Route path="/teams/detail/:id" element={<BT0702 />} />
      <Route path="/admin" element={<PrivateRouter />}>
        <Route index element={<AdminIndex />} />
        <Route path="account2" element={<Account2 />} />
        <Route path="product2" element={<Product2 />} />
        <Route path="order" element={<Order />} />
      </Route>
      <Route
        path="/BT09"
        element={
          <Suspense fallback={<Loading />}>
            <BT09 />
          </Suspense>
        }
      />
    </Routes>
  );
}
