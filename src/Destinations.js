import SelectSection from "./SelectSection";
import DestinationCard from "./DestinationCard";

export default function Destinations() {
  return (
    <div className="destinationPage">
      <p>Our Destinations</p>
      <div className="destinCards">
        <DestinationCard
          img="Webtaskresources/card-image.png"
          name="Harvard University"
          location="Cambridge, Massachusetts, UK"
          left="30%"
        />
        <DestinationCard
          img="Webtaskresources/card-image-1.png"
          name="Oxford University"
          location="Oxford, England"
          left="55%"
        />
        <DestinationCard
          img="Webtaskresources/card-image-2.png"
          name="Stanford University"
          location="Stanford, California"
          left="50%"
        />
        <DestinationCard
          img="Webtaskresources/card-image-3.png"
          name="Nanyang Technological University"
          location="Nanyang Ave, Singapura"
          left="50%"
        />
      </div>
      <SelectSection />
    </div>
  );
}
