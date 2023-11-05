import HomeCard from '@/components/card/home-card';
import Licence from '@/components/card/licence';
import Carusel from '@/components/carusel';
import HeroCard from '@/components/hero';

export default function Home() {
  return (
    <div className="grid grid-cols-6 lg:grid-cols-12 gap-12 my-12 ">
      <div className="col-span-6 lg:col-start-2 lg:col-span-10">
        <Licence />
      </div>
      <div className="col-span-6 lg:col-start-2 lg:col-span-10">
        <div className="flex flex-col  justify-between gap-12 lg:flex-row ">
          <HomeCard />

          <Carusel />
        </div>
      </div>

      <div className="col-span-6  lg:col-start-2 lg:col-span-10">
        <HeroCard />
      </div>
      <div></div>
    </div>
  );
}
