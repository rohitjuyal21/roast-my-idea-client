"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

const LoginMain = () => {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google`;
  };

  return (
    <div className="flex-1 flex items-center justify-center z-10">
      <div className="flex flex-col items-center">
        <div className="relative flex gap-1.5 items-end h-10">
          <Image src="/svgs/logoIcon.svg" alt="logo" height={100} width={100} />
          <h2 className="text-8xl font-bold font-roadrage">roast my idea</h2>
        </div>
        <p className="text-xl mt-6 text-center mb-12">
          Share your idea with the world and get real, candid feedback
        </p>
        <Button
          onClick={handleLogin}
          variant="outline"
          size="lg"
          className="flex gap-2"
        >
          <Image src="/images/google.png" alt="logo" height={32} width={32} />
          Login with google
        </Button>
      </div>
    </div>
  );
};

export default LoginMain;
