import { allPosts } from "@/.contentlayer/generated";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const Paragraphs = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) => {
  return (
    <p
      className="spac mb-5 mt-5 text-lg font-normal leading-8 tracking-wide"
      {...props}
    >
      {props.children}
    </p>
  );
};

const Headings = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  return (
    <h3 className="text-3xl font-medium" {...props}>
      {props.children}
    </h3>
  );
};

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Blockquote = (props) => {
  return (
    <blockquote
      {...props}
      className=" my-4 border-l-4 border-accent bg-card p-4"
    >
      {props.children}
    </blockquote>
  );
};

const components = {
  p: Paragraphs,
  h3: Headings,
  a: CustomLink,
  blockquote: Blockquote,
};

function Mdx({ code }) {
  const Component = useMDXComponent(code);

  return (
    <article className="post-content mt-20">
      <Component components={{ ...components }} />
    </article>
  );
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    description,
    coverImage,
    slug,
  } = post;
  const mainImage = `https://muhammadusman.dev${coverImage}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://muhammadusman.dev/blog/${slug}`,
      images: [
        {
          url: mainImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [mainImage],
    },
  };
}

function Post(props) {
  const { params } = props;
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <section className="relative mb-28 mt-28">
        <h1 className="text-4xl font-semibold">{post.title}</h1>
        <Mdx code={post.body.code} />
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default Post;
