


export default function SideBar() {
    return (
        <div className=" w-full flex flex-col items-center justify-center md:col-span-4 h-dvh relative  ">
            <div className="img-box absolute top-0 w-[12.5rem] h-[12.5rem] rounded-[1.25rem]  border ">

            </div>
            <div className="side-content-box w-full h-full mt-[6.5rem] rounded-[1.25rem] pt-[7.125rem] bg-[#fff] border ">
                <div className="name-box w-full flex flex-col ">
                    <h2 className="text-[#0B0909] md:text-[1.75rem] text-center ">Prasun Mondal</h2>
                    <p className="text-[#0B090990] text-[1rem] text-center">Frontend Developer</p>
                </div>
            </div>
        </div>
    )
}
