"use client";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUp = ({ switchToSignIn }: { switchToSignIn: () => void }) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center text-xl">Đăng ký</DialogTitle>
      </DialogHeader>

      <form className="space-y-4">
        <div className="space-y-1">
          <Label>Tên người dùng</Label>
          <Input />
        </div>

        <div className="space-y-1">
          <Label>Email</Label>
          <Input type="email" />
        </div>

        <div className="space-y-1">
          <Label>Mật khẩu</Label>
          <Input type="password" />
        </div>

        <Button className="w-full">Tạo tài khoản</Button>

        <p className="text-sm text-center">
          Đã có tài khoản?{" "}
          <button
            type="button"
            onClick={switchToSignIn}
            className="font-semibold text-primary hover:underline"
          >
            Đăng nhập
          </button>
        </p>
      </form>
    </>
  );
};

export default SignUp;
