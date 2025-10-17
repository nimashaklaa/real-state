export default function NavBar(){
    const navItems = [
        { label: "About us", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Agents", href: "/agents" },
        { label: "Services", href: "/services" },
        { label: "Listing", href: "/listing" }
    ];

    return(
        <nav className="relative flex items-center justify-between px-4 py-2 bg-[#FAFAFA] text-gray-800 rounded-[70px] h-[90px]">
            <div className="flex flex-row items-center space-x-4">
                <img src={'img_6.png'} alt="logo" className="w-[93.89px] h-[27.5px] absolute left-[70px]"/>
                <div className="flex flex-row items-center justify-between px-4 py-2 bg-[#FFFFFF] text-gray-800 rounded-[40px] h-[60px]">
                    {navItems.map((item, index) => (
                        <a key={index} className="text-[#1F1F1F] font-medium" href={item.href}>
                            {item.label}
                        </a>
                    ))}
                    <img src={'img_7.png'} alt={'search'} className="w-[24px] h-[24px]"/>
                </div>
                <div>
                    Other services
                </div>
                 <div className="flex items-center space-x-4 rounded-[40px] h-[60px] w-[158px] border-[1px] gap-[10px] py-[15px] px-[35px]">
                     Contact us
                 </div>
            </div>
        </nav>
    )

}