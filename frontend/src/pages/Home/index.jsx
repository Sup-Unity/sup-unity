import Banner from "./components/Banner";
import Navbar from "../../components/Navbar";
import HomeContent from "./components/HomeContent/HomeContent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <HomeContent />
    </div>
  );
}
