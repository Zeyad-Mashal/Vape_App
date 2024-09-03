import { Metadata } from "next";
import HomePage from "../../components/Home/Home"

export const metadata: Metadata = {
  title: "Vape App",
  description: "Created By Zeyad Mashaal",
};
export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
