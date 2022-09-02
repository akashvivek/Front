import Navbar from "./Navbar";
import Footer from "./Footer";
import member1 from "../assets/team/member1.jpg"
import shape4 from "../assets/banner/shape.png"
import line2 from "../assets/background/line-bg2.png"
import triangle from "../assets/shap/trangle-orange.png"
import square from "../assets/shap/square-blue.png"
import plus from "../assets/shap/plus-orange.png"


import "./Service.css"
function Services() {

  return (
    <>
      <div className="myDiv" >
          <Navbar />
      </div>
      <img src={triangle} className="absolute top-[70%] left-[10%] animate-bounce z-1 hidden md:visible" alt="/" />
        <img src={square} className="absolute top-[30%] left-[45%] animate-pulse z-1 hidden md:visible" alt="/" />
        <img src={plus} className="absolute top-[80%] left-[45%] animate-ping z-1 hidden md:visible" alt="/" />
        <div className="max-w-full max-h-fit bg-service bg-no-repeat ym-8" id='page-banner'>
        <p className="text-center pt-32 pb-12 font-bold text-orange-500 bg-text-bgy bg-no-repeat bg-center text-5xl">SERVICES</p>
        
    </div>
      <img src={shape4} className="-mt-5" alt="" />
        <div className="flex justify-center items-center my-8 flex-wrap xl:flex-row md:flex-grow">
        <div className="w-[350px] h-[450px] p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 m-4 bg-servicebg2 bg-top bg-no-repeat bg-blend-multiply">
        <div className='max-w-fit  p-8 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 xl:min-w-min'>
								
                <span class="items-center">
                  <svg className='mx-auto' enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">	
                    <path d="m218.578 512c-29.085 0-52.748-23.656-52.748-52.734v-102.154c0-5.522 4.477-10 10-10s10 4.478 10 10v102.153c0 18.05 14.69 32.734 32.748 32.734s32.748-14.685 32.748-32.734v-116.18c0-20.084 16.343-36.423 36.432-36.423s36.432 16.339 36.432 36.423v59.66c0 24.042 19.567 43.602 43.619 43.602s43.619-19.56 43.619-43.602v-170.256c0-5.522 4.477-10 10-10s10 4.478 10 10v170.256c0 35.07-28.54 63.602-63.619 63.602s-63.619-28.531-63.619-63.602v-59.66c0-9.056-7.371-16.423-16.432-16.423s-16.432 7.367-16.432 16.423v116.181c0 29.078-23.663 52.734-52.748 52.734z" fill="#020288"></path>
                    <ellipse cx="175.83" cy="336.898" fill="#b2f0fb" rx="30.275" ry="30.265"></ellipse>
                    <path d="m317.745 103.718h-10.12v-78.989c0-5.522-4.477-10-10-10h-55.743v-4.729c0-5.522-4.477-10-10-10s-10 4.478-10 10v29.456c0 5.522 4.477 10 10 10s10-4.478 10-10v-4.728h45.743v68.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 50.532-41.126 91.644-91.677 91.644-50.55 0-91.676-41.111-91.676-91.644v-47.531c0-5.522-4.477-10-10-10h-10.119v-68.988h45.743v4.728c0 5.522 4.477 10 10 10s10-4.478 10-10v-29.457c0-5.522-4.477-10-10-10s-10 4.478-10 10v4.729h-55.743c-5.523 0-10 4.478-10 10v78.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 83.741 68.149 151.869 151.915 151.869s151.915-68.128 151.915-151.869v-47.531c0-5.523-4.477-10-10-10zm-10 57.531c0 72.713-59.177 131.869-131.915 131.869s-131.915-59.156-131.915-131.869v-37.531h20.238v37.531c0 61.561 50.098 111.644 111.676 111.644s111.677-50.083 111.677-111.644v-37.531h20.239z" fill="#020288"></path>
                    <ellipse cx="421.426" cy="170.539" fill="#b2f0fb" rx="66.659" ry="66.637"></ellipse>
                    <path d="m421.427 202.534c-17.646 0-32.001-14.353-32.001-31.995s14.356-31.994 32.001-31.994 32.001 14.353 32.001 31.994c0 17.643-14.356 31.995-32.001 31.995zm0-43.989c-6.618 0-12.001 5.381-12.001 11.994 0 6.614 5.384 11.995 12.001 11.995s12.001-5.381 12.001-11.995c0-6.613-5.384-11.994-12.001-11.994z" fill="#020288"></path>
                  </svg>
                </span> 
              </div>
              <div class="p-2">
                <h3 class="text-2xl text-blue-800 font-bold my-8">Health/Unique ID</h3>
                <p className='text-base font-small'>Patient can be provided with better healthcare facilities just by identifying them with a UNIQUE/HEALTH ID.</p>
                <button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-600 my-5 rounded-xl text-white shadow-indigo-400 shadow-lg'>View More</button>
              </div>
            
        </div>
        <div className="w-[350px] h-[450px] p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 m-4 bg-servicebg2 bg-top bg-no-repeat bg-blend-multiply">
        <div className='max-w-fit  p-8 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 xl:min-w-min'>
								
                <span class="items-center">
                  <svg className='mx-auto' enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">	
                    <path d="m218.578 512c-29.085 0-52.748-23.656-52.748-52.734v-102.154c0-5.522 4.477-10 10-10s10 4.478 10 10v102.153c0 18.05 14.69 32.734 32.748 32.734s32.748-14.685 32.748-32.734v-116.18c0-20.084 16.343-36.423 36.432-36.423s36.432 16.339 36.432 36.423v59.66c0 24.042 19.567 43.602 43.619 43.602s43.619-19.56 43.619-43.602v-170.256c0-5.522 4.477-10 10-10s10 4.478 10 10v170.256c0 35.07-28.54 63.602-63.619 63.602s-63.619-28.531-63.619-63.602v-59.66c0-9.056-7.371-16.423-16.432-16.423s-16.432 7.367-16.432 16.423v116.181c0 29.078-23.663 52.734-52.748 52.734z" fill="#020288"></path>
                    <ellipse cx="175.83" cy="336.898" fill="#b2f0fb" rx="30.275" ry="30.265"></ellipse>
                    <path d="m317.745 103.718h-10.12v-78.989c0-5.522-4.477-10-10-10h-55.743v-4.729c0-5.522-4.477-10-10-10s-10 4.478-10 10v29.456c0 5.522 4.477 10 10 10s10-4.478 10-10v-4.728h45.743v68.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 50.532-41.126 91.644-91.677 91.644-50.55 0-91.676-41.111-91.676-91.644v-47.531c0-5.522-4.477-10-10-10h-10.119v-68.988h45.743v4.728c0 5.522 4.477 10 10 10s10-4.478 10-10v-29.457c0-5.522-4.477-10-10-10s-10 4.478-10 10v4.729h-55.743c-5.523 0-10 4.478-10 10v78.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 83.741 68.149 151.869 151.915 151.869s151.915-68.128 151.915-151.869v-47.531c0-5.523-4.477-10-10-10zm-10 57.531c0 72.713-59.177 131.869-131.915 131.869s-131.915-59.156-131.915-131.869v-37.531h20.238v37.531c0 61.561 50.098 111.644 111.676 111.644s111.677-50.083 111.677-111.644v-37.531h20.239z" fill="#020288"></path>
                    <ellipse cx="421.426" cy="170.539" fill="#b2f0fb" rx="66.659" ry="66.637"></ellipse>
                    <path d="m421.427 202.534c-17.646 0-32.001-14.353-32.001-31.995s14.356-31.994 32.001-31.994 32.001 14.353 32.001 31.994c0 17.643-14.356 31.995-32.001 31.995zm0-43.989c-6.618 0-12.001 5.381-12.001 11.994 0 6.614 5.384 11.995 12.001 11.995s12.001-5.381 12.001-11.995c0-6.613-5.384-11.994-12.001-11.994z" fill="#020288"></path>
                  </svg>
                </span> 
              </div>
              <div class="p-2">
                <h3 class="text-2xl text-blue-800 font-bold my-8">Health/Unique ID</h3>
                <p className='text-base font-small'>Patient can be provided with better healthcare facilities just by identifying them with a UNIQUE/HEALTH ID.</p>
                <button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-600 my-5 rounded-xl text-white shadow-indigo-400 shadow-lg'>View More</button>
              </div>
            
        </div>
        <div className="w-[350px] h-[450px] p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 m-4 bg-servicebg2 bg-top bg-no-repeat bg-blend-multiply">
        <div className='max-w-fit  p-8 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 xl:min-w-min'>
								
                <span class="items-center">
                  <svg className='mx-auto' enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">	
                    <path d="m218.578 512c-29.085 0-52.748-23.656-52.748-52.734v-102.154c0-5.522 4.477-10 10-10s10 4.478 10 10v102.153c0 18.05 14.69 32.734 32.748 32.734s32.748-14.685 32.748-32.734v-116.18c0-20.084 16.343-36.423 36.432-36.423s36.432 16.339 36.432 36.423v59.66c0 24.042 19.567 43.602 43.619 43.602s43.619-19.56 43.619-43.602v-170.256c0-5.522 4.477-10 10-10s10 4.478 10 10v170.256c0 35.07-28.54 63.602-63.619 63.602s-63.619-28.531-63.619-63.602v-59.66c0-9.056-7.371-16.423-16.432-16.423s-16.432 7.367-16.432 16.423v116.181c0 29.078-23.663 52.734-52.748 52.734z" fill="#020288"></path>
                    <ellipse cx="175.83" cy="336.898" fill="#b2f0fb" rx="30.275" ry="30.265"></ellipse>
                    <path d="m317.745 103.718h-10.12v-78.989c0-5.522-4.477-10-10-10h-55.743v-4.729c0-5.522-4.477-10-10-10s-10 4.478-10 10v29.456c0 5.522 4.477 10 10 10s10-4.478 10-10v-4.728h45.743v68.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 50.532-41.126 91.644-91.677 91.644-50.55 0-91.676-41.111-91.676-91.644v-47.531c0-5.522-4.477-10-10-10h-10.119v-68.988h45.743v4.728c0 5.522 4.477 10 10 10s10-4.478 10-10v-29.457c0-5.522-4.477-10-10-10s-10 4.478-10 10v4.729h-55.743c-5.523 0-10 4.478-10 10v78.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 83.741 68.149 151.869 151.915 151.869s151.915-68.128 151.915-151.869v-47.531c0-5.523-4.477-10-10-10zm-10 57.531c0 72.713-59.177 131.869-131.915 131.869s-131.915-59.156-131.915-131.869v-37.531h20.238v37.531c0 61.561 50.098 111.644 111.676 111.644s111.677-50.083 111.677-111.644v-37.531h20.239z" fill="#020288"></path>
                    <ellipse cx="421.426" cy="170.539" fill="#b2f0fb" rx="66.659" ry="66.637"></ellipse>
                    <path d="m421.427 202.534c-17.646 0-32.001-14.353-32.001-31.995s14.356-31.994 32.001-31.994 32.001 14.353 32.001 31.994c0 17.643-14.356 31.995-32.001 31.995zm0-43.989c-6.618 0-12.001 5.381-12.001 11.994 0 6.614 5.384 11.995 12.001 11.995s12.001-5.381 12.001-11.995c0-6.613-5.384-11.994-12.001-11.994z" fill="#020288"></path>
                  </svg>
                </span> 
              </div>
              <div class="p-2">
                <h3 class="text-2xl text-blue-800 font-bold my-8">Health/Unique ID</h3>
                <p className='text-base font-small'>Patient can be provided with better healthcare facilities just by identifying them with a UNIQUE/HEALTH ID.</p>
                <button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-600 my-5 rounded-xl text-white shadow-indigo-400 shadow-lg'>View More</button>
              </div>
            
        </div>
        
        </div>

        <img src={line2} className="absolute left-0" alt="" />


        <div className="flex justify-center items-center my-8 flex-wrap xl:flex-row">
        <div className="w-[350px] h-[450px] p-4 bg-white rounded-lg border space-x-8 border-gray-200 shadow-md dark:border-gray-700 m-4 bg-servicebg2 bg-top bg-no-repeat bg-blend-multiply">
        <div className='max-w-fit  p-8 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 xl:min-w-min'>
								
                <span class="items-center">
                  <svg className='mx-auto' enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">	
                    <path d="m218.578 512c-29.085 0-52.748-23.656-52.748-52.734v-102.154c0-5.522 4.477-10 10-10s10 4.478 10 10v102.153c0 18.05 14.69 32.734 32.748 32.734s32.748-14.685 32.748-32.734v-116.18c0-20.084 16.343-36.423 36.432-36.423s36.432 16.339 36.432 36.423v59.66c0 24.042 19.567 43.602 43.619 43.602s43.619-19.56 43.619-43.602v-170.256c0-5.522 4.477-10 10-10s10 4.478 10 10v170.256c0 35.07-28.54 63.602-63.619 63.602s-63.619-28.531-63.619-63.602v-59.66c0-9.056-7.371-16.423-16.432-16.423s-16.432 7.367-16.432 16.423v116.181c0 29.078-23.663 52.734-52.748 52.734z" fill="#020288"></path>
                    <ellipse cx="175.83" cy="336.898" fill="#b2f0fb" rx="30.275" ry="30.265"></ellipse>
                    <path d="m317.745 103.718h-10.12v-78.989c0-5.522-4.477-10-10-10h-55.743v-4.729c0-5.522-4.477-10-10-10s-10 4.478-10 10v29.456c0 5.522 4.477 10 10 10s10-4.478 10-10v-4.728h45.743v68.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 50.532-41.126 91.644-91.677 91.644-50.55 0-91.676-41.111-91.676-91.644v-47.531c0-5.522-4.477-10-10-10h-10.119v-68.988h45.743v4.728c0 5.522 4.477 10 10 10s10-4.478 10-10v-29.457c0-5.522-4.477-10-10-10s-10 4.478-10 10v4.729h-55.743c-5.523 0-10 4.478-10 10v78.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 83.741 68.149 151.869 151.915 151.869s151.915-68.128 151.915-151.869v-47.531c0-5.523-4.477-10-10-10zm-10 57.531c0 72.713-59.177 131.869-131.915 131.869s-131.915-59.156-131.915-131.869v-37.531h20.238v37.531c0 61.561 50.098 111.644 111.676 111.644s111.677-50.083 111.677-111.644v-37.531h20.239z" fill="#020288"></path>
                    <ellipse cx="421.426" cy="170.539" fill="#b2f0fb" rx="66.659" ry="66.637"></ellipse>
                    <path d="m421.427 202.534c-17.646 0-32.001-14.353-32.001-31.995s14.356-31.994 32.001-31.994 32.001 14.353 32.001 31.994c0 17.643-14.356 31.995-32.001 31.995zm0-43.989c-6.618 0-12.001 5.381-12.001 11.994 0 6.614 5.384 11.995 12.001 11.995s12.001-5.381 12.001-11.995c0-6.613-5.384-11.994-12.001-11.994z" fill="#020288"></path>
                  </svg>
                </span> 
              </div>
              <div class="p-2">
                <h3 class="text-2xl text-blue-800 font-bold my-8">Health/Unique ID</h3>
                <p className='text-base font-small'>Patient can be provided with better healthcare facilities just by identifying them with a UNIQUE/HEALTH ID.</p>
                <button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-600 my-5 rounded-xl text-white shadow-indigo-400 shadow-lg'>View More</button>
              </div>
            
        </div>
        <div className="w-[350px] h-[450px] p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 m-4 bg-servicebg2 bg-top bg-no-repeat bg-blend-multiply">
        <div className='max-w-fit  p-8 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 xl:min-w-min'>
								
                <span class="items-center">
                  <svg className='mx-auto' enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">	
                    <path d="m218.578 512c-29.085 0-52.748-23.656-52.748-52.734v-102.154c0-5.522 4.477-10 10-10s10 4.478 10 10v102.153c0 18.05 14.69 32.734 32.748 32.734s32.748-14.685 32.748-32.734v-116.18c0-20.084 16.343-36.423 36.432-36.423s36.432 16.339 36.432 36.423v59.66c0 24.042 19.567 43.602 43.619 43.602s43.619-19.56 43.619-43.602v-170.256c0-5.522 4.477-10 10-10s10 4.478 10 10v170.256c0 35.07-28.54 63.602-63.619 63.602s-63.619-28.531-63.619-63.602v-59.66c0-9.056-7.371-16.423-16.432-16.423s-16.432 7.367-16.432 16.423v116.181c0 29.078-23.663 52.734-52.748 52.734z" fill="#020288"></path>
                    <ellipse cx="175.83" cy="336.898" fill="#b2f0fb" rx="30.275" ry="30.265"></ellipse>
                    <path d="m317.745 103.718h-10.12v-78.989c0-5.522-4.477-10-10-10h-55.743v-4.729c0-5.522-4.477-10-10-10s-10 4.478-10 10v29.456c0 5.522 4.477 10 10 10s10-4.478 10-10v-4.728h45.743v68.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 50.532-41.126 91.644-91.677 91.644-50.55 0-91.676-41.111-91.676-91.644v-47.531c0-5.522-4.477-10-10-10h-10.119v-68.988h45.743v4.728c0 5.522 4.477 10 10 10s10-4.478 10-10v-29.457c0-5.522-4.477-10-10-10s-10 4.478-10 10v4.729h-55.743c-5.523 0-10 4.478-10 10v78.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 83.741 68.149 151.869 151.915 151.869s151.915-68.128 151.915-151.869v-47.531c0-5.523-4.477-10-10-10zm-10 57.531c0 72.713-59.177 131.869-131.915 131.869s-131.915-59.156-131.915-131.869v-37.531h20.238v37.531c0 61.561 50.098 111.644 111.676 111.644s111.677-50.083 111.677-111.644v-37.531h20.239z" fill="#020288"></path>
                    <ellipse cx="421.426" cy="170.539" fill="#b2f0fb" rx="66.659" ry="66.637"></ellipse>
                    <path d="m421.427 202.534c-17.646 0-32.001-14.353-32.001-31.995s14.356-31.994 32.001-31.994 32.001 14.353 32.001 31.994c0 17.643-14.356 31.995-32.001 31.995zm0-43.989c-6.618 0-12.001 5.381-12.001 11.994 0 6.614 5.384 11.995 12.001 11.995s12.001-5.381 12.001-11.995c0-6.613-5.384-11.994-12.001-11.994z" fill="#020288"></path>
                  </svg>
                </span> 
              </div>
              <div class="p-2">
                <h3 class="text-2xl text-blue-800 font-bold my-8">Health/Unique ID</h3>
                <p className='text-base font-small'>Patient can be provided with better healthcare facilities just by identifying them with a UNIQUE/HEALTH ID.</p>
                <button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-600 my-5 rounded-xl text-white shadow-indigo-400 shadow-lg'>View More</button>
              </div>
            
        </div>
        <div className="w-[350px] h-[450px] p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 m-4 bg-servicebg2 bg-top bg-no-repeat bg-blend-multiply">
        <div className='max-w-fit  p-8 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 xl:min-w-min'>
								
                <span class="items-center">
                  <svg className='mx-auto' enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">	
                    <path d="m218.578 512c-29.085 0-52.748-23.656-52.748-52.734v-102.154c0-5.522 4.477-10 10-10s10 4.478 10 10v102.153c0 18.05 14.69 32.734 32.748 32.734s32.748-14.685 32.748-32.734v-116.18c0-20.084 16.343-36.423 36.432-36.423s36.432 16.339 36.432 36.423v59.66c0 24.042 19.567 43.602 43.619 43.602s43.619-19.56 43.619-43.602v-170.256c0-5.522 4.477-10 10-10s10 4.478 10 10v170.256c0 35.07-28.54 63.602-63.619 63.602s-63.619-28.531-63.619-63.602v-59.66c0-9.056-7.371-16.423-16.432-16.423s-16.432 7.367-16.432 16.423v116.181c0 29.078-23.663 52.734-52.748 52.734z" fill="#020288"></path>
                    <ellipse cx="175.83" cy="336.898" fill="#b2f0fb" rx="30.275" ry="30.265"></ellipse>
                    <path d="m317.745 103.718h-10.12v-78.989c0-5.522-4.477-10-10-10h-55.743v-4.729c0-5.522-4.477-10-10-10s-10 4.478-10 10v29.456c0 5.522 4.477 10 10 10s10-4.478 10-10v-4.728h45.743v68.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 50.532-41.126 91.644-91.677 91.644-50.55 0-91.676-41.111-91.676-91.644v-47.531c0-5.522-4.477-10-10-10h-10.119v-68.988h45.743v4.728c0 5.522 4.477 10 10 10s10-4.478 10-10v-29.457c0-5.522-4.477-10-10-10s-10 4.478-10 10v4.729h-55.743c-5.523 0-10 4.478-10 10v78.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 83.741 68.149 151.869 151.915 151.869s151.915-68.128 151.915-151.869v-47.531c0-5.523-4.477-10-10-10zm-10 57.531c0 72.713-59.177 131.869-131.915 131.869s-131.915-59.156-131.915-131.869v-37.531h20.238v37.531c0 61.561 50.098 111.644 111.676 111.644s111.677-50.083 111.677-111.644v-37.531h20.239z" fill="#020288"></path>
                    <ellipse cx="421.426" cy="170.539" fill="#b2f0fb" rx="66.659" ry="66.637"></ellipse>
                    <path d="m421.427 202.534c-17.646 0-32.001-14.353-32.001-31.995s14.356-31.994 32.001-31.994 32.001 14.353 32.001 31.994c0 17.643-14.356 31.995-32.001 31.995zm0-43.989c-6.618 0-12.001 5.381-12.001 11.994 0 6.614 5.384 11.995 12.001 11.995s12.001-5.381 12.001-11.995c0-6.613-5.384-11.994-12.001-11.994z" fill="#020288"></path>
                  </svg>
                </span> 
              </div>
              <div class="p-2">
                <h3 class="text-2xl text-blue-800 font-bold my-8">Health/Unique ID</h3>
                <p className='text-base font-small'>Patient can be provided with better healthcare facilities just by identifying them with a UNIQUE/HEALTH ID.</p>
                <button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-600 my-5 rounded-xl text-white shadow-indigo-400 shadow-lg'>View More</button>
              </div>
            
        </div>   
        </div>
        <div className="w-full">
          <h2 className="font-bold bg-text-bgy bg-center max-w-max mx-auto text-orange-500 text-lg">Our Doctor</h2>
          <p className="text-3xl font-bold text-indigo-800 text-center my-4">Meet Best Doctor</p>
        </div>

        <div class="flex flex-col md:flex-row flex-wrap justify-center items-center">
        <div className="w-[350px] h-[350px] p-4 bg-indigo-50 rounded-lg border border-gray-200 shadow-md dark:border-gray-700 m-4 bg-servicebg2 bg-top bg-no-repeat bg-blend-multiply">
        <div className='mx-16'>
								<img src={member1}  className="img1" alt="" />
              </div>
                <h3 class="text-1.7xl text-orange-600 font-bold my-4">MRS.Shanaya Khanna</h3>
                <p className='text-base font-small text-justify'>Patient can be provided with better healthcare facilities just by identifying them with a UNIQUE/HEALTH ID.</p>              </div>
        <div className="w-[350px] h-[350px] p-4 bg-indigo-50 rounded-lg border border-gray-200 shadow-md dark:border-gray-700 m-4 bg-servicebg2 bg-top bg-no-repeat bg-blend-multiply">
        <div className='mx-16'>
								<img src={member1}  className="img1" alt="" />
              </div>
                <h3 class="text-1.7xl text-orange-600 font-bold my-4">MR.Parash Sharma </h3>
                <p className='text-base font-small text-justify'>Patient can be provided with better healthcare facilities just by identifying them with a UNIQUE/HEALTH ID.</p>              </div>
        <div className="w-[350px] h-[350px] p-4 bg-indigo-50 rounded-lg border border-gray-200 shadow-md dark:border-gray-700 m-4 bg-servicebg2 bg-top bg-no-repeat bg-blend-multiply">
        <div className='mx-16'>
								<img src={member1}  className="img1" alt="" />
              </div>
                <h3 class="text-1.7xl text-orange-600 font-bold my-4">MR. Aadhik Jha</h3>
                <p className='text-base font-small text-justify'>Patient can be provided with better healthcare facilities just by identifying them with a UNIQUE/HEALTH ID.</p>              </div>
        </div>
        <Footer/>
    </>
  );
}

export default Services;
