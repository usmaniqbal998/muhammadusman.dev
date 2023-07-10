import Image from "next/image";
import { linkIcon } from "../Icons";
import Link from "next/link";

interface Props {
  imageSrc: string;
  title: string;
  excerpt: string;
  url: string;
  thumbnail?: string;
}

const FeaturedPostItem: React.FunctionComponent<Props> = ({
  imageSrc,
  title,
  excerpt,
  thumbnail,
  url,
}) => {
  return (
    <Link href={url}>
      <div className="w-full cursor-pointer rounded-card p-5 ring-2 ring-stroke hover:bg-stroke">
        <div className="w-full overflow-hidden rounded-card object-cover">
          <Image
            className="h-auto w-full object-cover"
            alt={title}
            src={imageSrc}
            width={400}
            height={400}
            placeholder="blur"
            blurDataURL={thumbnail}
          />
        </div>
        <h4 className="mt-5 text-base font-bold sm:text-lg">{title}</h4>
        <p className="mt-3 text-text">{excerpt}</p>
        <div className=" mt-3 flex gap-2 align-bottom">
          <button className=" text-accent">Read More</button>
          {linkIcon}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostItem;
