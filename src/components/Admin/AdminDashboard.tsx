import { useState } from "react";
import { FiUsers, FiBox, FiTag, FiLogOut } from "react-icons/fi";
import UserManagement from "./UserManagement";
import ProductManagement from "./ProductManagement";
import CategoryManagement from "./CategoryManaget";

interface AdminDashboardProps {
 handleLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ handleLogout }) => {
 const [selectedModule, setSelectedModule] = useState<string>("productos");

 const handleModuleClick = (module: string) => {
  setSelectedModule(module);
 };

 return (
  <div className="flex min-h-screen">
   {/* Sidebar Menu */}
   <div className="w-64 bg-gray-800 text-white p-6 flex flex-col justify-between">
    <nav>
     <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>
     <ul>
      <li
       className={`flex items-center mb-4 p-2 cursor-pointer rounded-md ${
        selectedModule === "productos" ? "bg-gray-700" : "hover:bg-gray-700"
       }`}
       onClick={() => handleModuleClick("productos")}
      >
       <FiBox className="mr-3" /> Gestión de Productos
      </li>
      <li
       className={`flex items-center mb-4 p-2 cursor-pointer rounded-md ${
        selectedModule === "categorias" ? "bg-gray-700" : "hover:bg-gray-700"
       }`}
       onClick={() => handleModuleClick("categorias")}
      >
       <FiTag className="mr-3" /> Gestión de Categorías
      </li>
      <li
       className={`flex items-center mb-4 p-2 cursor-pointer rounded-md ${
        selectedModule === "usuarios" ? "bg-gray-700" : "hover:bg-gray-700"
       }`}
       onClick={() => handleModuleClick("usuarios")}
      >
       <FiUsers className="mr-3" /> Gestión de Usuarios
      </li>
     </ul>
     <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded w-full mt-8 flex items-center "
     >
      <FiLogOut className="mr-3" /> Cerrar Sesión
     </button>
    </nav>
   </div>

   {/* Content Area */}
   <div className="flex-1 p-8 bg-gray-100">
    {selectedModule === "usuarios" && <UserManagement />}
    {selectedModule === "productos" && <ProductManagement />}
    {selectedModule === "categorias" && <CategoryManagement />}
    {!selectedModule && <div>Seleccione un módulo del menú</div>}
   </div>
  </div>
 );
};

export default AdminDashboard;
