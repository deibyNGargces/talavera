import React, { useState, useEffect } from "react";

import { BACKENDURL } from "@/api/api";
interface User {
 id: number;
 nombre: string;
 apellidos: string;
 identificacion: string;
 correo_electronico: string;
 rol: string;
}

const APIURL = `${BACKENDURL}/user.php`;

const UserManagement: React.FC = () => {
 const [users, setUsers] = useState<User[]>([]);
 const [error, setError] = useState<string | null>(null);
 const [isModalVisible, setIsModalVisible] = useState(false);
 const [editingUser, setEditingUser] = useState<User | null>(null);

 const [form, setForm] = useState({
  nombre: "",
  apellidos: "",
  identificacion: "",
  correo_electronico: "",
  rol: "",
  password: "",
 });

 useEffect(() => {
  fetchUsers();
 }, []);

 const fetchUsers = async () => {
  try {
   const response = await fetch(`${APIURL}?action=users`);
   const data = await response.json();
   setUsers(data);
  } catch (error) {
   console.error("Error fetching users:", error);
  }
 };
 console.log(users);

 const handleCreateUser = async () => {
  const formData = new FormData();
  formData.append("nombre", form.nombre);
  formData.append("apellidos", form.apellidos);
  formData.append("identificacion", form.identificacion);
  formData.append("email", form.correo_electronico);
  formData.append("rol", form.rol);
  formData.append("password", form.password);

  if (!editingUser) {
   //formData.append("password", form.password);
   formData.append("action", "create");
  } else {
   formData.append("action", "update");
   formData.append("id", editingUser.id.toString());
  }
  try {
   const method = "POST";

   const response = await fetch(APIURL, {
    method,
    body: formData,
   });

   if (!editingUser) {
    const data = await response?.json();
    console.log(data);

    if (data.error) {
     console.log(data.error);
     setError(data.message);
     return;
    }
   }

   if (response.ok) {
    fetchUsers();
    setIsModalVisible(false);
    setEditingUser(null);
    setForm({
     nombre: "",
     apellidos: "",
     identificacion: "",
     correo_electronico: "",
     rol: "",
     password: "",
    });
   } else {
    console.error("Error creating/updating user");
   }
  } catch (error) {
   console.error("Error creating/updating user:", error);
  }
 };

 const handleEditUser = (user: User) => {
  setEditingUser(user);
  setForm({ ...user, password: "" });
  setIsModalVisible(true);
 };

 const handleDeleteUser = async (id: number) => {
  const formData = new FormData();
  formData.append("id", id.toString());
  formData.append("action", "delete");

  try {
   const response = await fetch(APIURL, {
    method: "POST",
    body: formData,
   });
   if (response.ok) {
    fetchUsers();
   } else {
    console.error("Error deleting user");
   }
  } catch (error) {
   console.error("Error deleting user:", error);
  }
 };

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
 ) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
 };

 const columns = [
  {
   title: "Nombre",
   dataIndex: "nombre",
   key: "nombre",
  },
  {
   title: "Apellidos",
   dataIndex: "apellidos",
   key: "apellidos",
  },
  {
   title: "Identificación",
   dataIndex: "identificacion",
   key: "identificacion",
  },
  {
   title: "Correo Electrónico",
   dataIndex: "correo_electronico",
   key: "correo_electronico",
  },
  {
   title: "Rol",
   dataIndex: "rol",
   key: "rol",
  },
  {
   title: "Acciones",
   key: "acciones",
   render: (text: string, user: User) => (
    <>
     <button
      className="text-blue-500 mr-2"
      onClick={() => handleEditUser(user)}
     >
      Editar
     </button>
     <button className="text-red-500" onClick={() => handleDeleteUser(user.id)}>
      Eliminar
     </button>
    </>
   ),
  },
 ];

 return (
  <div className="max-w-3xl mx-auto p-4">
   <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>
   <button
    className="bg-blue-500 text-white px-4 py-2 rounded"
    onClick={() => setIsModalVisible(true)}
   >
    Crear Usuario
   </button>
   <table className="min-w-full bg-white mt-4">
    <thead>
     <tr>
      {columns.map((col) => (
       <th
        key={col.key}
        className="py-2 px-4 border-b border-gray-200 text-left"
       >
        {col.title}
       </th>
      ))}
     </tr>
    </thead>
    <tbody>
     {users.map((user) => (
      <tr key={user.id}>
       <td className="py-2 px-4 border-b border-gray-200">{user.nombre}</td>
       <td className="py-2 px-4 border-b border-gray-200">{user.apellidos}</td>
       <td className="py-2 px-4 border-b border-gray-200">
        {user.identificacion}
       </td>
       <td className="py-2 px-4 border-b border-gray-200">
        {user.correo_electronico}
       </td>
       <td className="py-2 px-4 border-b border-gray-200">{user.rol}</td>
       <td className="py-2 px-4 border-b border-gray-200">
        <button
         className="text-blue-500 mr-2"
         onClick={() => handleEditUser(user)}
        >
         Editar
        </button>
        <button
         className="text-red-500"
         onClick={() => handleDeleteUser(user.id)}
        >
         Eliminar
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>

   {isModalVisible && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
     <div className="bg-white p-6 rounded-md w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4">
       {editingUser ? "Editar Usuario" : "Crear Usuario"}
      </h2>
      <form
       onSubmit={(e) => {
        e.preventDefault();
        handleCreateUser();
       }}
      >
       {error && <p className="text-red-500 mb-4">{error}</p>}
       <div className="mb-4 flex items-center gap-2 ">
        <label className="block text-sm font-bold mb-2 w-32 ">Nombre</label>
        <input
         type="text"
         name="nombre"
         value={form.nombre}
         onChange={handleChange}
         className="w-full p-2 border border-gray-300 rounded"
         required
        />
       </div>
       <div className="mb-4  flex items-center gap-2">
        <label className="block text-sm font-bold mb-2 w-32">Apellidos</label>
        <input
         type="text"
         name="apellidos"
         value={form.apellidos}
         onChange={handleChange}
         className="w-full p-2 border border-gray-300 rounded"
         required
        />
       </div>
       <div className="mb-4  flex items-center gap-2">
        <label className="block text-sm font-bold mb-2 w-32">
         Identificación
        </label>
        <input
         type="number"
         name="identificacion"
         value={form.identificacion}
         onChange={handleChange}
         className="w-full p-2 border border-gray-300 rounded"
         required
        />
       </div>
       <div className="mb-4  flex items-center gap-2">
        <label className="block text-sm font-bold mb-2 w-32">
         Correo Electrónico
        </label>
        <input
         type="email"
         name="correo_electronico"
         value={form.correo_electronico}
         onChange={handleChange}
         className="w-full p-2 border border-gray-300 rounded"
         required
        />
       </div>
       <div className="mb-4  flex items-center gap-2">
        <label className="block text-sm font-bold mb-2 w-32">Rol</label>
        <select
         name="rol"
         value={form.rol}
         onChange={handleChange}
         className="w-full p-2 border border-gray-300 rounded"
         required
        >
         <option value="">Seleccionar Rol</option>
         <option value="admin">Administrador</option>
         <option value="user">Usuario</option>
        </select>
       </div>

       <div className="mb-4  flex items-center gap-2">
        <label className="block text-sm font-bold mb-2 w-32">Contraseña</label>
        <input
         type="password"
         name="password"
         value={form.password}
         placeholder="********"
         onChange={handleChange}
         className="w-full p-2 border border-gray-300 rounded"
         required={!editingUser}
        />
       </div>

       <div className="flex justify-end">
        <button
         type="button"
         className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
         onClick={() => {
          setIsModalVisible(false);
          setEditingUser(null);
          setForm({
           nombre: "",
           apellidos: "",
           identificacion: "",
           correo_electronico: "",
           rol: "",
           password: "",
          });
         }}
        >
         Cancelar
        </button>
        <button
         type="submit"
         className="bg-blue-500 text-white px-4 py-2 rounded"
        >
         {editingUser ? "Actualizar Usuario" : "Crear Usuario"}
        </button>
       </div>
      </form>
     </div>
    </div>
   )}
  </div>
 );
};

export default UserManagement;
