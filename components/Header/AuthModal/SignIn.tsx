"use client";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignIn = ({ switchToSignUp }: { switchToSignUp: () => void }) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center text-xl">Đăng nhập</DialogTitle>
      </DialogHeader>

      <form className="space-y-4">
        <div className="space-y-1">
          <Label>Email</Label>
          <Input type="email" />
        </div>

        <div className="space-y-1">
          <Label>Mật khẩu</Label>
          <Input type="password" />
        </div>

        <Button className="w-full">Đăng nhập</Button>

        <p className="text-sm text-center">
          Chưa có tài khoản?{" "}
          <button
            type="button"
            onClick={switchToSignUp}
            className="font-semibold text-primary hover:underline"
          >
            Đăng ký
          </button>
        </p>
      </form>
    </>
  );
};

export default SignIn;
