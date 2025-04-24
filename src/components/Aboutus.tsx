

const Aboutus = () => {
  return (
    <>
    <div className="pt-10">
        <h3 className="font-bold text-2xl">ABOUT US</h3>
        <p>The Marketplace Ministry is an arm of Watoto Church that aims to equip the congregation with
             knowledge and opportunities based on biblical principles that effectively influence and 
             bring about transformation to the needs in their different workplaces, careers and finances.
        </p>
    </div>
    <div className="pt-10">
        <h3 className="font-bold text-2xl">OUR PILLARS</h3>
        <div className="flex flex-col gap-x-6 sm:flex-row">
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px] bg-gray-100 rounded-xl">
                    <h3 className="font-medium text-center text-[#0085FF] lg:text-[18px] ">
                        EQUIP
                    </h3>
                
                    <p className="py-[14px] px-2 text-[#36485C] lg:text-[14px] text-center block items-center justify-center">

                        Equip believers with tailored biblical based Knowledge and
                        Skills that adequately address different areas of societal brokenness.
                    </p>
                </div>
                          {/*screen 2*/}
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]  bg-gray-100 rounded-xl">
                    <h3 className="font-medium text-[#0085FF] lg:text-[18px] text-center">
                        INFLUENCE
                    </h3>

                    <p className="py-[24px] px-2 text-[#36485C] lg:text-[14px] text-center block items-center justify-center">
                    Influence every sphere of society for God through an integrated 
                    network of empowered and dedicated influential leaders.
                    </p>

                </div>

                   {/*screen 3*/}
                     

                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]  bg-gray-100 rounded-xl">
                    <h3 className="font-medium text-[#0085FF] lg:text-[18px] text-center">
                        TRANSFORM
                    </h3>
                
                    <p className="py-[24px] px-2 text-[#36485C] lg:text-[14px] text-center block items-center justify-center">
                    Transform cities and nations by establishing the dominion of the Kingdom of God,
                     bringing healing to the marketplace for the glory of God.
                    </p>

                </div>

        </div>
    </div>
    <div className="pt-20">
            <div className="flex flex-col gap-x-6 sm:flex-row bg-gray-100 rounded-xl divide-x">
                <div className="sm:w-1/3 lg:py-[56px] lg:pr-[56px]">
                    <p className="font-bold text-2xl text-center">Up Coming Events & Programs</p>
                </div>

                <div
                    className="h-[250px] min-h-[1em] w-px self-stretch bg-gray-800 from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>

                <div className="sm:w-3/3 lg:py-[56px] lg:pr-[56px]">
                    <div>Timer</div>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px] text-center">
                            EVENT: MARKETPLACE CONVENTION 2024
                            DATE: 27th July 2023
                            VENUE: Watoto Church Ntinda
                    </p>
                
                </div>
            </div>
    </div>
    <div className="pt-10 items-center justify-center">
        <h3 className="text-center font-semibold">OUR PARTNERS</h3>
        {/* <div className="border-2 w-[1100px] border-black inline-block mb-2"></div> */}
        <div className="items-center justify-center">

        </div>
        {/* <div className="border-2 w-[1100px] border-black inline-block"></div> */}
    </div>

    </>
  )
}

export default Aboutus
