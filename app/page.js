
import Image from "next/image";



export default function Home() {
  
  return (
    <>
      <div className=" bg-purple-500 bg-opacity-20 mx-0 sm:mx-3 xl:mx-8 shadow-xl shadow-purple-400">

        <div className="flex flex-col items-center h-[81vh] md:h-[115vh] justify-center xl:h-[78vh] xl:flex-row">

          <div className="text-white  2xl:text-white w-[85%] sm:w-[70%] md:w-[52%] xl:w-[43%]  shadow-2xl shadow-purple-500   h-[40vh] flex justify-center items-center  flex-col ">

            <div className=" flex flex-col gap-1 ">
              <h2 className="text-[16px] sm:text-[24px] md:text-[28px] xl:text-[33px] font-bold  ">Hello i am</h2>
              <h2 className="text-[9px] sm:text-[15px] md:text-[18px] xl:text-[23px] font-bold">CHALAVADI HVNV Sumanth</h2>
              <p className="text-[7px] sm:text-[11px] md:text-[12px] xl:text-[18px]">You  Want To Know More About Me Then.</p>
              <p className="text-[7px] sm:text-[11px] md:text-[12px] xl:text-[18px]">Check The Skills-page & About-Page & Resume-page</p>
            </div>
          </div>
          <div className="text-white w-[50%] flex relative top-10 xl:top-0  justify-center items-center">
            <img width={395} src="desktop.gif" />
          </div>
        </div>
      </div>
      <h2 className="text-[30px] xl:text-[50px] relative top-7 flex justify-center text-white">Introduce My Self</h2>
      <div className="bg-purple-500 bg-opacity-20 mx-8 relative top-14 bottom-6 shadow-xl shadow-purple-400">

        <div className="flex flex-col xl:flex-row items-center justify-center h-full">
          <div className="text-white w-[100%]  sm:w-[50%] flex   justify-center items-center">
            <img width={255} src="man.gif" />
          </div>
          <div className="text-white   sm:w-[50%] flex justify-center items-center flex-col ">
            <div className=" flex flex-col gap-1">
              <div className="text-[13px] p-6 w-full   sm:text-[11px] md:text-[15px] xl:text-2xl xl:shadow-2xl xl:shadow-purple-500 flex-wrap sm:w-[54vw] xl:w-[40vw]   xl:p-24 h-full flex justify-center xl:my-10 items-center">


                As a recent diploma graduate, I am enthusiastic about joining the BTech program to further my education and skills. My hobbies include exploring new technologies, particularly mobile devices and laptops. I enjoy learning about the newest innovations in the technologies. This passion drives my desire to excel in the field of technology and engineering.
              </div>
            </div>
          </div>

        </div>
      </div>
      
     {/* <div className="About text-white flex justify-center items-center flex-col ">
        <h2 className="text-[50px] relative top-10">Introduce My Self</h2>
        <p className="  text-2xl shadow-2xl shadow-purple-500 w-[50vw]  gap-5 p-24 h-[45vh] flex justify-center my-14 items-center">
    

As a recent diploma graduate, I am enthusiastic about joining the BTech program to further my education and skills. My hobbies include exploring new technologies, particularly mobile devices and laptops. I enjoy learning about the newest innovations in the technologies. This passion drives my desire to excel in the field of technology and engineering.
        </p>
      </div> */}



    </>
  );
}
