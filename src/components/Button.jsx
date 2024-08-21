const Button = ({ text }) => {
  return (
    <button className="bg-red-500 rounded-2xl text-white font-bold w-[250px] p-2 shadow-2xl mx-auto">
      Download for {text}
    </button>
  );
};

export default Button;
