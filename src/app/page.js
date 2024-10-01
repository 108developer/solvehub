import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div className="">
      <div className="relative flex items-center justify-center w-full min-h-fit">
        <div className="h-[600px] -z-10 w-full absolute overflow-hidden">
          <Image className=" w-full " src='https://solvehub.in/themes/garland/img/banner1.jpg' width={1200} height={1200} alt="herosection"></Image>
        </div>
        <div className=" z-10 h-[600px] items-center justify-center flex flex-col w-full bg-transparent/50 text-[#e4e9f0] text-center">
          <div className=" capitalize text-[50px] font-bold">
            Professional assignment writing service
          </div>
          <div className="font-playfair text-[24px] italic">
            Reasonable prices and excellent quality from British writers for students like you
          </div>
          <div className="flex pt-5 gap-5">
            <a href="/" className="bg-[#57bad9] rounded-3xl font-bold py-2 px-6 glow-box glow-text">Check Prizes</a>
            <a href="/" className="bg-[#57bad9] hover:bg-transparent/15 py-2 px-6 transition duration-500 ease-in-out rounded-3xl font-bold ">Order Now</a>
          </div>
        </div>
      </div>
      <div className="relative text-center items-center justify-center  flex h-[300px] text-black">
        <div className=" absolute h-[300px] w-full overflow-hidden">
          <Image className="w-full" src='https://solvehub.in/themes/garland/img/sections/section-4.jpg' width={1200} height={1200} alt="orderProcess" />
        </div>
        <div className="absolute w-full flex flex-col items-center justify-center z-20">
          <div className="capitalize  font-bold text-[32px]">
            Simple Order Process
          </div>
          <div className="flex w-[1200px]  items-center justify-start gap-5">
            <div className="flex flex-col  items-center justify-center gap-5">
              <Image className="w-14 h-fit" src='https://solvehub.in/themes/garland/img/form.png' width={1200} height={1200} alt="SimpleOrderDetails" />
              <div className=" text-center">
                <div className="font-bold"> Fill in our order form              </div>
                <div className="font-extralight">Just give us some details about your paper, such as topic, deadline, and number of pages</div>
              </div>
            </div>
            <div className="flex flex-col  items-center justify-center gap-5">
              <Image className="w-14 h-fit" src='https://solvehub.in/themes/garland/img/user1.png' width={1200} height={1200} alt="SimpleOrderDetails" />
              <div className=" text-center">
                <div className="font-bold"> Get the best writer</div>
                <div className="font-extralight">We'll find the perfect writer for your paper among our team of experts</div>
              </div>
            </div>
            <div className="flex flex-col  items-center justify-center gap-5">
              <Image className="w-14 h-fit" src='https://solvehub.in/themes/garland/img/download.png' width={1200} height={1200} alt="SimpleOrderDetails" />
              <div className=" text-center">
                <div className="font-bold">Download your paper</div>
                <div className="font-extralight">Your paper will arrive in your inbox, or you can download it from your profile</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-[450px]">
            <Image src='https://solvehub.in/themes/garland/img/step-arrow.png' alt="arrow" width={1200} height={1200} className="w-32" />
            <Image src='https://solvehub.in/themes/garland/img/step-arrow.png' alt="arrow" width={1200} height={1200} className="-mr-14 w-32" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#1160a3] flex h-full items justify-center">
        <Image className="h-[400px]" src='https://solvehub.in/themes/garland/img/girl.png' width={300} height={100} alt="Girl-Image" />
        <div className="relative w-[700px] flex h-full text-start ">
          <Image className="absolute -right-[130px] z-10 h-[400px]" src='https://solvehub.in/themes/garland/img/brid.png' width={700} height={100} alt="Girl-Image" />
          <div className="absolute text-[16px] left-0 top-[200px] flex flex-col h-full justify-center">
            <div className="flex font-bold z-10 flex-col text-white ">Never placed an order at Solve Hube before?</div>
            <div className="flex font-bold z-10 flex-col text-white ">use promo code solvehub11</div>
            <div className="flex text-[34px] font-bold z-10 flex-col text-white ">15% OFF your first Order</div>
            <a href="/" className="bg-[#57bad9] w-fit hover:bg-transparent/15 py-2 px-6 transition duration-500 ease-in-out rounded-3xl font-bold ">Order Now</a>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center justify-center p-4">
        <div className="capitalize font-playfair text-[#9f99a2]">72% of students use a custom essay writing service at least once. You just have to choose a quality writing company.</div>
        <div className="flex w-[1200px] capitalize pt-20  items-start justify-center gap-5">
          <div className="flex flex-col  items-center justify-center gap-5">
            <Image className="w-14 h-fit" src='https://solvehub.in/themes/garland/img/writing.png' width={1200} height={1200} alt="SimpleOrderDetails" />
            <div className=" flex flex-col items-center justify-center text-center">
              <div className="font-bold">Writers Testing</div>
              <div className="bg-[#323e66] text-[#323e66] h-[5px] my-5 w-[50px] "></div>
              <div className="font-extralight">We test our writers and check their qualification before assigning anytask of yours.
              </div>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center gap-5">
            <Image className="w-14 h-fit" src='https://solvehub.in/themes/garland/img/ss.png' width={1200} height={1200} alt="SimpleOrderDetails" />
            <div className=" flex flex-col items-center justify-center text-center">
              <div className="font-bold">Guarantees</div>
              <div className="bg-[#323e66] text-[#323e66] h-[5px] my-5 w-[50px] "></div>
              <div className="font-extralight">Our qualified industrial experts give you the peace of mind and ease your work.We never compromise from quality.
              </div>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center gap-5">
            <Image className="w-14 h-fit" src='https://solvehub.in/themes/garland/img/wri.png' width={1200} height={1200} alt="SimpleOrderDetails" />
            <div className=" flex flex-col items-center justify-center text-center">
              <div className="font-bold">Dissertation Writing Service</div>
              <div className="bg-[#323e66] text-[#323e66] h-[5px] my-5 w-[50px] "></div>
              <div className="font-extralight">Get dissertation writing service with professional Experts who provides you chapter, introduction & abstract.
              </div>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center gap-5">
            <Image className="w-14 h-fit" src='https://solvehub.in/themes/garland/img/pap.png' width={1200} height={1200} alt="SimpleOrderDetails" />
            <div className=" flex flex-col items-center justify-center text-center">
              <div className="font-bold">Assignment Services</div>
              <div className="bg-[#323e66] text-[#323e66] h-[5px] my-5 w-[50px] "></div>
              <div className="font-extralight">If, you're worried about assignment writing come & join us & get proffessional approach.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  bg-[#f4f4f4] w-full">
        <div className="flex items-center  justify-between text-start w-[1100px]">
          <div className="w-[65%] gap-5 flex flex-col">
            <div className="font-bold text-[24px]">High-Quality Assingment Help for Students</div>
            <div className=" text-[#a199aa] font-playfair text-[16px]">Get good grade with your eye-catching assignemt</div>
            <div className="font-extralight">We all are getting frustated with our assignment problems but with our assignment services you can acheive good grades.</div>
            <div className="font-extralight">High-Quality assignments not only give you the grades but also add confident in you. Our industrial experts working on every part of your paper and make them professional.If you are facing challenging with the difficult project. we're here to help you out.</div>
            <div className="w-full items-center justify-center flex">
              <a href="/" className="bg-[#57bad9] w-fit text-white rounded-3xl font-bold py-2 px-8 glow-box glow-text">Order Now</a>
            </div>
          </div>
          <div><Image src='https://solvehub.in/themes/garland/img/banner/a1.png' width={1200} height={1200} className="w-full" alt="data" /></div>
        </div>
      </div>
      <div className=" w-full py-5 flex flex-col items-center justify-center">
        <div className="capitalize  font-bold text-[32px]">
          Simple Order Process
        </div>
        <div className="grid grid-cols-1 pt-10 md:grid-cols-3 gap-10 w-[1200px] items-start justify-start">
          <div className="flex items-start justify-start gap-5 h-full border-b-[0.5px] pb-10">
            <Image
              className="w-14 h-fit"
              src="https://solvehub.in/themes/garland/img/search.png"
              width={1200}
              height={1200}
              alt="SimpleOrderDetails"
            />
            <div className="text-start">
              <div className="font-bold">Research Paper Writing</div>
              <div className="font-extralight">
                Are you facing trouble in your research paper.Don't worry our experts will make it easy for you.

              </div>
            </div>
          </div>

          <div className="flex items-start justify-start gap-5 h-full border-b-[0.5px] pb-10">
            <Image
              className="w-14 h-fit"
              src="https://solvehub.in/themes/garland/img/file.png"
              width={1200}
              height={1200}
              alt="SimpleOrderDetails"
            />
            <div className="text-start">
              <div className="font-bold">Coursework Writing Service
              </div>
              <div className="font-extralight">
                Many complex assignments you have to complete throughout your education which is difficult to do.Come & seek our assistance.


              </div>
            </div>
          </div>

          <div className="flex items-start justify-start gap-5 h-full border-b-[0.5px] pb-10">
            <Image
              className="w-14 h-fit"
              src="https://solvehub.in/themes/garland/img/degree.png"
              width={1200}
              height={1200}
              alt="SimpleOrderDetails"
            />
            <div className="text-start">
              <div className="font-bold">Dissertation Writing Service
              </div>
              <div className="font-extralight">
                Get dissertation writing service with professional Experts who provides you chapter, introduction & abstract.
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start gap-5 h-full border-b-[0.5px] pb-10">
            <Image
              className="w-14 h-fit"
              src="https://solvehub.in/themes/garland/img/pencil.png"
              width={1200}
              height={1200}
              alt="SimpleOrderDetails"
            />
            <div className="text-start">
              <div className="font-bold">Dissertation Writing Service
              </div>
              <div className="font-extralight">
                Get dissertation writing service with professional Experts who provides you chapter, introduction & abstract.
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start gap-5 h-full border-b-[0.5px] pb-10">
            <Image
              className="w-14 h-fit"
              src="https://solvehub.in/themes/garland/img/coffe.png"
              width={1200}
              height={1200}
              alt="SimpleOrderDetails"
            />
            <div className="text-start">
              <div className="font-bold">Dissertation Writing Service
              </div>
              <div className="font-extralight">
                Get dissertation writing service with professional Experts who provides you chapter, introduction & abstract.
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start gap-5 h-full border-b-[0.5px] pb-10">
            <Image
              className="w-14 h-fit"
              src="https://solvehub.in/themes/garland/img/pen.png"
              width={1200}
              height={1200}
              alt="SimpleOrderDetails"
            />
            <div className="text-start">
              <div className="font-bold">Dissertation Writing Service
              </div>
              <div className="font-extralight">
                Get dissertation writing service with professional Experts who provides you chapter, introduction & abstract.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="relative h-[200px] w-full overflow-hidden items-center justify-center flex">
          <Image src='https://solvehub.in/themes/garland/img/sections/section-1.jpg' alt="section1" width={1200} height={1200} className="w-screen" />
          <div className="absolute bg-transparent/85 w-full h-full gap-10 flex items-center justify-between px-20">
            <div className="w-[250px] flex items-center justify-between">
              <div className="items-center justify-center flex flex-col">
                <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
                <div className="font-bold text-white text-[20px]">561</div>
                <div className="font-thin text-white text-[20px] capitalize">Projects Delivered</div>
              </div>
            </div>
            <div className="w-[250px] flex items-center justify-between">
              <div className="items-center justify-center flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>

                <div className="font-bold text-white text-[20px]">24</div>
                <div className="font-thin text-white text-[20px] capitalize">Awards won
                </div>
              </div>
            </div>
            <div className="w-[250px] flex items-center justify-between">
              <div className="items-center justify-center flex flex-col">
                <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>

                <div className="font-bold text-white text-[20px]">160</div>
                <div className="font-thin text-white text-[20px] capitalize">happy clients
                </div>
              </div>
            </div>
            <div className="w-[250px] flex items-center justify-between">
              <div className="items-center justify-center flex flex-col">
                <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                <div className="font-bold text-white text-[20px]">285</div>
                <div className="font-thin text-white text-[20px] capitalize">employees working</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center w-full py-10">
        <div className="font-bold text-[24px]">Trusted by 35,000+ students in over 7 countries</div>
        <div className="font-playfair text-[#A199AA]">Lorem ipsum dolor amet consectetur adipisic elit</div>
        <div className="flex items-center justify-center gap-5 w-[1200px]">
          <div className="w-full"></div>
          <div className="pt-10 flex w-[70%] gap-3 flex-wrap">
            <div className="p-1 hover:shadow-xl shadow-md border">
              <Image src='https://solvehub.in/themes/garland/img/paper/1.jpg' width={1200} className="h-[150px] w-[100px]" height={1200} alt="" />
            </div>
            <div className="p-1 hover:shadow-xl shadow-md border">
              <Image src='https://solvehub.in/themes/garland/img/paper/1.jpg' width={1200} className="h-[150px] w-[100px]" height={1200} alt="" />
            </div>
            <div className="p-1 hover:shadow-xl shadow-md border">
              <Image src='https://solvehub.in/themes/garland/img/paper/1.jpg' width={1200} className="h-[150px] w-[100px]" height={1200} alt="" />
            </div>
            <div className="p-1 hover:shadow-xl shadow-md border">
              <Image src='https://solvehub.in/themes/garland/img/paper/1.jpg' width={1200} className="h-[150px] w-[100px]" height={1200} alt="" />
            </div>
            <div className="p-1 hover:shadow-xl shadow-md border">
              <Image src='https://solvehub.in/themes/garland/img/paper/1.jpg' width={1200} className="h-[150px] w-[100px]" height={1200} alt="" />
            </div>
            <div className="p-1 hover:shadow-xl shadow-md border">
              <Image src='https://solvehub.in/themes/garland/img/paper/1.jpg' width={1200} className="h-[150px] w-[100px]" height={1200} alt="" />
            </div>
            <div className="p-1 hover:shadow-xl shadow-md border">
              <Image src='https://solvehub.in/themes/garland/img/paper/1.jpg' width={1200} className="h-[150px] w-[100px]" height={1200} alt="" />
            </div>
            <div className="p-1 hover:shadow-xl shadow-md border">
              <Image src='https://solvehub.in/themes/garland/img/paper/1.jpg' width={1200} className="h-[150px] w-[100px]" height={1200} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
