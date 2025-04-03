"use client";
import { useState, useEffect } from "react";
import { Rubik_Glitch } from "next/font/google";
import { format } from "path";

const rubik = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [booleanTime, setBooleanTime] = useState(25 * 60);
  const [stopTracker, setStopTreacker] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (!stopTracker) return;
    const interval = setInterval(() => {
      setBooleanTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [stopTracker]);

  function formatTime(time: number) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return `${min}:${sec <= 10 ? "0" + sec : sec}`;
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <header className="flex justify-between px-20 py-10">
          <span className="flex gap-6 items-center">
           {isDarkMode ? '' :  <img
              src="./pomadoroLogoimage.png"
              alt="none"
              className="h-[28px]"
            /> }
            <div className={`${rubik.className} w-[79px] h-[26px] text-lg`}>
              404sq
            </div>
          </span>
          <span className="flex gap-4">
            <button
              className="w-[108px] p-2 border-3 px-4 rounded-md cursor-pointer"
              onClick={() => alert("Войти")}
            >
              Sign Up
            </button>
            <button
              className="buttonSingIn"
              onClick={() => alert("Зарегистрироваться")}
            >
              Sign In
            </button>
          </span>
        </header>

        <main className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center">
            <span className="text-[128px] font-cursive font-bold tracking-wider">
              {formatTime(booleanTime)}
            </span>
          </div>
          <div className="flex gap-5 mt-6">
            <button
              className="w-[152px] p-2 border-2 px-4 rounded-md hover:bg-gray-800 hover:text-gray-300 cursor-pointer"
              onClick={() => setStopTreacker(false)}
            >
              Pause
            </button>
            <button className="cursor-pointer">
              {isDarkMode ? (
                <img
                  src="reset-btn (1).svg"
                  alt="reset"
                  onClick={() => {
                    setBooleanTime(25 * 60);
                    setStopTreacker(false);
                  }}
                />
              ) : (
                <img
                  src="reset-btn.svg "
                  alt="reset"
                  onClick={() => {
                    setBooleanTime(25 * 60);
                    setStopTreacker(false);
                  }}
                />
              )}
            </button>
            <button
              className="w-[152px] p-2 border-2 px-4 rounded-md hover:bg-gray-800 hover:text-gray-300 cursor-pointer"
              onClick={() => setStopTreacker(true)}
            >
              Start
            </button>
          </div>
        </main>
        <footer className="flex justify-end p-4 ">
          <span>
            {isDarkMode ? (
              <img
                src="SVGRepo_iconCarrier.svg"
                alt="theme"
                className="cursor-pointer"
                onClick={toggleTheme}
              />
            ) : (
              <img
                src="theme-btn.svg"
                alt="theme"
                className="cursor-pointer"
                onClick={toggleTheme}
              />
            )}
          </span>
        </footer>
      </div>
    </>
  );
}
