const SectionTitle = ({ title ,children }) => {
  return (
    <div className="mt-32 mb-8">
      <h3 className="font-extrabold text-5xl text-center mb-4">{title}</h3>
      <div  className="font-medium text-center text-[#757575]" >
        {children}
      </div>
    </div>
  );
};

export default SectionTitle;
