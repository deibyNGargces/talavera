import { BACKENDURL } from "@/api/api";
import { useState } from "react";

const APIURL = `${BACKENDURL}/user.php`;

const Login = ({ isLogged, setIsLogged, loading, setLoading }) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState<string | null>(null);

 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  const fData = new FormData();
  fData.append("email", email);
  fData.append("password", password);
  fData.append("action", "login");
  setLoading(true);
  try {
   const response = await fetch(`${APIURL}?action=login`, {
    method: "POST",
    body: fData,
   });
   const data = await response.json();
   console.log(data);

   if (!data.error && data.status === 200) {
    localStorage.setItem("token", data.token);
    setIsLogged(true);
   } else {
    setError("Usuario o contraseña incorrectos");
   }
  } catch (err) {
   setError("Error al conectar con el servidor");
  }
  setLoading(false);
 };

 return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
   <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
     Iniciar Sesión
    </h2>
    <form onSubmit={handleLogin}>
     <div className="mb-4">
      <label
       htmlFor="email"
       className="block text-sm font-medium text-gray-700"
      >
       Correo Electrónico
      </label>
      <input
       type="email"
       id="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
       required
      />
     </div>
     <div className="mb-6">
      <label
       htmlFor="password"
       className="block text-sm font-medium text-gray-700"
      >
       Contraseña
      </label>
      <input
       type="password"
       id="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
       required
      />
     </div>
     {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
     <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
     >
      Iniciar Sesión
     </button>
    </form>
   </div>
  </div>
 );
};

export default Login;
