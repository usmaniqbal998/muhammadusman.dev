import Avatar from "@/components/avatar";
import FeaturedPostItem from "@/components/featuredPostItem";
import Image from "next/image";

function Greetings() {
  return (
    <div className="mt-14">
      <h1 className="text-3xl font-semibold">
        I&apos;m <br /> Muhammad Usman 👋
      </h1>
      <p className="mt-6 font-normal leading-[170%] text-text">
        I&apos;m a senior frontend engineer at IKEA. Here, I share my knowledge,
        experiences, and insights as I navigate the ever-changing landscape of
        web development.
      </p>

      <button className="mt-6 cursor-pointer rounded-btn bg-accent px-5 py-3">
        Say Hello
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="container sm:container">
        <section>
          <Avatar />
          <Greetings />
        </section>

        <section className="mt-[52px]">
          <h2 className="text-2xl font-medium">Featured Posts</h2>
          {/* <ul className="mt-7 flex flex-col gap-5">
            {[1, 2, 3].map((item) => (
              <li key={item}>
                <FeaturedPostItem
                  imageSrc="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/architecture.png?v=1.0"
                  title="Some Dummy - Post"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                />
              </li>
            ))}
          </ul> */}
        </section>
      </div>
    </main>
  );
}
