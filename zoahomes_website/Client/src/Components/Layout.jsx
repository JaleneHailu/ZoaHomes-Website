import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../Pages/Spinner";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // You can use an event-based approach to detect route changes
    window.addEventListener("loading:start", handleStart);
    window.addEventListener("loading:complete", handleComplete);

    return () => {
      window.removeEventListener("loading:start", handleStart);
      window.removeEventListener("loading:complete", handleComplete);
    };
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <Outlet />
    </>
  );
};

export default Layout;
