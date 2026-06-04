import "./home.css";
import OpeningHero from "./OpeningHero";
import InsideAkrafthaus from "./InsideAkrafthaus";
import TheAddress from "./TheAddress";
import PhotoInterlude from "./PhotoInterlude";
import ADayHere from "./ADayHere";
import GalleryPreview from "./GalleryPreview";
import FounderStory from "./FounderStory";
import RoomsFeature from "./RoomsFeature";
import StaySection from "./StaySection";

export default function HomePage() {
  return (
    <main id="main-content">
      <OpeningHero />
      <InsideAkrafthaus />
      <TheAddress />
      <PhotoInterlude />
      <ADayHere />
      <GalleryPreview />
      <FounderStory />
      <RoomsFeature />
      <StaySection />
    </main>
  );
}
