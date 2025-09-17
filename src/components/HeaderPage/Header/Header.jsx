import HeroSlider from "../HeroSlider/HeroSlider.jsx";
import TabBar from "../../Bar/TabBar/TabBar.jsx"

export default function Header() {
  return (
    <header id="home">
      <TabBar />
      <HeroSlider />
    </header>
  );
}