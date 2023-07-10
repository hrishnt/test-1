import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Goggle maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ligula mauris. Cras hendrerit dolor non est faucibus, nec scelerisque turpis aliquet. Sed porta elit sit amet cursus laoreet. Maecenas in tempus eros. Duis mattis id massa vitae placerat. Donec rhoncus quam dui, at tempor."
        />
                <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ligula mauris. Cras hendrerit dolor non est faucibus, nec scelerisque turpis aliquet. Sed porta elit sit amet cursus laoreet. Maecenas in tempus eros. Duis mattis id massa vitae placerat. Donec rhoncus quam dui, at tempor."
        />
                <TripData
          image={Trip3}
          heading="Trip in France"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ligula mauris. Cras hendrerit dolor non est faucibus, nec scelerisque turpis aliquet. Sed porta elit sit amet cursus laoreet. Maecenas in tempus eros. Duis mattis id massa vitae placerat. Donec rhoncus quam dui, at tempor."
        />
      </div>
    </div>
  );
}
export default Trip;
