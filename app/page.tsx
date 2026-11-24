
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "30px" }}>
      <h1>Hello, my name is Calixt Jee Bayot</h1>

      <p>
        I am a BSIT student who enjoys learning about
        computers and technology.
      </p>

      <p>
        I want to improve my programming skills and
        create useful websites.
      </p>

      <Link href="/projects" className="underline">
        See my projects
      </Link>
    </main>
  );
}
