import Image from "next/image";

interface Props {
  imageSrc: string;
  title: string;
  excerpt: string;
  thumbnail?: string;
}

const FeaturedPostItem: React.FunctionComponent<Props> = ({
  imageSrc,
  title,
  excerpt,
  thumbnail,
}) => {
  return (
    <div className="w-full cursor-pointer rounded-card p-5 ring-2 ring-stroke hover:bg-stroke">
      <div className="h-56 w-full overflow-hidden rounded-card object-cover sm:h-44 ">
        <Image
          className="h-full w-full bg-cover object-cover"
          alt={title}
          src={imageSrc}
          width={300}
          height={300}
          unoptimized
          placeholder="blur"
          blurDataURL={thumbnail}
        />
      </div>
      <h4 className="mt-5 text-base font-bold sm:text-lg">{title}</h4>
      <p className="mt-3 text-text">{excerpt}</p>
      <div className=" mt-3 flex gap-2 align-bottom">
        <button className=" text-accent">Read More</button>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[4px]"
        >
          <path
            d="M0.5 9.5L9.5 0.5"
            stroke="#8B3DFF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.1875 0.5H9.5V7.8125"
            stroke="#8B3DFF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default FeaturedPostItem;
