"use client";
import { getViews } from "@/app/api";
import { useEffect, useState } from "react";

const PostView = ({ slug }: { slug: string }) => {
  const [views, setViews] = useState({ count: 0, loading: true });

  useEffect(() => {
    getViews(slug).then((views: any) => {
      setViews({ count: views ?? 0, loading: false });
    });
  }, [slug]);

  if (views.loading) {
    return <p className="flex items-center gap-2 pr-2 text-text">...</p>;
  }

  return (
    <p className="flex items-center gap-2 pr-2 text-text">
      {views.count ?? 0} views
    </p>
  );
};

export default PostView;
