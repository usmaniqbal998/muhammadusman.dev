import { allPosts } from "@/.contentlayer/generated";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import Avatar from "@/components/avatar";

interface MdxProps {
  code: string;
}

const Paragraphs = ({ children }) => {
  return (
    <p className="spac mb-5 mt-5 text-lg font-normal leading-8 tracking-wide">
      {children}
    </p>
  );
};

const Headings = (props) => {
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

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="post-content mt-20">
      <Component components={{ ...components }} />
    </article>
  );
}

async function Post({ params }: Params) {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Avatar />

      <section className="relative mb-28 mt-28">
        <h1 className="text-4xl font-semibold">{post.title}</h1>
        <Mdx code={post.body.code} />
      </section>
    </>
  );
}

export default Post;
