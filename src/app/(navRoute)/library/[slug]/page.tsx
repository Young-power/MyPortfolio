import { redirect, notFound } from "next/navigation";

const libraries: Record<string, string> = {
  "next-mahine-inspector.com": "https://next-mahine-rsc-doc.vercel.app/",
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  
  // ⚡ await from params
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const url = libraries[slug];

  if (!url) {
    notFound(); // if the route isn't found
  }

  redirect(url); // redirect to the doc library
};

export default Page;
