"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {};

const SignForm = (props: Props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const Register = () => {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
    };

    axios
      .post("/api/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        router.push("/signin");
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-xl font-medium mb-4">Registrarse</h1>
        <label htmlFor="name" className="mb-2">
          Nombre
        </label>
        <input
          type="text"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="name"
          value={user.name}
          placeholder="Nombre"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
          type="email"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="email"
          value={user.email}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password" className="mb-2">
          Contraseña
        </label>
        <input
          type="password"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="password"
          value={user.password}
          placeholder="Contraseña"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={Register}
          className="p-2 border bg-purple-500 text-white hover:bg-purple-700 rounded-lg border-gray-300 mt-2 mb-4 focus:outline-none"
        >
          Registrarse
        </button>
        <Link
          href="/signin"
          className="text-sm text-center mt-5 text-neutral-500 outline-none focus:outline-none underline hover:text-neutral-950"
        >
          ¿Ya tienes una cuenta?, Inicia sesión
        </Link>
        <Link
          href="/"
          className="text-center mt-2 underline text-neutral-700 hover:text-neutral-950"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default SignForm;
