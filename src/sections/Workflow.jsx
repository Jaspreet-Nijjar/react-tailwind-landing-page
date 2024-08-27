import { workflow } from '../constants';

const Workflow = () => {
  return (
    <section className="mt-6">
      <h1 className="font-bold text-darkGrayBlue text-2xl">
        Supercharge your workflow
      </h1>
      <p className="text-grayBlue mt-2 mb-6">
        We've got the tools to boost your productivity.
      </p>

      <div className="mb-12 lg:flex lg:items-center gap-12 lg:gap-36">
        {workflow.map((item, index) => (
          <div
            key={index}
            className="p-4 flex flex-col items-center justify-center"
          >
            <img src={item.icon} alt="icon" width={30} />
            <h2 className="font-bold mt-2 mb-4 text-xl text-darkGrayBlue">
              {item.heading}
            </h2>
            <p className="sm:max-w-md lg:max-w-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
