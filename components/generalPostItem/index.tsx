import dayjs from "dayjs";
import Link from "next/link";
import PostView from "./views";

interface Props {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  slug: string;
}

const GeneralPostItem: React.FunctionComponent<Props> = async ({
  title,
  excerpt,
  date,
  url,
  slug,
}) => {
  return (
    <Link href={url}>
      <div className="flex w-full min-w-0 items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-card text-center">
          <p className="w-5/6">{dayjs(date).format("DD MMM")}</p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex justify-between gap-5">
            <h4 className="text-base font-semibold sm:text-lg">{title}</h4>
            <PostView slug={slug} />
          </div>
          <p className="text-text">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default GeneralPostItem;
