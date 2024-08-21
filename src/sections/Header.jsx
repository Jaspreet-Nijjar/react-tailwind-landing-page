import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className="text-center">
      <div className="bg-[url('../../images/bg-header-mobile.png')] bg-cover">
        <img src={logo} alt="logo" className="mx-auto p-6" />
      </div>

      <h1 className="text-2xl font-bold p-6 font-jamjuree text-darkGrayBlue">
        A history of
        <br />
        everything you copy
      </h1>
      <p className="text-grayBlue mb-8">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
    </header>
  );
};

export default Header;
