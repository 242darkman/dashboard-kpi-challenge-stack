"use client";
import Image from "next/image";
import ButtonUsage from "@/components/button";
import { ThemeProvider } from "@mui/material/styles";
import get from "lodash/get.js";
import { login } from "@/app/_api/auth/auth.api.js";
import { theme } from "../app/theme";
import Img from "../assets/imagelogo.png";
import RootLayout from "./layout";
import Logo from "@/assets/logo.png";
import Graph from "../assets/Rectangle21.png";
import { useRouter } from "next/navigation";
import ButtonTest from "@/components/buttonTest";
import { login } from "@/app/_api/auth/auth.api.js";
import get from "lodash/get.js";

export default function Home() {
  // return (
  //   <RootLayout logo={Logo}>

  //   </RootLayout>
  // );

  const router = useRouter();

  const handleLogin = async (username, password) => {
    if (!username || !password) {
      return;
    }
    const response = await login(username, password);
    const errorCodeResponse = get(response, "code");
    if (errorCodeResponse === 401) {
      return;
    }
    router.push("/order");
  };
  const handleButtonClick = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Form Data:", { username, password });
    handleLogin(username, password);
  };

  return (
    <div
      style={{ backgroundColor: "#FAFAFA" }}
      className="min-h-screen bg-gray-100  py-6 flex flex-col justify-center sm:py-12"
    >
      <form>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="max-w-md mx-auto">
            <div className="flex justify-center">
              <h1 className="text-3xl font-semibold text-cyan-800 ">
                Connexion
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border text-gray-900 focus:outline-none  rounded-md"
                    placeholder="Pseudonyme"
                  />
                  <label className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Identifiant
                  </label>
                </div>
                <div className="relative w-98 border-black">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border text-gray-900 focus:outline-none rounded-md"
                    placeholder="Saisissez votre mot de passe"
                  />
                  <label className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Mot de passe
                  </label>
                </div>
                <div className="relative flex justify-center w-96">
                  <ButtonTest
                    buttonText="Se connecter"
                    onClick={handleButtonClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
