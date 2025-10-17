export default function Assets() {
  const terms = [
    {
      value: '12+',
      label: 'Customers',
    },
    {
      value: '14+',
      label: 'Offices',
    },
    {
      value: '10+',
      label: 'Students',
    },
  ];
  return (
    <div className="relative flex flex-col mt-[90px] mx-[30px] mb-[132px] items-center">
      <div className="font-semibold text-[50px] mb-[45px] w-[785px] leading-1.2 text-center">
        We are a global, boutique real estate brokerage
      </div>
      <div className="flex flex-row ml-[97px] justify-between w-full">
        <div className="w-1/2">
          <div className="font-semibold text-[38px] leading-1.2 mb-6">
            The transfer of real estate
          </div>
          <div className="w-[474px] font-normal text-base leading-[24px] mb-[46px]">
            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
            pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
            consectetur. Mattis elit adipiscing quisque tellus scelerisque
            vehicula ante nunc. Tellus consequat nisl quis nisl justo.
          </div>
          <div className="flex flex-row gap-[15px] mb-[80px]">
            <button className="bg-black text-white h-[60px] w-[153px] rounded-[40px] px-[35px] py-[15px] ">
              Book Now!
            </button>
            <button className="h-[60px] w-[160px] rounded-[40px] border-[1px] px-[35px] py-[15px]">
              Read More
            </button>
          </div>
          <div className="flex flex-row gap-[95px]">
            {terms.map((term, index) => (
              <div key={index} className="flex flex-col">
                <div className="font-semibold text-[67px] leading-1.2 mb-[5px]">
                  {term.value}
                </div>
                <div className="font-normal text-base">{term.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-end mr-[98px]">
          <img
            src={'img_11.png'}
            alt="conference"
            className="h-[577px] rounded-[14px]"
          />
        </div>
      </div>
    </div>
  );
}
