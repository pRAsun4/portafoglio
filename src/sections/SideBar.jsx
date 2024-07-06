import Resume from "/updated-resume.pdf";
import Download from '../assets/download-icon.png'
import ContactLinks from "../components/ContactLinks";
import ContactDetails from "../js/ContactDetails";
import SocialDetails from "../js/SocialDetails";
import SocialLinks from "../components/SocialLinks";
// import Picture from '../assets/profile-pic.jpg'



export default function SideBar() {
  return (
    <div className=" w-full  flex-col items-center justify-center md:col-span-4 md:flex hidden h-auto relative  ">
      <div className="img-box absolute top-0 lg:w-[12.5rem] w-[9rem] lg:h-[12.5rem] h-[9rem] rounded-[1.25rem] bg-purple-500 overflow-hidden ">
        {/* <img src={Picture} alt="" className="w-full h-full object-cover " /> */}
      </div>
      <div className="side-content-box w-full h-auto lg:mt-[6.5rem] mt-[4.5rem] rounded-[1.25rem] pt-[5.125rem] lg:pt-[7.125rem] pb-[3.75rem] bg-[#fff] overflow-hidden  ">
        <div className="name-box w-full flex flex-col  p-4">
          <h2 className="text-[#0B0909] lg:text-[1.75rem] text-[1.5rem] font-bold text-center ">
            Prasun Mondal
          </h2>
          <p className="text-[#0B090990] text-[1rem] text-center">
            Frontend Developer
          </p>
        </div>
        <div className="icon-box w-full flex items-center justify-center mt-3 gap-[0.5625rem] p-4">
          {SocialDetails.map((contact, index) =>(
            <SocialLinks 
              key={index}
              toLink={contact.toLink}
              imgSrc={contact.imgSrc}
              imgAlt={contact.imgAlt}
            />
          ))}

        </div>
        <div className="details-box w-full lg:p-[1.5rem] p-3  gap-4   bg-[#fff]  ">
          <div className="w-full flex flex-col py-[2.0625rem] px-[1.5rem]  rounded-[1.25rem] bg-[#F2F5F9] ">
            {ContactDetails.map((contact, index) => (
              <ContactLinks
                key={index}
                logoSrc={contact.logoSrc}
                logoAlt={contact.logoAlt}
                logoLable={contact.logoLable}
                logoText={contact.logoText}
                type={contact.type}
              />
            ))}

            <a href={Resume} download="updated-resume.pdf" className="flex download-button  justify-center items-center lg:max-w-[12.25rem] w-full mx-auto  mt-[1.25rem] lg:px-[1.25rem] px-3 py-[0.625rem] rounded-[1.25rem] ">
              <img src={Download} alt="download icon" />
              <p className="text-[#fff] max-w-full lg:text-[0.875rem] text-[0.8125rem]  "> Download resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
