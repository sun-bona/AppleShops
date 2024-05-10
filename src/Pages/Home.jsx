import Card from "../Components/Card";
import { data } from "../data/data";
import './Home.css'
const Home = () => {
  return (
    <div>
      <section>
        <h2 className="product-heading">All Products!</h2>
        <div className="card-container">
          <Card products={data} />
        </div>
      </section>
    </div>
  );
};

export default Home;