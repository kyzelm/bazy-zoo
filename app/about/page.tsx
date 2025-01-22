import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        This is a simple example of a Next.js application.
        <br/>
        <Link href={"/about/1"}>About 1</Link>
        <br/>
        <Link href={"/about/2"}>About 2</Link>
        <br/>
        <Link href={"/about/3"}>About 3</Link>
      </p>
    </main>
  );
}