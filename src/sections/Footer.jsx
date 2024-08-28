import logo from '../../images/logo.svg';
import { footerLinks, socialMediaIcons } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 w-screen flex flex-col items-center lg:flex-row lg:justify-around">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="clipboard logo" className="w-12" />
        </a>
      </div>

      {footerLinks.map((link) => (
        <div className="flex flex-col">
          <a
            className="mt-4 text-darkGrayBlue hover:text-cyan transition-all"
            href={link.link}
          >
            {link.linkName}
          </a>
        </div>
      ))}

      <div className="flex gap-12 justify-between mt-12 mb-6">
        {socialMediaIcons.map((icon, index) => (
          <img src={icon.image} key={index} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
