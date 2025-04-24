import Image from "next/image";
// import Feature1 from "../../../public/assets/feature-1.svg";
// import Feature2 from "../../../public/assets/feature-2.svg";
// import Feature3 from "../../../public/assets/feature-3.svg";
import Check from "../../../public/assets/check.svg";
// import bluebutton from "../../../public/assets/blue-button.svg";
import greenButton from "../../../public/assets/green-button.svg";
// import pinkButton from "../../../public/assets/pink-button.svg";

export function SpecialFeatures() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[40px] lg:gap-y-[10px] ">
      <h4 className="font-semibold text-1xl">Keep A Girl In School</h4>
      <div className="flex flex-col gap-x-2 sm:flex-row">
          <div className='hidden w-1/2 sm:block'>
            <iframe 
                className=' h-full w-full rounded-lg'
                src="https://www.youtube.com/embed/Nq6Bj0Yflng"
                width="100%" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen> 
            </iframe>
          </div> 
      
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <div className='pt-[24px] sm:hidden'>
            <iframe 
            className=' h-full w-full rounded-lg'
            // src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528" 
            src="https://www.youtube.com/embed/Nq6Bj0Yflng"
            width="100%" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen> 
            </iframe>
          </div> 
          {/* <Image
            src={Feature2}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          /> */}
          {/* <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p> */}
          <p>    Education plays a critical role in breaking the cycle of poverty and violence. When girls are kept in school, they stand a better chance of growing into empowered women who transform their neighbourhoods and nations.

To support these efforts, we work with the schools to teach good health practices, along with Godly sexual education to girls and boys—teaching young boys to respect and protect their female classmates, and reminding girls that they matter and their bodies are their own.

{/* With the help of partners across the globe, we are keeping girls in school, educated and empowered. */}
.</p>

          
            <div className='w-full flex flex-row my-2 pt-10 gap-2'>
            <button type="submit" className='w-full text-white my-1 bg-black/75 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
              Donate Towards This Cause
            </button>

            {/* <button type="submit" className='w-full pl-2 text-white my-1 bg-black/75 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
              View Curriculum
            </button> */}
          </div>

          {/* <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul> */}

          {/* <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={greenButton} alt="Learn more" />
            </span>
          </p> */}
        </div>
      </div>
      <h4 className="font-semibold text-1xl pt-6">Sponser A Child</h4>
      <div className="flex flex-col gap-x-6 sm:flex-row">
          <div className='hidden w-1/2 sm:block'>
            <iframe 
            className=' h-full w-full rounded-lg'
            src="https://www.youtube.com/embed/6esVJgnNc68"
            width="100%" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen> 
            </iframe>
          </div> 
        {/* <Image
          src={Feature2}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        /> */}
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          {/* <h3 className="font-medium text-[#00A424] lg:text-[18px] ">
            Customer Support
          </h3> */}
          {/* <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Get in touch with your customers
          </h1> */}
          <h5>    The School of Community Leadership is Watoto Church’s leadership development 
            programme for professionals in various fields.
          {/* It exists to equip leaders to be ‘Change Agents in their Spheres of Influence,  */}
          {/* Communities and the Nation‘. It is a year-long ‘Transformational Leadership‘  */}
          </h5>

          <div className='pt-[24px] sm:hidden'>
            <iframe 
            className=' h-full w-full rounded-lg'
            // src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528" 
            src="https://www.youtube.com/embed/6esVJgnNc68"
            width="100%" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen> 
            </iframe>
          </div> 
          {/* <Image
            src={Feature2}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          /> */}
          {/* <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p> */}
          <p className="pt-5">Leading Self (Worldviews, Habits of Highly Effective People)
            Leading Others (Servant Leadership, Team Leadership)
            Leading Organisational Change (Creating Positive Change)
            Transforming Communities (Leading Community Change, Transformation Project)</p>

          <div className='w-full flex flex-row my-2 pt-10 gap-2'>
            <button type="submit" className='w-full text-white my-1 bg-black/75 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
              Donate towards this cause
            </button>

            {/* <button type="submit" className='w-full pl-2 text-white my-1 bg-black/75 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
              View Curriculum
            </button> */}
          </div>

          {/* <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul> */}

          {/* <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={greenButton} alt="Learn more" />
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
}