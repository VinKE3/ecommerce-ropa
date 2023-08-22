"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";

type Props = {};

const SigninForm = (props: Props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const Login = () => {
    try {
      signIn("credentials", {
        redirect: false,
        email: user.email,
        password: user.password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-xl font-medium mb-4">Iniciar Sesión</h1>
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
          onClick={Login}
          className="p-2 border bg-purple-500 text-white hover:bg-purple-700 rounded-lg border-gray-300 mt-2 mb-4 focus:outline-none"
        >
          Iniciar Sesión
        </button>
        <Link
          href="/singup"
          className="text-sm text-center mt-5 text-neutral-500 outline-none focus:outline-none underline hover:text-neutral-950"
        >
          ¿No tienes una cuenta?, Registrate
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

export default SigninForm;
