"use client";

import { getViews, updateViews } from "@/app/api";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
  publishDate: string;
}

export const Views = ({ slug, publishDate }: Props) => {
  const [views, setViews] = useState({ count: 0, loading: true });

  useEffect(() => {
    updateViews(slug);
    getViews(slug).then((views: any) => {
      setViews({ count: views || 0, loading: false });
    });
  }, [slug]);

  return (
    <div className="mt-4 flex justify-between">
      <p className="text-lg text-text">
        {dayjs(publishDate).format("DD MMM, YYYY")}
      </p>

      <p className="text-lg text-text">
        {views.loading ? "loading views ..." : `${views.count ?? 0} views`}
      </p>
    </div>
  );
};

export default Views;
