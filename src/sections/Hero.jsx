import computer from '../../images/image-computer.png';
import devices from '../../images/image-devices.png';

import { hero } from '../constants';

const Hero = () => {
  return (
    <section className="p-8 mt-16 mx-auto">
      <h2 className="text-2xl text-darkGrayBlue font-bold">
        Keep track of your snippets
      </h2>
      <p className="text-grayBlue mt-2 mb-12 mx-auto lg:max-w-lg">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>

      <div>
        <div className="lg:flex lg:gap-12 mb-36">
          <img
            src={computer}
            alt="computer image"
            width={300}
            className="mx-auto lg:w-1/2"
          />
        </div>

        <h1 className="text-2xl font-bold text-darkGrayBlue">
          Access Clipboard Anywhere
        </h1>
        <p className="mt-4 text-grayBlue mb-12 max-w-[600px] mx-auto">
          Whether you're on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img src={devices} alt="device image" className="md:max-w-lg mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
