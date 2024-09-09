import React, { Suspense } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
