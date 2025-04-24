import Image from "next/image";
// import Feature1 from "../../../public/assets/feature-1.svg";
// import Feature2 from "../../../public/assets/feature-2.svg";
// import Feature3 from "../../../public/assets/feature-3.svg";
import Check from "../../../public/assets/check.svg";
// import bluebutton from "../../../public/assets/blue-button.svg";
import greenButton from "../../../public/assets/green-button.svg";
// import pinkButton from "../../../public/assets/pink-button.svg";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[40px] lg:gap-y-[10px] ">
       <h3 className="pt-10 font-bold text-3xl">PROGRAMS</h3>
        <p>The Ministry currently has two programs that have
             a yearly intake all catering towards different categories of people.</p>
      <h4 className="font-extrabold text-1xl">LAUNCHPAD FOR YOUNG ADULTS</h4>
      <div className="flex flex-col gap-x-2 sm:flex-row">
          <div className='hidden w-1/2 sm:block'>
            <iframe 
                className=' h-full w-full rounded-lg'
                src="https://www.youtube.com/embed/LLGEEtvpzCQ"
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
            src="https://www.youtube.com/embed/LLGEEtvpzCQ"
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
          <p>    A 12-week Training Programme for young people fresh from 
            university or a Tertiary Institute; focusing 
            on self-awareness, life skills, and alternative avenues of generating 
            sustainable income.</p>

          
            <div className='w-full flex flex-row my-2 pt-10 gap-2'>
            <button type="submit" className='w-full text-white my-1 bg-black/75 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
              Register For launch Pad
            </button>

            <button type="submit" className='w-full pl-2 text-white my-1 bg-black/75 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
              View Curriculum
            </button>
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
      <h4 className="font-extrabold text-1xl pt-6">SCHOOL OF COMMUNITY LEADERSHIP(SCL)</h4>
      <div className="flex flex-col gap-x-6 sm:flex-row">
          <div className='hidden w-1/2 sm:block'>
            <iframe 
            className=' h-full w-full rounded-lg'
            src="https://www.youtube.com/embed/LLGEEtvpzCQ"
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
          <p className="block">    The School of Community Leadership is Watoto Church’s leadership development 
            programme for professionals in various fields.
          It exists to equip leaders to be ‘Change Agents in their Spheres of Influence, 
          {/* Communities and the Nation‘. It is a year-long ‘Transformational Leadership‘  */}
          </p>

          <div className='pt-[24px] sm:hidden'>
            <iframe 
            className=' h-full w-full rounded-lg'
            // src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528" 
            src="https://www.youtube.com/embed/LLGEEtvpzCQ"
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
         

          <div className='w-full flex flex-row my-2 pt-4 gap-2'>
            <button type="submit" className='w-full text-white my-1 bg-black/75 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
              Register For SCL
            </button>

            <button type="submit" className='w-full pl-2 text-white my-1 bg-black/75 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
              View Curriculum
            </button>
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