import Link from "next/link";
import React from "react";

const Blogspage = () => {
  const allBlogs = [
    {
      id: 1,
      title: "Introduction to Next.js: A Beginner's Guide",
      description:
        "A comprehensive introduction to Next.js, covering key features like server-side rendering, static site generation, and file-based routing.",
    },
    {
      id: 2,
      title: "Building Dynamic Routes with Next.js",
      description:
        "Learn how to create dynamic routes using Next.js' powerful file-based routing system with dynamic parameters.",
    },
    {
      id: 3,
      title: "Next.js Data Fetching: SSR, SSG, and ISR Explained",
      description:
        "Explore different data-fetching methods in Next.js, including server-side rendering, static site generation, and incremental static regeneration.",
    },
    {
      id: 4,
      title: "Optimizing Next.js Applications for Performance",
      description:
        "A guide to improving the performance of Next.js apps through lazy loading, image optimization, and code splitting.",
    },
    {
      id: 5,
      title: "Deploying Next.js Applications on Vercel",
      description:
        "Step-by-step instructions to deploy a Next.js application to Vercel, the platform built by the creators of Next.js.",
    },
    {
      id: 6,
      title: "Understanding API Routes in Next.js",
      description:
        "An introduction to serverless API routes in Next.js, including how to create and use them in your application.",
    },
    {
      id: 7,
      title: "Next.js vs. Create React App: A Detailed Comparison",
      description:
        "A comparison between Next.js and Create React App, focusing on their differences in routing, rendering, and performance.",
    },
    {
      id: 8,
      title: "Integrating Styled Components with Next.js",
      description:
        "Learn how to set up and use Styled Components for CSS-in-JS styling in your Next.js projects.",
    },
    {
      id: 9,
      title: "How to Use Next.js with TypeScript",
      description:
        "A guide to integrating TypeScript into a Next.js application, including setting up types for props, states, and API routes.",
    },
    {
      id: 10,
      title: "Adding SEO to Your Next.js Website",
      description:
        "Tips on how to enhance SEO in Next.js by using the Head component, dynamic metadata, and optimizing for search engines.",
    },
    {
      id: 11,
      title: "Client-Side Rendering in Next.js: When to Use It",
      description:
        "An exploration of when and how to implement client-side rendering in Next.js using fetch APIs or SWR.",
    },
    {
      id: 12,
      title: "Handling Authentication in Next.js with NextAuth.js",
      description:
        "A guide to adding authentication to a Next.js application using NextAuth.js, a popular authentication library.",
    },
    {
      id: 13,
      title: "Implementing Global State Management in Next.js",
      description:
        "Learn how to manage global state in Next.js applications using Redux, Context API, or Zustand.",
    },
    {
      id: 14,
      title: "Using Static Site Generation (SSG) in Next.js",
      description:
        "A deep dive into static site generation (SSG) in Next.js, including examples of using `getStaticProps` and `getStaticPaths`.",
    },
    {
      id: 15,
      title: "Incremental Static Regeneration in Next.js",
      description:
        "A detailed guide on how to use Incremental Static Regeneration (ISR) in Next.js to update static pages after deployment.",
    },
    {
      id: 16,
      title: "Next.js and GraphQL: Building a Full-Stack Application",
      description:
        "Learn how to integrate GraphQL into your Next.js application for efficient data fetching and state management.",
    },
    {
      id: 17,
      title: "How to Create and Optimize Images in Next.js",
      description:
        "A tutorial on using Next.js' built-in Image component to optimize image loading, improve performance, and handle responsive images.",
    },
    {
      id: 18,
      title: "Securing Next.js Applications: Best Practices",
      description:
        "Learn the best practices for securing your Next.js application, including protecting routes, securing API endpoints, and handling sensitive data.",
    },
    {
      id: 19,
      title: "Next.js Middleware: A Complete Guide",
      description:
        "An in-depth guide to using middleware in Next.js to handle tasks such as authentication, logging, and redirection.",
    },
    {
      id: 20,
      title: "Building a Blog with Next.js and Markdown",
      description:
        "A step-by-step guide to building a static blog using Next.js and Markdown, including content management and SEO optimization.",
    },
  ];

  return (
    <div className="container m-auto">
      {allBlogs?.map((blog) => (
        <div
          key={blog.id}
          className="flex border-2 p-3 bg-red-300 rounded-md my-4"
        >
          <div className="">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <button className="bg-green-500 p-2 rounded">
              <Link href={`blogs/${blog.id}`}>Read More</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogspage;
