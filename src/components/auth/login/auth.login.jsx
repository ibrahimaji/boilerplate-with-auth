"use client"
import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useLogin } from "./hooks/userLogin";
import { useState } from "react";

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { isLoading, handleChange, handleSubmit } = useLogin()

  return (
    <main className="w-[360px] space-y-8">
      <div className="flex space-x-4">
        <Image src="/tut-wuri.png" width={40} />
        <p className="text-xs text-slate-600">Siste Informasi Perpustakaan UPT SDN Wirogunan Kota Pasuruan</p>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold">Selamat Datang</h3>
      </div>
      <div className="space-y-2">
        <Input name="email" type="email" label="Email" placeholder="Masukkan Email Anda" className="w-full focus:outline-none" variant="bordered" onChange={handleChange} />
        <Input
          label="Password"
          name="password"
          variant="bordered"
          placeholder="Masukkan Password Anda"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="w-full"
          onChange={handleChange}
        />
        <Button color="primary" className="w-full" onClick={handleSubmit} isLoading={isLoading}>Login</Button>
      </div>
    </main >
  );
}
