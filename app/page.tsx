import Image from "next/image";
import NavBar from "./components/NavBar";
import { getCurrentUser } from "./lib/session";

export default function Home() {
  const user = getCurrentUser();
  return (
    <div className="px-5 max-w-[1280px] mx-auto">
      <NavBar />
    </div>
  );
}
