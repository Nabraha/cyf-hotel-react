import londonImage from "./resources/images/london.jpg";
import glasgowImage from "./resources/images/glasgow.jpg";
import manchesterImage from "./resources/images/manchester.jpg";

const cities = [
  {
    city: "London",
    link: "www.visitlondon.com",
    img: {
      src: londonImage,
      alt: "manchester-image",
      className: "card-img-top"
    }
  },
  {
    city: "Manchester",
    link: "www.visitmanchester.com",
    img: {
      src: manchesterImage,
      alt: "manchester-image",
      className: "card-img-top"
    }
  },
  {
    city: "Glasgow",
    link: "www.peoplemakeglasgow.com",
    img: {
      src: glasgowImage,
      alt: "manchester-image",
      className: "card-img-top"
    }
  }
];

export default cities;
