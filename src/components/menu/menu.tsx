

import Dessert from "../Dessert";
import Drink from "../Drink";
import ExperienceSection from "../Experience";
import MainCourse from "../MainCourse";
import PartnersAndClients from "../PartnerClient";
import StarterMenu from "../StartMenu";

export default function Menu() {
  return (
    <div>
      <StarterMenu/>
      <MainCourse/>
      <ExperienceSection/>
      <Dessert/>
      <Drink/>
      <PartnersAndClients/>
    </div>
  );
}
