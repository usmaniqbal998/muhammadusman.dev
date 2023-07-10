import GeneralPostItem from "@/components/generalPostItem";

import { allPosts } from "@/.contentlayer/generated";
import Avatar from "@/components/avatar";

const AllPosts = () => {
  return (
    <>
      <Avatar />

      <section className="mt-[52px]">
        <ul className="mt-7 flex flex-col gap-5">
          {allPosts.map((item) => (
            <li
              key={item.title}
              className="rounded border-b border-stroke py-3  last:border-0 hover:cursor-pointer hover:bg-contrast sm:pb-4"
            >
              <GeneralPostItem
                url={item.url}
                title={item.title}
                excerpt={item.description}
                date={item.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AllPosts;
