import FeaturedPostItem from "@/components/featuredPostItem";
import GeneralPostItem from "@/components/generalPostItem";

import { allPosts } from "contentlayer/generated";
import { footerIllustration } from "@/components/Icons";
import Avatar from "@/components/avatar";

function Greetings() {
  return (
    <section>
      <div className="relative mt-14 md:mt-28">
        <h1 className="text-3xl font-semibold md:text-4xl">
          I&apos;m Muhammad Usman 👋
        </h1>
        <p className="mt-6 font-normal leading-[170%] text-text md:max-w-xl md:text-lg">
          Welcome to my website! I&apos;m a senior frontend engineer at IKEA.
          Here, I share my knowledge, experiences, and insights as I navigate
          the ever-changing landscape of web development.
        </p>

        <button className="mt-6 cursor-pointer rounded-btn bg-accent px-5 py-3 md:text-lg">
          Say Hello
        </button>
        <span className=" absolute -right-28 -top-12 hidden  h-72 w-72 rounded-full bg-pattern blur-2xl	lg:block" />
      </div>
    </section>
  );
}

function FeaturedPosts() {
  return (
    <section className="mt-[52px]">
      <h2 className="text-2xl font-medium">Featured Posts</h2>
      <ul className="mt-7 flex flex-col gap-5 sm:flex-row">
        {allPosts
          .filter((item) => item.featured)
          .map((item) => (
            <li key={item.title}>
              <FeaturedPostItem
                url={item.url}
                imageSrc={item.coverImage || ""}
                title={item.title}
                excerpt={item.description}
                thumbnail={item.thumbnail}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}

function LatestPosts() {
  return (
    <section className="mt-[52px]">
      <h2 className="text-2xl font-medium">All Posts</h2>
      <ul className="mt-7 flex flex-col gap-5">
        {allPosts.slice(0, 5).map((item) => (
          <li
            key={item.title}
            className="border-b border-stroke pb-3 last:border-0 hover:cursor-pointer hover:bg-contrast sm:pb-4"
          >
            <GeneralPostItem
              title={item.title}
              excerpt={item.description}
              date={item.date}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <section className="mt-[70px]">
      <div className="mb-10 flex w-full flex-col items-center rounded-card bg-card p-7 text-center">
        {footerIllustration}
        <h4 className="mt-6 text-3xl font-medium">
          Never miss
          <br /> the latest news
        </h4>
        <p className="mt-5 rounded-input text-text">
          I promise to be careful with your time
        </p>
        <div className=" mt-6 flex w-full max-w-sm items-center justify-between gap-2 overflow-hidden rounded-input ring-1 ring-stroke">
          <input
            className="h-11  rounded-input bg-card px-4 py-3 placeholder:text-text focus:outline-none"
            placeholder="example@gmail.com"
          />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-10 text-center text-text">
        <p>Copyright 2023 - Muhammad Usman</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Avatar />
      <Greetings />
      <FeaturedPosts />
      <LatestPosts />
      <Footer />
    </>
  );
}
