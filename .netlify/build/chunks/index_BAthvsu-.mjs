/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_DBI911CA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_D9vFQYE8.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { FiBox, FiTag, FiUsers, FiLogOut } from 'react-icons/fi';
import { B as BACKENDURL } from './api_DW5y9qxg.mjs';

const APIURL$4 = `${BACKENDURL}/user.php`;
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    identificacion: "",
    correo_electronico: "",
    rol: "",
    password: ""
  });
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${APIURL$4}?action=users`);
      const data = await response.json();
      setUsers(data);
    } catch (error2) {
      console.error("Error fetching users:", error2);
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
      formData.append("action", "create");
    } else {
      formData.append("action", "update");
      formData.append("id", editingUser.id.toString());
    }
    try {
      const method = "POST";
      const response = await fetch(APIURL$4, {
        method,
        body: formData
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
          password: ""
        });
      } else {
        console.error("Error creating/updating user");
      }
    } catch (error2) {
      console.error("Error creating/updating user:", error2);
    }
  };
  const handleEditUser = (user) => {
    setEditingUser(user);
    setForm({ ...user, password: "" });
    setIsModalVisible(true);
  };
  const handleDeleteUser = async (id) => {
    const formData = new FormData();
    formData.append("id", id.toString());
    formData.append("action", "delete");
    try {
      const response = await fetch(APIURL$4, {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        fetchUsers();
      } else {
        console.error("Error deleting user");
      }
    } catch (error2) {
      console.error("Error deleting user:", error2);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre"
    },
    {
      title: "Apellidos",
      dataIndex: "apellidos",
      key: "apellidos"
    },
    {
      title: "Identificación",
      dataIndex: "identificacion",
      key: "identificacion"
    },
    {
      title: "Correo Electrónico",
      dataIndex: "correo_electronico",
      key: "correo_electronico"
    },
    {
      title: "Rol",
      dataIndex: "rol",
      key: "rol"
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (text, user) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-blue-500 mr-2",
            onClick: () => handleEditUser(user),
            children: "Editar"
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "text-red-500", onClick: () => handleDeleteUser(user.id), children: "Eliminar" })
      ] })
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto p-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4", children: "Gestión de Usuarios" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "bg-blue-500 text-white px-4 py-2 rounded",
        onClick: () => setIsModalVisible(true),
        children: "Crear Usuario"
      }
    ),
    /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white mt-4", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: columns.map((col) => /* @__PURE__ */ jsx(
        "th",
        {
          className: "py-2 px-4 border-b border-gray-200 text-left",
          children: col.title
        },
        col.key
      )) }) }),
      /* @__PURE__ */ jsx("tbody", { children: users.map((user) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4 border-b border-gray-200", children: user.nombre }),
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4 border-b border-gray-200", children: user.apellidos }),
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4 border-b border-gray-200", children: user.identificacion }),
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4 border-b border-gray-200", children: user.correo_electronico }),
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4 border-b border-gray-200", children: user.rol }),
        /* @__PURE__ */ jsxs("td", { className: "py-2 px-4 border-b border-gray-200", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "text-blue-500 mr-2",
              onClick: () => handleEditUser(user),
              children: "Editar"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "text-red-500",
              onClick: () => handleDeleteUser(user.id),
              children: "Eliminar"
            }
          )
        ] })
      ] }, user.id)) })
    ] }),
    isModalVisible && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-md w-full max-w-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4", children: editingUser ? "Editar Usuario" : "Crear Usuario" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            handleCreateUser();
          },
          children: [
            error && /* @__PURE__ */ jsx("p", { className: "text-red-500 mb-4", children: error }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2 ", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold mb-2 w-32 ", children: "Nombre" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "nombre",
                  value: form.nombre,
                  onChange: handleChange,
                  className: "w-full p-2 border border-gray-300 rounded",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4  flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold mb-2 w-32", children: "Apellidos" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "apellidos",
                  value: form.apellidos,
                  onChange: handleChange,
                  className: "w-full p-2 border border-gray-300 rounded",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4  flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold mb-2 w-32", children: "Identificación" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  name: "identificacion",
                  value: form.identificacion,
                  onChange: handleChange,
                  className: "w-full p-2 border border-gray-300 rounded",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4  flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold mb-2 w-32", children: "Correo Electrónico" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  name: "correo_electronico",
                  value: form.correo_electronico,
                  onChange: handleChange,
                  className: "w-full p-2 border border-gray-300 rounded",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4  flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold mb-2 w-32", children: "Rol" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "rol",
                  value: form.rol,
                  onChange: handleChange,
                  className: "w-full p-2 border border-gray-300 rounded",
                  required: true,
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Seleccionar Rol" }),
                    /* @__PURE__ */ jsx("option", { value: "admin", children: "Administrador" }),
                    /* @__PURE__ */ jsx("option", { value: "user", children: "Usuario" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4  flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold mb-2 w-32", children: "Contraseña" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "password",
                  name: "password",
                  value: form.password,
                  placeholder: "********",
                  onChange: handleChange,
                  className: "w-full p-2 border border-gray-300 rounded",
                  required: !editingUser
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-end", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "bg-gray-500 text-white px-4 py-2 rounded mr-2",
                  onClick: () => {
                    setIsModalVisible(false);
                    setEditingUser(null);
                    setForm({
                      nombre: "",
                      apellidos: "",
                      identificacion: "",
                      correo_electronico: "",
                      rol: "",
                      password: ""
                    });
                  },
                  children: "Cancelar"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "bg-blue-500 text-white px-4 py-2 rounded",
                  children: editingUser ? "Actualizar Usuario" : "Crear Usuario"
                }
              )
            ] })
          ]
        }
      )
    ] }) })
  ] });
};

const APIURL$3 = `${BACKENDURL}/category.php`;
const ProductForm = ({
  nombre,
  setNombre,
  descripcion,
  setDescripcion,
  precio,
  setPrecio,
  cantidad,
  setCantidad,
  categoriaId,
  setCategoriaId,
  isEditing,
  handleCreateProduct,
  handleUpdateProduct,
  disponibilidad,
  setDisponibilidad,
  imagen,
  setImagen,
  setIsEditing
}) => {
  const [categories, setCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState("");
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${APIURL$3}?action=categories`);
      console.log(response);
      const data = await response.json();
      setCategories(data);
      console.log(data);
    } catch (err) {
      console.error("Error al obtener las categorías");
    }
  };
  const handleClear = () => {
    setNombre("");
    setDescripcion("");
    setPrecio(0);
    setCantidad(0);
    setCategoriaId(1);
    setDisponibilidad(0);
    setImagen("");
    setImagePreview("");
    setIsEditing(false);
    const fileInput = document.querySelector(
      "input[type='file']"
    );
    if (fileInput) {
      fileInput.value = "";
    }
  };
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2  ", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold w-40", children: "Nombre de Producto" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Nombre",
              value: nombre,
              onChange: (e) => setNombre(e.target.value),
              className: "border p-2 mr-2 rounded-md flex-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold w-40", children: "Descripción" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Descripción",
              value: descripcion,
              onChange: (e) => setDescripcion(e.target.value),
              className: "border p-2 mr-2 rounded-md flex-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full justify-between flex-wrap gap-2 ", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold w-40", children: "Precio" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                placeholder: "Precio",
                value: precio,
                onChange: (e) => setPrecio(parseFloat(e.target.value)),
                className: "border p-2 mr-2 rounded-md flex-1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "Cantidad" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                placeholder: "Cantidad",
                value: cantidad,
                onChange: (e) => setCantidad(parseInt(e.target.value)),
                className: "border p-2 mr-2 rounded-md "
              }
            )
          ] }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full justify-between flex-wrap gap-2 ", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold w-40", children: "Categoría" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: categoriaId,
                onChange: (e) => setCategoriaId(parseInt(e.target.value)),
                className: "border p-2 mr-2 rounded-md flex-1",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Selecciona una categoría" }),
                  categories.map((category) => /* @__PURE__ */ jsx("option", { value: category.id, children: category.nombre }, category.id))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold ", children: "Disponibilidad" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: disponibilidad,
                onChange: (e) => setDisponibilidad(e.target.value),
                className: "border p-2 mr-2 rounded-md flex-1",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "1", children: "Disponible" }),
                  /* @__PURE__ */ jsx("option", { value: "0", children: "No Disponible" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold w-40", children: "Imagen" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              className: "border p-2 mr-2 rounded-md flex-1",
              accept: "image/*",
              onChange: handleAddImage
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1 bg-slate-200 rounded-sm max-h-56", children: imagePreview && /* @__PURE__ */ jsx(
        "img",
        {
          src: imagePreview,
          alt: "preview",
          className: "w-full h-full rounded-sm object-contain"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end my-3", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-red-500 text-white p-2 rounded", onClick: handleClear, children: "Cancelar" }),
      isEditing ? /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleUpdateProduct,
          className: "bg-blue-500 text-white p-2 rounded",
          children: "Actualizar Producto"
        }
      ) : /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleCreateProduct,
          className: "bg-green-500 text-white p-2 rounded",
          children: "Crear Producto"
        }
      )
    ] })
  ] });
};

const APIURL$2 = `${BACKENDURL}/index.php`;
const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [disponibilidad, setDisponibilidad] = useState(0);
  const [imagen, setImagen] = useState("");
  const [categoriaId, setCategoriaId] = useState(1);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${APIURL$2}?action=products`);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (err) {
      setError("Error al obtener los productos");
    }
  };
  console.log(products);
  const handleCreateProduct = async () => {
    const fData = new FormData();
    fData.append("nombre", nombre);
    fData.append("descripcion", descripcion);
    fData.append("precio", precio.toString());
    fData.append("cantidad", cantidad.toString());
    fData.append("disponibilidad", disponibilidad.toString());
    fData.append("categoria_id", categoriaId.toString());
    fData.append("imagen", imagen);
    fData.append("contexto", "1");
    try {
      const response = await fetch(`${APIURL$2}`, {
        method: "POST",
        body: fData
      });
      if (response.ok) {
        fetchProducts();
        setNombre("");
        setDescripcion("");
        setPrecio(0);
        setCantidad(0);
        setCategoriaId(1);
      } else {
        setError("Error al crear el producto");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };
  const handleEditProduct = (product) => {
    setIsEditing(true);
    setEditingProductId(product.id);
    setNombre(product.nombre);
    setDescripcion(product.descripcion);
    setPrecio(product.precio);
    setCantidad(product.cantidad);
    setCategoriaId(product.categoria_id);
  };
  const handleUpdateProduct = async () => {
    if (editingProductId === null) return;
    const fData = new FormData();
    fData.append("nombre", nombre);
    fData.append("descripcion", descripcion);
    fData.append("precio", precio.toString());
    fData.append("cantidad", cantidad.toString());
    fData.append("disponibilidad", disponibilidad.toString());
    fData.append("categoria_id", categoriaId.toString());
    fData.append("imagen", imagen);
    fData.append("id", editingProductId.toString());
    fData.append("contexto", "2");
    try {
      const response = await fetch(`${APIURL$2}`, {
        method: "POST",
        body: fData
      });
      if (response.ok) {
        fetchProducts();
        setNombre("");
        setDescripcion("");
        setImagen("");
        setPrecio(0);
        setCantidad(0);
        setCategoriaId(1);
        setIsEditing(false);
        setEditingProductId(null);
      } else {
        setError("Error al actualizar el producto");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };
  const handleDeleteProduct = async (id) => {
    const fData = new FormData();
    fData.append("id", id.toString());
    fData.append("contexto", "3");
    try {
      const response = await fetch(`${APIURL$2}`, {
        method: "POST",
        body: fData
      });
      if (response.ok) {
        fetchProducts();
      } else {
        setError("Error al eliminar el producto");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4", children: "Gestión de Productos" }),
    error && /* @__PURE__ */ jsx("p", { className: "text-red-500 mb-4", children: error }),
    /* @__PURE__ */ jsx(
      ProductForm,
      {
        nombre,
        setNombre,
        descripcion,
        setDescripcion,
        precio,
        setPrecio,
        cantidad,
        setCantidad,
        categoriaId,
        setCategoriaId,
        handleCreateProduct,
        handleUpdateProduct,
        isEditing,
        disponibilidad,
        setDisponibilidad,
        imagen,
        setImagen,
        setIsEditing
      }
    ),
    /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "py-2", children: "Nombre" }),
        /* @__PURE__ */ jsx("th", { className: "py-2", children: "Descripción" }),
        /* @__PURE__ */ jsx("th", { className: "py-2", children: "Precio" }),
        /* @__PURE__ */ jsx("th", { className: "py-2", children: "Cantidad" }),
        /* @__PURE__ */ jsx("th", { className: "py-2", children: "Acciones" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: products.map((product) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: product.nombre }),
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: product.descripcion }),
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: product.precio }),
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: product.cantidad }),
        /* @__PURE__ */ jsxs("td", { className: "py-2 px-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleEditProduct(product),
              className: "bg-yellow-500 text-white p-1 rounded mr-2",
              children: "Editar"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleDeleteProduct(product.id),
              className: "bg-red-500 text-white p-1 rounded",
              children: "Eliminar"
            }
          )
        ] })
      ] }, product.id)) })
    ] })
  ] });
};

const APIURL$1 = `${BACKENDURL}/category.php`;
const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(
    null
  );
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${APIURL$1}?action=categories`);
      console.log(response);
      const data = await response.json();
      setCategories(data);
      console.log(data);
    } catch (err) {
      setError("Error al obtener las categorías");
    }
  };
  const handleCreateCategory = async () => {
    const fData = new FormData();
    fData.append("nombre", nombre);
    fData.append("descripcion", descripcion);
    fData.append("action", "create");
    try {
      const response = await fetch(`${APIURL$1}`, {
        method: "POST",
        body: fData
      });
      if (response.ok) {
        console.log(response);
        fetchCategories();
        setNombre("");
        setDescripcion("");
      } else {
        setError("Error al crear la categoría");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };
  const handleEditCategory = (category) => {
    setIsEditing(true);
    setEditingCategoryId(category.id);
    setNombre(category.nombre);
    setDescripcion(category.descripcion);
  };
  const handleUpdateCategory = async () => {
    if (editingCategoryId === null) return;
    const fData = new FormData();
    fData.append("nombre", nombre);
    fData.append("descripcion", descripcion);
    fData.append("id", editingCategoryId.toString());
    fData.append("action", "update");
    try {
      const response = await fetch(`${APIURL$1}`, {
        method: "POST",
        body: fData
      });
      if (response.ok) {
        console.log(response);
        fetchCategories();
        setNombre("");
        setDescripcion("");
        setIsEditing(false);
        setEditingCategoryId(null);
      } else {
        setError("Error al actualizar la categoría");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };
  const handleDeleteCategory = async (id) => {
    const fData = new FormData();
    fData.append("id", id.toString());
    fData.append("action", "delete");
    try {
      const response = await fetch(`${APIURL$1}`, {
        method: "POST",
        body: fData
      });
      if (response.ok) {
        console.log(response);
        fetchCategories();
      } else {
        setError("Error al eliminar la categoría");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4", children: "Gestión de Categorías" }),
    error && /* @__PURE__ */ jsx("p", { className: "text-red-500 mb-4", children: error }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Nombre",
          value: nombre,
          onChange: (e) => setNombre(e.target.value),
          className: "border p-2 mr-2"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Descripción",
          value: descripcion,
          onChange: (e) => setDescripcion(e.target.value),
          className: "border p-2 mr-2"
        }
      ),
      isEditing ? /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleUpdateCategory,
          className: "bg-blue-500 text-white p-2 rounded",
          children: "Actualizar Categoría"
        }
      ) : /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleCreateCategory,
          className: "bg-green-500 text-white p-2 rounded",
          children: "Crear Categoría"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "py-2", children: "Nombre" }),
        /* @__PURE__ */ jsx("th", { className: "py-2", children: "Descripción" }),
        /* @__PURE__ */ jsx("th", { className: "py-2", children: "Acciones" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: categories.map((category) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: category.nombre }),
        /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: category.descripcion }),
        /* @__PURE__ */ jsxs("td", { className: "py-2 px-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleEditCategory(category),
              className: "bg-yellow-500 text-white p-1 rounded mr-2",
              children: "Editar"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleDeleteCategory(category.id),
              className: "bg-red-500 text-white p-1 rounded",
              children: "Eliminar"
            }
          )
        ] })
      ] }, category.id)) })
    ] })
  ] });
};

const AdminDashboard = ({ handleLogout }) => {
  const [selectedModule, setSelectedModule] = useState("productos");
  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen", children: [
    /* @__PURE__ */ jsx("div", { className: "w-64 bg-gray-800 text-white p-6 flex flex-col justify-between", children: /* @__PURE__ */ jsxs("nav", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-8 text-center", children: "Admin Panel" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs(
          "li",
          {
            className: `flex items-center mb-4 p-2 cursor-pointer rounded-md ${selectedModule === "productos" ? "bg-gray-700" : "hover:bg-gray-700"}`,
            onClick: () => handleModuleClick("productos"),
            children: [
              /* @__PURE__ */ jsx(FiBox, { className: "mr-3" }),
              " Gestión de Productos"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "li",
          {
            className: `flex items-center mb-4 p-2 cursor-pointer rounded-md ${selectedModule === "categorias" ? "bg-gray-700" : "hover:bg-gray-700"}`,
            onClick: () => handleModuleClick("categorias"),
            children: [
              /* @__PURE__ */ jsx(FiTag, { className: "mr-3" }),
              " Gestión de Categorías"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "li",
          {
            className: `flex items-center mb-4 p-2 cursor-pointer rounded-md ${selectedModule === "usuarios" ? "bg-gray-700" : "hover:bg-gray-700"}`,
            onClick: () => handleModuleClick("usuarios"),
            children: [
              /* @__PURE__ */ jsx(FiUsers, { className: "mr-3" }),
              " Gestión de Usuarios"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleLogout,
          className: "bg-red-500 text-white p-2 rounded w-full mt-8 flex items-center ",
          children: [
            /* @__PURE__ */ jsx(FiLogOut, { className: "mr-3" }),
            " Cerrar Sesión"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 p-8 bg-gray-100", children: [
      selectedModule === "usuarios" && /* @__PURE__ */ jsx(UserManagement, {}),
      selectedModule === "productos" && /* @__PURE__ */ jsx(ProductManagement, {}),
      selectedModule === "categorias" && /* @__PURE__ */ jsx(CategoryManagement, {}),
      !selectedModule && /* @__PURE__ */ jsx("div", { children: "Seleccione un módulo del menú" })
    ] })
  ] });
};

const APIURL = `${BACKENDURL}/user.php`;
const Login = ({ isLogged, setIsLogged, loading, setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleLogin = async (e) => {
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
        body: fData
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
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center min-h-screen bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md w-full max-w-sm", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-6 text-center text-gray-800", children: "Iniciar Sesión" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700",
            children: "Correo Electrónico"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-700",
            children: "Contraseña"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            id: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            required: true
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mb-4", children: error }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Iniciar Sesión"
        }
      )
    ] })
  ] }) });
};

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
    return /* @__PURE__ */ jsx("div", { className: "w-screen h-screen flex items-center justify-center", children: "Cargando..." });
  }
  return /* @__PURE__ */ jsx("div", { className: "pt-24", children: isLogged ? /* @__PURE__ */ jsx(AdminDashboard, { handleLogout }) : /* @__PURE__ */ jsx(
    Login,
    {
      isLogged,
      setIsLogged,
      loading,
      setLoading
    }
  ) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="  mx-auto min-h-screen"> ${renderComponent($$result2, "AdminMain", AdminMain, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Admin/AdminMain", "client:component-export": "default" })} </main> ` })}`;
}, "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/USUARIO/OneDrive/Documentos/PixelFox/Talavera/talavera/src/pages/admin/index.astro";
const $$url = "/admin";

export { $$Index as default, $$file as file, $$url as url };
