import { Hero } from "./components/Hero";
import { LinkList } from "./components/LinkList";

export default function Home() {
  return (
    <main className="card">
      <Hero />
      <LinkList />
    </main>
  );
}
