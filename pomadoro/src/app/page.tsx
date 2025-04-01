import { subscribe } from "diagnostics_channel";
import { Rubik_Glitch } from "next/font/google";

const rubik = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //  asd
    //   </div>
    <>
      <header className="flex justify-between px-20 py-10">
        <span className="flex gap-6 items-center">
          <img
            src="./pomadoroLogoimage.png"
            alt="none"
            className="h-[28px]"
          ></img>
          <div className={`${rubik.className} w-[79px] h-[26px]`}>404sq</div>
        </span>
        <span className="flex gap-4">
          <button className="border-1 px-4 rounded-md">Sing Up</button>
          <button className="border-1 px-4 rounded-md">Sing In</button>
        </span>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
