"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
  publishDate: string;
}

export const Views = ({ slug, publishDate }: Props) => {
  const [views, setViews] = useState({ count: 0, loading: true });

  useEffect(() => {
    async function updateViews() {
      if (!window.sessionStorage.getItem(slug)) {
        window.sessionStorage.setItem(slug, "true");

        await fetch(`/postview/${slug}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug }),
        });
      }
    }
    async function getViews() {
      let views = await fetch(`/postview/${slug}`);
      const { data } = await views.json();
      setViews({ count: data.views, loading: false });
    }
    updateViews();
    getViews();
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
