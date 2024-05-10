import {
  Laptop,
  LaptopMinimal,
  Search,
  Smartphone,
  Tv,
  Watch,
} from "lucide-react";
import allPhone from "../assets/images/all-iPhone.png";
import "./Accessories.css";
import ChAccess from "../Components/ChAccess";
import { useState } from "react";

//fro Scroll

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { itemData, responsive } from "../data/accesData";
const Accessories = () => {
  const [open, setOpen] = useState(false);
  return (
    <article>
      <h1 className="title">Accessories</h1>
      <div className="A-heading">
        <div className="box1" data-aos="zoom-in-right">
          <img src={allPhone} alt="" />
        </div>
        <div className="box2" data-aos="fade-left">
          <div className="box2-h2">
            <h2>
              Mix. Match.
              <br />
              MagSafe.
            </h2>
          </div>
          <div className="box2-p">
            <p>
              Snap on a case, wallet, or <br />
              wireless charger.
            </p>
          </div>

          <div className="box2-span">
            <a href="">Shop MagSafe 🔜</a>
          </div>
        </div>
      </div>

      {/* For Search Bar */}

      <h2 id="text-on-search">Find the accessories you’re looking for.</h2>
      <form className="search">
        <Search color="rgb(114,112,109)" className="search-icon" />
        <input type="text" placeholder="Search accessories" />
      </form>

      {/* Some items */}

      <div className={open ? "item" : "item1"}>
        <a href="https://www.apple.com/shop/mac/accessories" target="_blank">
          <ChAccess icon={<Laptop size={70} />} name="Mac" />
        </a>
        <a href="https://www.apple.com/shop/ipad/accessories" target="_blank">
          <ChAccess icon={<LaptopMinimal size={70} />} name="iPad" />
        </a>
        <a href="https://www.apple.com/shop/iphone/accessories" target="_blank">
          <ChAccess icon={<Smartphone size={70} />} name="iPhone" />
        </a>
        <a
          href="https://www.apple.com/shop/smart-home/accessories"
          target="_blank"
        >
          <ChAccess icon={<Tv size={70} />} name="TV & Home" />
        </a>
        <a href="https://www.apple.com/shop/watch/accessories" target="_blank">
          <ChAccess icon={<Watch size={70} />} name="iWatch" />
        </a>
      </div>
      <div className="bt">
        <button onClick={() => setOpen(!open)}>
          {open ? "Hide items..." : "Show All..."}
        </button>
      </div>

      {/* this block sound */}

      <h2 id="text-on-Sound">Sound Essentials</h2>
      <div className="card-sound-container">
        <Carousel responsive={responsive}>
          {itemData.map(({ id, img, engraving, detail, price }) => (
            <div className="card-sound" key={id}>
              <img src={img} alt="image sound" />
              <span className="down-img">{engraving}</span>
              <p className="detail-sound">{detail}</p>
              <span className="price-sound">{price}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </article>
  );
};

export default Accessories;
