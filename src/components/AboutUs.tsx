export default function AboutUs() {
  const steps = [
    {
      icon: 'img_1.png',
      alt: 'chat',
      title: 'Answer questions',
      description:
        'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.',
    },
    {
      icon: 'img_2.png',
      alt: 'message',
      title: 'Select a quote',
      description:
        'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.',
    },
    {
      icon: 'img_3.png',
      alt: 'register',
      title: 'Get registered',
      description:
        'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.',
    },
  ];

  return (
    <div className="relative flex flex-col mt-[90px] mx-[30px] mb-[132px] items-center">
      <div className="text-base font-normal">Three steps. Three minutes</div>
      <div className="font-semibold text-[50px] mb-[45px]">
        Everything should be this easy.
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        {steps.map((step, index) => (
          <div key={index} className="w-[329px]">
            <img
              src={step.icon}
              alt={step.alt}
              className="h-[75px] w-[75px] mb-[22px]"
            />
            <div className="font-semibold text-[28px] mb-[22px] leading-1.2">
              {step.title}
            </div>
            <div className="font-normal text-base leading-6">
              {step.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
