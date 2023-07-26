import React from "react";
import Main from "@/layouts/main";
import Link from "next/link";

export default function Login() {
  return (
    <Main>

      <section className="text-center">
      
        <p className="text-red">Login</p>
        <p>Login to your account?</p>
        <div className="flex flex-col">
          <input type="text" placeholder="email" value="" />
          <input type="text" placeholder="password" value="" />
        </div>
        <div>
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox">Keep me signed in</label>
          <Link href="#">Forgot password?</Link>
        </div>
        <div>
          <button>Facebook</button>
          <button>Gmail</button>
        </div>
      </section>
    </Main>
  );
}
