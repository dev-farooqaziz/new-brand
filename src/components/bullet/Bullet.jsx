import React from "react";


const bulitServices = [
    {
        number: "01.",
        title: "Ideation",
        description: "We get our creative juices flowing by brainstorming ideas and concepts for your game. We work together to figure out what kind of game you want to create, the story behind it, and how you want players to interact with it."
    },
    {
        number: "02.",
        title: "Testing",
        description: "Before launching your game, we ensure it works properly by testing it thoroughly. This includes running the game on different platforms and devices to ensure everything runs smoothly."
    },
    {
        number: "03.",
        title: "Design",
        description: "We create a blueprint for your new game. This follows through designing all elements, from characters and levels to user interface features and environment settings. We ponder how each part fits together to work well in harmony."
    },
    {
        number: "04.",
        title: "Finalization",
        description: "Once we have tested your game, it's time to finalize by adding any last-minute features or tweaks we think are necessary. Also, now's the perfect time to start marketing your game! Let's get people excited about it before launch day, so they can't wait to play."
    },
    {
        number: "05.",
        title: "Development",
        description: "The development phase is where the real magic happens. Our experienced developers will bring your project to life by coding it and creating the graphics that you have designed."
    },
    {
        number: "06.",
        title: "Launch",
        description: "Now that your game is finished and tested, it's time to let the world know about it. Finally, launch your game and watch as people flock to play it!"
    }
];

const Bullet = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container relative">
                    <div className="heading mb-14">
                        <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex justify-center items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Bullet-Proof Game</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Development Action Plan</h2>
                    </div>
                    <div className="grid grid-cols-12 gap-x-8 gap-y-10 md:gap-y-14">
                        {bulitServices.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="h-full flex flex-col">
                                    <div className="flex items-end gap-4 border-b-[1px] border-black pb-2 mb-4">
                                        <h3 className="text-[20px] lg:text-[24px] 2xl:text-[60px] tracking-wide font-extrabold font-sans text-primary-100 leading-none">
                                            {item.number}
                                        </h3>
                                        <h4 className="text-[20px] lg:text-[24px] 2xl:text-[30px] tracking-wide font-bold font-sans text-black leading-tight">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p className="text-[15px] tracking-wide font-poppins text-black">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Bullet;