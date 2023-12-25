import { fetchPosts } from "@/lib/actions/thread.actions";

export default async function Home() {
  const result = await fetchPosts(1, 30);
  console.log(result);

  return (
    <>
      <section className="mt-9 flex flex-col gap-10"></section>
    </>
  );
}
