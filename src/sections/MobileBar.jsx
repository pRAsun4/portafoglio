import { useSelector } from "react-redux";
import MenuBtn from "../components/MenuBtn";
import NameBox from "../components/NameBox";
import SocialLinks from "../components/SocialLinks";
import SocialDetails from "../js/SocialDetails";
import ContactDetails from "../js/ContactDetails";
import ContactLinks from "../components/ContactLinks";
import DownloadBtn from "../components/DownloadBtn";


function MobileBar() {
    const activeSideBar = useSelector(state => state.sidebar?.activeSideBar);
    const toggleDark = useSelector((state) => state.toggleMode.activeDark);


    return (
        <div className={` ${activeSideBar ? 'show-mobile z-40' : 'hide-mobile'} mobile-bar max-w-[14.5rem] sm:max-w-[16rem] w-full h-full fixed  p-[0.625rem] ${toggleDark ? 'bg-[#2e2e2e] active-dark' : 'bg-white'}  overflow-auto border `}>
            <MenuBtn className='btn flex w-auto h-auto  items-center justify-center absolute top-4 right-4 '>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M5 12L11 18M5 12L11 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </MenuBtn>
            <div className="mobile-bar-wrapper w-full h-full flex flex-col items-center mt-[10rem]">
                <div className="img-box rounded-[1.25rem] w-[100px] h-[100px] bg-purple-500 absolute top-[4rem] overflow-hidden ">
                    {/* <img src={Picture} alt="" className="w-full h-full object-cover " /> */}
                </div>
                <NameBox className=" text-[1.25rem] " />
                <div className="icon-box w-full flex items-center justify-center  gap-[0.5625rem] p-4">
                    {SocialDetails.map((details, index) => (
                        <SocialLinks
                            key={index}
                            toLink={details.toLink}
                            imgSrc={details.imgSrc}
                            imgAlt={details.imgAlt}
                            className=" w-[2.5rem] h-[2.5rem] bg-[#F2F7FC] flex items-center justify-center rounded-[0.5rem] "
                        />
                    ))}
                </div>
                <div className="details-box w-full lg:p-[1.5rem] gap-4 rounded-[0.5rem]  bg-[#fff]  ">
                    <div className="w-full flex flex-col py-[2.0625rem] px-[1rem]  rounded-[1.25rem] bg-[#F2F5F9] ">
                        {ContactDetails.map((contact, index) => (
                            <ContactLinks
                                key={index}
                                logoSrc={contact.logoSrc}
                                logoAlt={contact.logoAlt}
                                logoLable={contact.logoLable}
                                logoText={contact.logoText}
                                type={contact.type}
                                className="contact-link w-full flex items-center justify-start gap-[0.625rem] font-semibold text-[14px] py-[1.4375rem]"
                            />
                        ))}
                        <DownloadBtn className=" flex download-button  justify-center items-center lg:max-w-[12.25rem] w-full mx-auto  mt-[1.25rem] lg:px-[1.25rem] px-3 py-[0.625rem] rounded-[1.25rem]  " />
                    </div>
                </div>


            </div>
        </div>
    )
}
export default MobileBar;