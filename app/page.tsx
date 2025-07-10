// "use server";

import Body from "./components/Body";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col px-4 py-2">
      <Header />
      <Body />
    </div>
  );
}
