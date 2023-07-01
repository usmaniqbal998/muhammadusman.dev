import Image from "next/image";
import profilePic from "../public/sticker.png";

export default function Home() {
  return (
    <main>
      <div className="container sm:container">
        <Image
          className="mt-9 h-11 w-11 overflow-hidden rounded-full object-contain ring-accent"
          src={profilePic}
          alt="Muhammad Usman"
        />

        <div className="mt-14">
          <h1 className="text-3xl font-semibold">
            I&apos;m <br /> Muhammad Usman 👋
          </h1>
          <p className="mt-6 font-normal leading-[170%] text-text">
            I&apos;m a senior frontend engineer at IKEA. Here, I share my
            knowledge, experiences, and insights as I navigate the ever-changing
            landscape of web development.
          </p>

          <button className="mt-6 rounded-btn bg-accent px-5 py-3">
            Say Hello
          </button>
        </div>
      </div>
    </main>
  );
}

/* I'm a senior frontend engineer at IKEA. Here, I share my knowledge, experiences, and insights as I navigate the ever-changing landscape of web development. */
