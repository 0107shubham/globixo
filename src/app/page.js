import Image from "next/image";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HomePage />
      <Content />
    </div>
  );
}
