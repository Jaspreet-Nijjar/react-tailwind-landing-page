import { companyImages } from '../constants';

const Companies = () => {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 px-8">
      {companyImages.map((companyImage) => (
        <img
          src={companyImage.image}
          alt={companyImage.name}
          key={companyImage.name}
        />
      ))}
    </div>
  );
};

export default Companies;
