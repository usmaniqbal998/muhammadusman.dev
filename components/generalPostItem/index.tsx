import dayjs from "dayjs";

interface Props {
  title: string;
  excerpt: string;
  date: string;
}

const GeneralPostItem: React.FunctionComponent<Props> = ({
  title,
  excerpt,
  date,
}) => {
  return (
    <div className="flex w-full min-w-0 items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-card text-center">
        <p className="w-5/6">{dayjs(date).format("DD MMM")}</p>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex justify-between gap-5">
          <h4 className="text-base font-semibold sm:text-lg">{title}</h4>
          <p className="flex items-center gap-2 text-text">
            45
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="accent h-4 w-4 text-accent"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </p>
        </div>
        <p className="text-text">{excerpt}</p>
      </div>
    </div>
  );
};

export default GeneralPostItem;
