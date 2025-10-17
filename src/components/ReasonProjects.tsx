export default function ReasonProjects() {
  const projects = [
    {
      img: 'img_5.png',
      title: 'Sobha Hearland II Villas',
      description:
        'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
    },
    {
      img: 'img_8.png',
      title: 'Sobha Hearland II Villas',
      description:
        'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
    },
    {
      img: 'img_9.png',
      title: 'Sobha Hearland II Villas',
      description:
        'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
    },
  ];
  return (
    <div className="relative flex flex-col mx-8">
      <div className="text-base font-normal leading-1.2 mb-4">
        Best Project of the Years
      </div>
      <div className="flex flex-row items-center justify-between mb-[45px]">
        <div className="font-semibold text-[50px]">Our recent projects</div>
        <div className="flex flex-row items-center gap-2">
          <img src={'img_10.png'} alt="left arrow" className=" w-[45px]" />
          <img src={'img_11.png'} alt="right arrow" className="w-[45px]" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[447px] h-[438px] rounded-[14px] border-[1px] border-[#BEBEBE]"
          >
            <div className="h-[263px] rounded-t-[14px] bg-gradient-to-b from-[#C1DEE8] to-[#FFFFFF] relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover rounded-t-[14px]"
              />
            </div>
            <div className="px-4 py-4">{project.title}</div>
            <div className="px-4 pb-4">{project.description}</div>
            <div className="px-4 pb-4">
              <img src={'img_4.png'} alt="ratings" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
