export default function HeroSection() {
  return (
    <section className="relative flex flex-row items-center bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] h-[617px] mx-[30px] rounded-[15px]">
      <div className="z-50 relative w-[595px] pl-[46px]">
        <div className="text-base font-normal mb-[15px]">
          Welcome to Realstate
        </div>
        <div className="text-[67px] font-semibold leading-[1.2] mb-[24px]">
          Manage Your Property
        </div>
        <div className="text-base font-normal mb-[24px]">
          Your will have everything nearby supermarket, buses , station, the
          carmen neighborhood, etc
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
      <div className="z-50 ml-[625px]">
        <img src={'img.png'} alt="3d house" className="h-[667px]" />
      </div>
      <img
        src="/hero_section.png"
        alt="Hero Section"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
    </section>
  );
}
