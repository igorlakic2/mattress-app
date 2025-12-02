import { Button } from "@mui/material";
import Carousel from "../../components/carousel/Carousel";
import "./home.css";

const HomePage = () => {
  return (
    <div>
      <Carousel />

      <section className="hp-section">
        <div className="hp-card">
          <h2 className="hp-title">Aloe Vera dušeci</h2>

          <p className="hp-text">
            Aloe Vera dušek izrađen je od
            <strong> presovanog ortopedskog sunđera</strong>, obložen navlakom
            od <strong>100% platna</strong> sa dodatkom Aloe Vera ekstrakta.
            Dušek je <strong>srednje čvrstoće</strong>, zadržava svoj oblik
            tokom vremena i ne sadrži opruge. Debljina dušeka je
            <strong> 20cm (±2cm)</strong>, što obezbeđuje optimalnu podršku i
            udobnost tokom spavanja.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Button variant="contained">Poruči odmah</Button>
            <Button variant="contained">Kontaktiraj nas</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
