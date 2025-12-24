"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SignIn from "./AuthModal/SignIn";
import SignUp from "./AuthModal/SignUp";

type AuthMode = "signin" | "signup";

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("signin");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-2">
        <DialogTrigger asChild>
          <button
            onClick={() => setMode("signin")}
            className="text-sm font-semibold hover:text-darkColor"
          >
            Đăng nhập
          </button>
        </DialogTrigger>

        <span className="text-sm">/</span>

        <DialogTrigger asChild>
          <button
            onClick={() => setMode("signup")}
            className="text-sm font-semibold hover:text-darkColor"
          >
            Đăng ký
          </button>
        </DialogTrigger>
      </div>

      <DialogContent className="sm:max-w-[420px]">
        {mode === "signin" ? (
          <SignIn switchToSignUp={() => setMode("signup")} />
        ) : (
          <SignUp switchToSignIn={() => setMode("signin")} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
