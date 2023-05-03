import { Loading } from "components/Loading";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import List from "./pages/detail";

const IndexRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={"/"} element={<List />} />
      </Routes>
    </Suspense>
  );
};

export default IndexRoutes;
