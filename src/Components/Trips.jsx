import dubaiImage from "../assets/img/content/dubai.png";
import istanbulImage from "../assets/img/content/istanbul.png";
import phuketImage from "../assets/img/content/phuket.png";
import tbilisiImage from "../assets/img/content/tbilisi.png";

const trips = [
   {
      name: "Тбилиси",
      date: "апрель",
      cost: "83.000",
      method: "на автобусе",
      registeredPeople: 10,
      img: tbilisiImage
   },
   {
      name: "Стамбул",
      date: "март",
      cost: "110.000",
      method: "на самолете",
      registeredPeople: null,
      img: istanbulImage
   },
   {
      name: "Дубай",
      date: "июнь",
      cost: "220.000",
      method: "на самолете",
      registeredPeople: 15,
      img: dubaiImage
   },
   {
      name: "Пхукет",
      date: "сентябрь",
      cost: "135.000",
      method: "самолет + паром",
      registeredPeople: 11,
      img: phuketImage
   }
];

export default trips