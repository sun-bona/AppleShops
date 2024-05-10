export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


// import image for accessories

import AirpodMix from "../assets/imageAcess/AirpodMix.png";
import Airpods2 from "../assets/imageAcess/Airpods2.png";
import Airpods3 from "../assets/imageAcess/Airpods3.png";
import Airpods4 from "../assets/imageAcess/Airpods4.png";
import BeatBud from "../assets/imageAcess/BeatBud.png";
import BeatFlex from "../assets/imageAcess/BeatFlex.png";
import BeatStud from "../assets/imageAcess/BeatStud.png";
import BitFit from "../assets/imageAcess/BitFit.png";
import HomePod_Mini from "../assets/imageAcess/HomePod-Mini.png";
import HomePod from "../assets/imageAcess/HomePod.png";

export const itemData = [
    {
        id: 1,
        img: Airpods2,
        engraving: "Free Engraving",
        detail: "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
        price: "$249.99",
    },
    {
        id: 2,
        img: Airpods3,
        engraving: "Free Engraving",
        detail: "AirPods (3rd generation) with Lightning Charging Case",
        price: "$169.99",
    },
    {
        id: 3,
        img: HomePod,
        engraving: " ",
        detail: "HomePod - Midnight",
        price: "$299.99",
    },
    {
        id: 4,
        img: HomePod_Mini,
        engraving: " ",
        detail: "HomePod min - Blue",
        price: "$99.99",
    },
    {
        id: 5,
        img: AirpodMix,
        engraving: "Free Engraving",
        detail: "AirPod Max - Green",
        price: "$549.99",
    },
    {
        id: 6,
        img: Airpods4,
        engraving: "Free Engraving",
        detail: "AirPods (3rd generation) with MagSafe Charging Case",
        price: "$179.99",
    },
    {
        id: 7,
        img: BeatStud,
        engraving: " ",
        detail: "Beats Studio Pro Wireless Headphones — Sandstone",
        price: "$349.99",
    },
    {
        id: 8,
        img: BeatBud,
        engraving: " ",
        detail: "Beats Studio Buds + True Wireless Noise Cancelling Earbuds — Transparent",
        price: "$169.99",
    },
    {
        id: 9,
        img: BitFit,
        engraving: "Free Engraving",
        detail: "Beats Fit Pro True Wireless Earbuds — Stone Purple",
        price: "$199.99",
    },
    {
        id: 10,
        img: BeatFlex,
        engraving: " ",
        detail: "Beats Flex – All-Day Wireless Earphones - Flame Blue",
        price: "$69.99",
    },
]
