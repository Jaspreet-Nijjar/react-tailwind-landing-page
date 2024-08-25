import Button from '../components/Button';

const Clipboard = () => {
  return (
    <section className="mt-12">
      <h1 className="font-bold text-darkGrayBlue text-2xl">
        Clipboard for iOS and Mac OS
      </h1>
      <p className="text-grayBlue mt-2 mb-6">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard
      </p>

      <div className="md:flex">
        <Button text="iOS" />
        <Button text="Mac" />
      </div>
    </section>
  );
};

export default Clipboard;
