import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className="text-center">
      <div className="bg-[url('../../images/bg-header-mobile.png')] bg-cover">
        <img src={logo} alt="logo" className="mx-auto p-6" />
      </div>
    </header>
  );
};

export default Header;
