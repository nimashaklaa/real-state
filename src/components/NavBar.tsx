export default function NavBar() {
  const navItems = [
    { label: 'About us', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Agents', href: '/agents' },
    { label: 'Services', href: '/services' },
    { label: 'Listing', href: '/listing' },
  ];

  return (
    <nav className="relative h-[90px] mt-[34px] mx-8 flex items-center justify-between px-8 py-2 bg-[#FAFAFA] text-gray-800 rounded-[70px] mb-6">
      <div className="flex items-center">
        <img src={'img_6.png'} alt="logo" className="w-[93.89px] h-[27.5px]" />
      </div>

      <div className="flex items-center gap-6 px-4 py-2 bg-[#FFFFFF] text-gray-800 rounded-[40px] h-[60px]">
        {navItems.map((item, index) => (
          <a
            key={index}
            className="text-[#1F1F1F] font-medium"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
        <img src={'img_7.png'} alt={'search'} className="w-[24px] h-[24px]" />
      </div>
      <div className="text-[#1F1F1F] font-medium">Other services</div>
      <div className="flex items-center">
        <div className="flex items-center rounded-[40px] h-[60px] w-[158px] border-[1px] py-[15px] px-[35px]">
          Contact us
        </div>
      </div>
    </nav>
  );
}
