export default function Subscription() {
  return (
    <section className="relative flex flex-row items-center bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] h-[457px] mx-8 rounded-[15px]">
      <div className="z-50 relative h-[457px] w-[779px] pl-[46px] flex flex-col justify-center">
        <div className="text-[50px] font-semibold leading-[1.2] mb-[24px]">
          Subscribe Our Newsletter
        </div>
        <div className="text-base font-normal mb-[24px]">
          Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
          pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
          consectetur. Mattis elit adipiscing quisque tellus scelerisque
          vehicula ante nunc.
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your email"
            className="text-black h-[60px] w-[348px] rounded-[40px] pl-[24px] py-[18px]"
          />
          <button className="absolute left-[291px] bg-black h-[60px] w-[147px] rounded-[40px]  text-white font-semibold">
            Get a Quate
          </button>
        </div>
      </div>
      <div className="z-50 flex-1 flex justify-end">
        <img
          src={'image-7.png'}
          alt="3d house"
          className="h-[557px] w-[606px] object-contain"
        />
      </div>
      <img
        src="/hero_section.png"
        alt="Hero Section"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
    </section>
  );
}
