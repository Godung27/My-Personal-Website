import HeroImg from "../HeroImg/HeroImg.jsx";
import TabBar from "../../Bar/TabBar/TabBar.jsx"

export default function Header() {
  return (
    <header id="home">
      <TabBar />
      <HeroImg />
    </header>
  );
}