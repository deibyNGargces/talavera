import React, { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";

const AdminMain = () => {
 const [isLogged, setIsLogged] = useState(false);
 const [loading, setLoading] = useState(true);
 useEffect(() => {
  setLoading(true);
  const token = localStorage.getItem("token");
  if (token) {
   setIsLogged(true);
  }
  setLoading(false);
 }, []);

 const handleLogout = () => {
  setIsLogged(false);
  localStorage.removeItem("token");
 };

 if (loading) {
  return (
   <div className="w-screen h-screen flex items-center justify-center">
    Cargando...
   </div>
  );
 }

 return (
  <div className="pt-24">
   {isLogged ? (
    <AdminDashboard handleLogout={handleLogout} />
   ) : (
    <Login
     isLogged={isLogged}
     setIsLogged={setIsLogged}
     loading={loading}
     setLoading={setLoading}
    />
   )}
  </div>
 );
};

export default AdminMain;
