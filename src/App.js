import logo from './logo.svg';
import './App.css';
import React from 'react';
import myImage from './assets/Illustration.png';
import myImage1 from './assets/tokyo-magnifier-web-search-with-elements-1.png';
import myImage2 from './assets/Group-31.png';
import myImage3 from './assets/Person.png';
import myImage4 from './assets/Icon.png';
import myImage5 from './assets/Logo.png';
import myImage6 from './assets/Logo1.png';
import myImage7 from './assets/Burger-menu-icon.png';
import myImage8 from './assets/Icon-plus.png';
import myImage9 from './assets/tokyo-selecting-a-value-in-the-browser-window-1.png';
import myImage10 from './assets/tokyo-browser-window-with-emoticon-likes-and-stars-around-1.png';
import myImage11 from './assets/Group-1.png';
import myImage12 from './assets/Icon-2.png';
import myImage13 from './assets/Bubble.png';
import myImage14 from './assets/Arrow-black-left.png';
import myImage15 from './assets/Arrow-white-right.png';
import myImage16 from './assets/Vector.png';
import myImage17 from './assets/Vector-1.png';
import myImage18 from './assets/tokyo-sending-messages-from-one-place-to-another-1.png';
import myImage19 from './assets/tokyo-many-browser-windows-with-different-information-1.png';
import myImage20 from './assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers-1.png';
import myImage21 from './assets/Person-1.png';
import myImage22 from './assets/Person-2.png';
import myImage23 from './assets/Person-3.png';
import myImage24 from './assets/Frame-19.png';

// Require all images from the assets/images directory
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('C:/Users/anden/web-page-langind/src/assets/', false, /\.(png|jpe?g|svg)$/))

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <section className='w-full space-y-5'>

       <div className='w-full flex pt-[30px]'>
        {/* Header */}
        <div className='w-full flex place-content-between'>
          <div className='flex px-5'>{/* Logo */}
            <img src={myImage6} alt="My Image" />
          </div>
          <div className='flex px-5'>{/* Menu */}
            <img src={myImage7} alt="My Image" />
          </div>
        </div>
      </div>

        <div className='w-full flex flex-col pt-10'>
        {/*Intro */}
          <div className='flex justify-center'>{/*Main text*/}
            <span className='text-left px-5 font-space-grotesk font-medium text-[43px] leading-[54.87px] text-black'>Navigating the digital landscape for success</span>
          </div>
          <div className='flex px-[34px] pt-[10px] justify-center'>{/* Image */}
            <img src={myImage} alt="My Image" />
          </div>
          <div className='flex px-[10px] pt-[20px] justify-center'>{/* Text */}
            <span className='text-left px-[10px] font-space-grotesk font-normal text-[16px] leading-[24px] text-black'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</span>
          </div>
          <div className='flex px-[20px] pt-[40px] justify-center'>{/* Button */}
            <button className='flex bg-customColor rounded-[14px]'><span className='flex px-[98px] py-[20px] font-space-grotesk font-normal text-[20px] leading-[28px] text-white'>Book a consultation</span></button>
          </div>
        </div>

        <div className='w-full flex flex-col pt-[60px] md:pt-[140px]'>
        {/*Services*/}
          <div className='flex flex-col md:flex-row'>
            <div className='flex justify-center justify-items-center md:px-[30px] md:pl-[100px]'>{/* Main text */}
              <span className='bg-customColorGreen text-centre px-[7px] font-space-grotesk font-medium text-[36px] leading-[45.94px] text-black'>Services</span>
            </div>
            <div className='flex px-[10px] pt-[30px] md:pt-0 justify-center justify-items-center'>{/* Text */}
              <span className='text-centre md:text-left px-[10px] font-space-grotesk font-normal text-[16px] leading-[24px] text-black md:max-w-[580px]'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</span>
            </div>
          </div>
          <div className='flex flex-col md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-5 space-y-[30px] md:space-y-0  px-[20px] pt-[40px] justify-center'>{/*Blocks */}
            {/*Block - 1 */}
            <div className='flex flex-col bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='p-[50px]'>
                <div className='flex flex-col justify-start pr-[96px]'>
                  <div className='flex'>
                    <span className='text-left inline-block bg-customColorGreen rounded-[7px] text-centre px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Search engine</span>
                  </div>
                  <div className='flex'>
                    <span className='text-left inline-block bg-customColorGreen rounded-[7px] px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>optimization</span>
                  </div>
                </div>
                <div className='flex place-content-between'>
                  <div className='flex p-[41px] relative'>
                    <img className='absolute left-0 bottom-0' src={myImage2} alt="My Image2" />
                  </div>
                  <div className='flex'>
                    <img src={myImage1} alt="My Image1" />
                  </div>
                </div>
              </div>
            </div>
            {/*Block - 2 */}
            <div className='flex flex-col bg-customColorGreen border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='p-[50px]'>
                <div className='flex flex-col justify-start pr-[96px]'>
                  <div className='flex'>
                    <span className='text-left inline-block bg-white rounded-[7px] text-centre px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Pay-per-click</span>
                  </div>
                  <div className='flex'>
                    <span className='text-left inline-block bg-white rounded-[7px] px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>advertising</span>
                  </div>
                </div>
                <div className='flex place-content-between'>
                  <div className='flex p-[41px] relative'>
                    <img className='absolute left-0 bottom-0' src={myImage2} alt="My Image2" />
                  </div>
                  <div className='flex'>
                    <img src={myImage9} alt="My Image9" />
                  </div>
                </div>
              </div>
            </div>
            {/*Block - 3 */}
            <div className='flex flex-col bg-customColor border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='p-[50px]'>
                <div className='flex flex-col justify-start pr-[96px]'>
                  <div className='flex'>
                    <span className='text-left inline-block bg-white rounded-[7px] text-centre px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Social Media</span>
                  </div>
                  <div className='flex'>
                    <span className='text-left inline-block bg-white rounded-[7px] px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Marketing</span>
                  </div>
                </div>
                <div className='flex place-content-between'>
                  <div className='flex p-[41px] relative'>
                    <img className='absolute left-0 bottom-0' src={myImage11} alt="My Image11" />
                  </div>
                  <div className='flex'>
                    <img src={myImage24} alt="My Image24" />
                  </div>
                </div>
              </div>
            </div>
            {/*Block - 4 */}
            <div className='flex flex-col bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='p-[50px]'>
                <div className='flex flex-col justify-start pr-[96px]'>
                  <div className='flex'>
                    <span className='text-left inline-block bg-customColorGreen rounded-[7px] text-centre px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Email</span>
                  </div>
                  <div className='flex'>
                    <span className='text-left inline-block bg-customColorGreen rounded-[7px] px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Marketing</span>
                  </div>
                </div>
                <div className='flex place-content-between'>
                  <div className='flex p-[41px] relative'>
                    <img className='absolute left-0 bottom-0' src={myImage2} alt="My Image2" />
                  </div>
                  <div className='flex'>
                    <img src={myImage18} alt="My Image1" />
                  </div>
                </div>
              </div>
            </div>
            {/*Block - 5 */}
            <div className='flex flex-col bg-customColorGreen border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='p-[50px]'>
                <div className='flex flex-col justify-start pr-[96px]'>
                  <div className='flex'>
                    <span className='text-left inline-block bg-white rounded-[7px] text-centre px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Content</span>
                  </div>
                  <div className='flex'>
                    <span className='text-left inline-block bg-white rounded-[7px] px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Creation</span>
                  </div>
                </div>
                <div className='flex place-content-between'>
                  <div className='flex p-[41px] relative'>
                    <img className='absolute left-0 bottom-0' src={myImage2} alt="My Image2" />
                  </div>
                  <div className='flex'>
                    <img src={myImage19} alt="My Image9" />
                  </div>
                </div>
              </div>
            </div>
            {/*Block - 6 */}
            <div className='flex flex-col bg-customColor border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='p-[50px]'>
                <div className='flex flex-col justify-start pr-[96px]'>
                  <div className='flex'>
                    <span className='text-left inline-block bg-white rounded-[7px] text-centre px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Analytics and</span>
                  </div>
                  <div className='flex'>
                    <span className='text-left inline-block bg-white rounded-[7px] px-[7px] font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Tracking</span>
                  </div>
                </div>
                <div className='flex place-content-between'>
                  <div className='flex p-[41px] relative'>
                    <img className='absolute left-0 bottom-0' src={myImage11} alt="My Image11" />
                  </div>
                  <div className='flex'>
                    <img src={myImage20} alt="My Image10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col pt-[70.53px] place-content-center justify-center justify-items-center'>
        {/*Let’s make things happen */}
          <div className='flex px-[20px] md:px-[100px] md:max-w-[1240px] md:max-h-[347px] justify-center place-content-center justify-items-center'>
            <div className='w-full flex p-[50px] md:p-[60px] bg-gray-100 rounded-[45px] justify-center'>
              <div className='flex flex-col md:max-w-[500px] space-y-[20px]'>
                <div className='flex justify-center md:justify-start'>{/* Main text */}
                  <span className='text-left font-space-grotesk font-medium text-[26px] leading-[33.18px] text-black'>Let’s make things happen</span>
                </div>
                <div className='flex justify-center md:justify-start'>{/* Text */}
                  <span className='text-left font-space-grotesk font-normal text-[16px] leading-[24px] text-black'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</span>
                </div>
                <div className='flex justify-center md:justify-start'>{/* Button */}
                  <button className='flex bg-customColor rounded-[14px]'><span className='flex px-[58px] py-[20px] font-space-grotesk font-normal text-[20px] leading-[28px] text-white'>Get your proposal</span></button>
                </div>
              </div>
              <div className='hidden md:flex'>
                    <img src={myImage24} alt="My Image24" />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col pt-[60px]'>
        {/*Case Studies */}
          <div className=' flex flex-col px-[20px]'>
            <div className='flex justify-center'>{/* Main text */}
              <span className='bg-customColorGreen text-centre px-[7px] font-space-grotesk font-medium text-[36px] leading-[45.94px] text-black'>Case Studies</span>
            </div>
            <div className='flex px-[10px] pt-[30px] justify-center'>{/* Text */}
              <span className='text-centre px-[10px] font-space-grotesk font-normal text-[16px] leading-[24px] text-black'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</span>
            </div>
          </div>
          <div className='flex flex-col space-y-[30px] px-[20px] pt-[40px] justify-center'>{/* Blocks */}
            {/*Block - 1 */}
            <div className='flex flex-col bg-customColor border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='p-[50px]'>
                <div className='flex flex-col justify-start'>
                  <span className='text-left font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</span>
                </div>
                <div className='flex pt-[20px]'>
                  <div className='flex flex-col place-content-center justify-center justify-items-cente pr-[15px]'>
                    <span className='text-left font-space-grotesk font-normal text-[20px] leading-[28px] text-customColorGreen'>Lear more</span>
                  </div>
                  <div className='flex py-[9px] place-content-center justify-center justify-items-center'>
                    <img src={myImage12} alt="My Image12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col pt-[60px]'>
        {/*Our Working Proces */}
          <div className=' flex flex-col px-[20px]'>
            <div className='flex flex-col justify-center'>{/* Main text*/}
              <div>
                <span className='bg-customColorGreen text-centre px-[7px] font-space-grotesk font-medium text-[36px] leading-[45.94px] text-black'>Our Working</span>
              </div>
              <div>
                <span className='bg-customColorGreen text-centre px-[7px] font-space-grotesk font-medium text-[36px] leading-[45.94px] text-black'>Process</span>
              </div>
            </div>
            <div className='flex px-[10px] pt-[30px] justify-center'>{/* Text */}
              <span className='text-centre px-[10px] font-space-grotesk font-normal text-[16px] leading-[24px] text-black'>Step-by-Step Guide to Achieving Your Business Goals</span>
            </div>
          </div>
          <div className='w-full flex flex-col px-[20px] pt-[40px] justify-center space-y-[20px]'>{/* Blocks */}
            {/* Block - 1 */}
            <div className='w-full flex bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='w-full flex place-content-between p-[30px]'>
                <div className='flex space-x-[33px]'>
                  <div className='flex'>{/* Text */}
                    <span className='place-content-center font-space-grotesk font-normal text-[30px] leading-[38.28px] text-black'>01</span>
                  </div>
                  <div className='flex'>{/* Text */}
                    <span className='text-left place-content-center font-space-grotesk font-normal text-[18px] leading-[22.97px] text-black'>Consultation</span>
                  </div>
                </div>
                <div className='flex'>{/* Image */}
                  <div className="flex relative p-[15px]">
                    <img src={myImage8} alt="My Image"  className='absolute top-1/2 left-0 -translate-y-1/2'/>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - 2 */}
            <div className='w-full flex bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='w-full flex place-content-between p-[30px]'>
                <div className='flex space-x-[33px]'>
                  <div className='flex'>{/* Text */}
                    <span className='place-content-center font-space-grotesk font-normal text-[30px] leading-[38.28px] text-black'>02</span>
                  </div>
                  <div className='flex'>{/* Text */}
                    <span className='text-left place-content-center font-space-grotesk font-normal text-[18px] leading-[22.97px] text-black'>Research and Strategy Development</span>
                  </div>
                </div>
                <div className='flex'>{/* Image */}
                  <div className="flex relative p-[15px]">
                    <img src={myImage8} alt="My Image"  className='absolute top-1/2 left-0 -translate-y-1/2'/>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - 3 */}
            <div className='w-full flex bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='w-full flex place-content-between p-[30px]'>
                <div className='flex space-x-[33px]'>
                  <div className='flex'>{/* Text */}
                    <span className='place-content-center font-space-grotesk font-normal text-[30px] leading-[38.28px] text-black'>03</span>
                  </div>
                  <div className='flex'>{/* Text */}
                    <span className='text-left place-content-center font-space-grotesk font-normal text-[18px] leading-[22.97px] text-black'>Implementation</span>
                  </div>
                </div>
                <div className='flex'>{/* Image */}
                  <div className="flex relative p-[15px]">
                    <img src={myImage8} alt="My Image"  className='absolute top-1/2 left-0 -translate-y-1/2'/>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - 4 */}
            <div className='w-full flex bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='w-full flex place-content-between p-[30px]'>
                <div className='flex space-x-[33px]'>
                  <div className='flex'>{/* Text */}
                    <span className='place-content-center font-space-grotesk font-normal text-[30px] leading-[38.28px] text-black'>04</span>
                  </div>
                  <div className='flex'>{/* Text */}
                    <span className='text-left place-content-center font-space-grotesk font-normal text-[18px] leading-[22.97px] text-black'>Monitoring and Optimization</span>
                  </div>
                </div>
                <div className='flex'>{/* Image */}
                  <div className="flex relative p-[15px]">
                    <img src={myImage8} alt="My Image"  className='absolute top-1/2 left-0 -translate-y-1/2'/>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - 5 */}
            <div className='w-full flex bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='w-full flex place-content-between p-[30px]'>
                <div className='flex space-x-[33px]'>
                  <div className='flex'>{/* Text */}
                    <span className='place-content-center font-space-grotesk font-normal text-[30px] leading-[38.28px] text-black'>05</span>
                  </div>
                  <div className='flex'>{/* Text */}
                    <span className='text-left place-content-center font-space-grotesk font-normal text-[18px] leading-[22.97px] text-black'>Reporting and Communication</span>
                  </div>
                </div>
                <div className='flex'>{/* Image */}
                  <div className="flex relative p-[15px]">
                    <img src={myImage8} alt="My Image"  className='absolute top-1/2 left-0 -translate-y-1/2'/>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - 6 */}
            <div className='w-full flex bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='w-full flex place-content-between p-[30px]'>
                <div className='flex space-x-[33px]'>
                  <div className='flex'>{/* Text */}
                    <span className='place-content-center font-space-grotesk font-normal text-[30px] leading-[38.28px] text-black'>06</span>
                  </div>
                  <div className='flex'>{/* Text */}
                    <span className='text-left place-content-center font-space-grotesk font-normal text-[18px] leading-[22.97px] text-black'>Continual Improvement</span>
                  </div>
                </div>
                <div className='flex'>{/* Image */}
                  <div className="flex relative p-[15px]">
                    <img src={myImage8} alt="My Image"  className='absolute top-1/2 left-0 -translate-y-1/2'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col pt-[60px]'>
        {/*Team */}
        <div className=' flex flex-col px-[20px]'>
          <div className='flex flex-col justify-center'>{/* Main text */}
            <div className='flex place-content-center'>
              <span className='bg-customColorGreen text-centre px-[7px] font-space-grotesk font-medium text-[36px] leading-[45.94px] text-black'>Team</span>
            </div>
          </div>
          <div className='flex px-[10px] pt-[30px] justify-center'>{/* Text */}
            <span className='text-centre px-[10px] font-space-grotesk font-normal text-[16px] leading-[24px] text-black'>Meet the skilled and experienced team behind our successful digital marketing strategies</span>
          </div>
        </div>
        {/* Blocks */}
        <div className='flex flex-col md:grid md:grid-cols-3 pt-[40px] px-[20px] md:px-[100px] space-y-[30px] md:space-y-0 md:gap-10'>
          {/* Block - 1 */}
          <div className='md:max-w-[387px] md:max-h-[331px] flex flex-col bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
            <div className='flex flex-col px-[50px] md:px-[35px] py-[40px] space-y-[20px] md:space-y-[28px]'>
              <div className='flex justify-center justify-items-center'>
                <img src={myImage3} alt="My Image" />
              </div>
              <div className='flex border-2 border-gray-400'></div>
              <div className='flex justify-center justify-items-center'>
                <span className='text-left px-[10px] font-space-grotesk font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[22.97px] text-black'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</span>
              </div>
            </div>
          </div>
          {/* Block - 2 */}
          <div className='md:max-w-[387px] md:max-h-[331px] flex flex-col bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
            <div className='flex flex-col px-[50px] md:px-[35px] py-[40px] space-y-[20px] md:space-y-[28px]'>
              <div className='flex justify-center justify-items-center'>
                <img src={myImage21} alt="My Image" />
              </div>
              <div className='flex border-2 border-gray-400'></div>
              <div className='flex justify-center justify-items-center'>
                <span className='text-left px-[10px] font-space-grotesk font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[22.97px] text-black'>7+ years of experience in project management and team leadership. Strong organizational and communication skills</span>
              </div>
            </div>
          </div>
          {/* Block - 3 */}
          <div className='md:max-w-[387px] md:max-h-[331px] flex flex-col bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
            <div className='flex flex-col px-[50px] md:px-[35px] py-[40px] space-y-[20px] md:space-y-[28px]'>
              <div className='flex justify-center justify-items-center'>
                <img src={myImage22} alt="My Image" />
              </div>
              <div className='flex border-2 border-gray-400'></div>
              <div className='flex justify-center justify-items-center'>
                <span className='text-left px-[10px] font-space-grotesk font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[22.97px] text-black'>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</span>
              </div>
            </div>
          </div>
          {/* Block - 4 */}
          <div className='md:max-w-[387px] md:max-h-[331px] flex flex-col bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
            <div className='flex flex-col px-[50px] md:px-[35px] py-[40px] space-y-[20px] md:space-y-[28px]'>
              <div className='flex justify-center justify-items-center'>
                <img src={myImage23} alt="My Image" />
              </div>
              <div className='flex border-2 border-gray-400'></div>
              <div className='flex justify-center justify-items-center'>
                <span className='text-left px-[10px] font-space-grotesk font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[22.97px] text-black'>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</span>
              </div>
            </div>
          </div>
          {/* Block - 5 */}
          <div className='md:max-w-[387px] md:max-h-[331px] hidden md:flex flex-col bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
            <div className='flex flex-col px-[50px] md:px-[35px] py-[40px] space-y-[20px] md:space-y-[28px]'>
              <div className='flex justify-center justify-items-center'>
                <img src={myImage23} alt="My Image" />
              </div>
              <div className='flex border-2 border-gray-400'></div>
              <div className='flex justify-center justify-items-center'>
                <span className='text-left px-[10px] font-space-grotesk font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[22.97px] text-black'>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</span>
              </div>
            </div>
          </div>
          {/* Block - 6 */}
          <div className='md:max-w-[387px] md:max-h-[331px] hidden md:flex flex-col bg-gray-100 border border-black rounded-[45px] shadow-black shadow-md'>
            <div className='flex flex-col px-[50px] md:px-[35px] py-[40px] space-y-[20px] md:space-y-[28px]'>
              <div className='flex justify-center justify-items-center'>
                <img src={myImage23} alt="My Image" />
              </div>
              <div className='flex border-2 border-gray-400'></div>
              <div className='flex justify-center justify-items-center'>
                <span className='text-left px-[10px] font-space-grotesk font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[22.97px] text-black'>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center md:justify-end pt-[38.71px] md:pt-[40px] md:px-[100px]'>{/* Button */}
            <button className='flex bg-customColor rounded-[14px]'><span className='flex px-[58px] py-[20px] font-space-grotesk font-normal text-[20px] leading-[28px] text-white'>See all team</span></button>
          </div>
      </div>

      <div className='w-full flex flex-col pt-[60px]'>
        {/* Testimonials */}
          <div className=' flex flex-col px-[20px]'>
            <div className='flex flex-col justify-center'>{/* Main text */}
              <div>
                <span className='bg-customColorGreen text-centre px-[7px] font-space-grotesk font-medium text-[36px] leading-[45.94px] text-black'>Testimonials</span>
              </div>
            </div>
            <div className='flex px-[10px] pt-[30px] justify-center'>{/* Text*/}
              <span className='text-centre px-[10px] font-space-grotesk font-normal text-[16px] leading-[24px] text-black'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</span>
            </div>
          </div>
          <div className='flex flex-col pt-[40px] px-[20px]'>{/* Blocks */}
            {/* Block - 1 */}
            <div className='flex flex-col max-w-[390px] bg-customColor border border-black rounded-[45px] shadow-black shadow-md'>
              <div className='flex flex-col px-[30px] py-[30px] space-y-[20px]'>
                <div className='flex relative justify-center justify-items-center max-w-[330px]'>
                  <img className='flex  ' src={myImage13} alt="My Image13" />
                  <div className='flex absolute justify-center justify-items-center place-content-center'>
                    <span className='text-left px-[30px] pt-[30px] pb-[56.38px] font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</span>
                  </div>
                </div>
            </div>
            <div className='flex flex-col justify-left justify-items-left pl-[95px] pr-44px]'>
              <span className='text-left font-space-grotesk font-normal text-[18px] leading-[22.97px] text-customColorGreen'>John Smith</span>
              <span className='text-left font-space-grotesk font-normal text-[18px] leading-[22.97px] text-white'>Marketing Director at XYZ Corp</span>
            </div>
            <div className='flex px-[30px] py-[60px] place-content-around'>
              <div className='flex py-[7px] justify-center justify-items-center'>
                <img className='flex' src={myImage14} alt="My Image14" />
              </div>
              <div className='w-full place-content-center space-x-[14px] flex px-[72px]'>
                <div className='place-content-center'>
                  <img src={myImage16} alt="My Image17" />
                </div>
                <div className='place-content-center'>
                  <img src={myImage17} alt="My Image17" />
                </div>
                <div className='place-content-center'>
                  <img src={myImage17} alt="My Image17" />
                </div>
                <div className='place-content-center'>
                  <img src={myImage17} alt="My Image17" />
                </div>
                <div className='place-content-center'>
                  <img src={myImage17} alt="My Image17" />
                </div>
              </div>
            <div className='flex py-[7px] justify-center justify-items-center'>
              <img className='flex' src={myImage15} alt="My Image15" />
            </div>
          </div> 
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col pt-[60px]'>
        {/* Contact us */}
          <div className=' flex flex-col px-[20px]'>
            <div className='flex flex-col justify-center'>{/* Text */}
              <div className='flex justify-center'>
                <span className='bg-customColorGreen text-centre px-[7px] font-space-grotesk font-medium text-[36px] leading-[45.94px] text-black'>Contact Us</span>
              </div>
            </div>
            <div className='flex px-[10px] pt-[30px] justify-center'>{/* Text */}
              <span className='text-centre px-[10px] font-space-grotesk font-normal text-[16px] leading-[24px] text-black'>Connect with Us: Let's Discuss Your Digital Marketing Needs</span>
            </div>
          </div>
          <div className='flex flex-col pt-[40px] px-[20px]'>{/* Blocks */}
            <div className='flex flex-col bg-gray-100 rounded-[45px]'>
              <div className='w-full flex px-[60px] md:px-[100px] place-content-between pt-[40px] space-x-[60px] justify-center md:justify-start'>
                <div className='flex justify-start space-x-[15px]'>{/* Say hi */}
                  <div className='flex border border-black rounded-full p-[5px] m-auto'><div className='flex bg-customColorGreen rounded-full p-[8px] m-auto'></div></div>
                  <div className='w-full flex py-[4px]'>
                    <span className='place-content-center text-left font-space-grotesk font-normal text-[16px] leading-[20.42px] text-black'>Say Hi</span>
                  </div>
                </div>
                <div className='flex justify-start space-x-[15px]'>{/* Get a Quote */}
                  <div className='flex border border-black rounded-full p-[13px] m-auto'></div>
                  <div className='w-full flex'>
                    <span className='place-content-center text-left font-space-grotesk font-normal text-[16px] leading-[20.42px] text-black'>Get a Quote</span>
                  </div>
                </div> 
              </div>
              <div className='flex flex-col px-[30px] md:px-[100px] space-y-[20px] pt-[36px] pb-[40px] md:max-w-[556px]'>{/* Inputs */}
                <div className='flex flex-col space-y-[10px]'>
                  <div className='flex justify-start'>{/* Name */}
                    <span className='text-centre font-space-grotesk font-normal text-[16px] leading-[17.86px] text-black'>Name</span>
                  </div>
                  <div className='flex'>
                    <button className='w-full flex border broder-white bg-white rounded-[14px]'><span className='flex pl-[25px] py-[21px] font-space-grotesk font-normal text-[16px] leading-[24px] text-gray-500'>Name</span></button>
                  </div>
                </div>
                <div className='flex flex-col space-y-[10px]'>
                  <div className='flex justify-start'>{/* Email */}
                    <span className='text-centre font-space-grotesk font-normal text-[16px] leading-[17.86px] text-black'>Email*</span>
                  </div>
                  <div className='flex'>
                    <button className='w-full flex border broder-white bg-white rounded-[14px]'><span className='flex pl-[25px] py-[21px] font-space-grotesk font-normal text-[16px] leading-[24px] text-gray-500'>Email</span></button>
                  </div>
                </div>
                <div className='flex flex-col space-y-[10px]'>
                  <div className='flex justify-start'>{/* message */}
                    <span className='text-centre font-space-grotesk font-normal text-[14px] leading-[17.86px] text-black'>Message*</span>
                  </div>
                  <div className='flex'>
                    <button className='w-full flex border broder-white bg-white rounded-[14px]'><span className='flex pl-[25px] pt-[18px] pb-[90px] font-space-grotesk font-normal text-[16px] leading-[24px] text-gray-500'>Message</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center justify-items-center pt-[38.71px] md:pt-10 px-[20px] md:px-[100px] md:max-w-[556px]'>{/* Button */}
            <button className='w-full flex bg-customColor rounded-[14px] place-content-center'><span className='flex py-[20px] font-space-grotesk font-normal text-[20px] leading-[28px] text-white'>Send Message</span></button>
          </div>
      </div>

      <div className='w-full flex flex-col pt-[60px] bg-customColor md:px-[100px] md:rounded-[45px]'>
        {/* Footer */}
          <div className='flex justify-center justify-items-center'>{/* Logo */}
            <img src={myImage5} alt="My Image" />
          </div>
          <div className=' flex flex-col px-[175.5px] space-y-[15px] pt-[37px]'>{/* Info */}
            <div className='flex justify-center'>
              <span className='text-centre font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>About us</span>
            </div>
            <div className='flex justify-center'>
              <span className='text-centre font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>Services</span>
            </div>
            <div className='flex justify-center'>
              <span className='text-centre  font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>Use Cases</span>
            </div>
            <div className='flex justify-center'>
              <span className='text-centre font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>Pricing</span>
            </div>
          </div>
          <div className='flex justify-center py-[37px]'>{/* Contact us */}
              <span className='text-centre bg-customColorGreen px-[4.5px] rounded-[7px] font-space-grotesk font-normal text-[16px] leading-[24px] text-black'>Contact us:</span>
          </div>
          <div className=' flex flex-col px-[67.5px] space-y-[15px]'>{/* Info - 2 */}
            <div className='flex justify-center'>
              <span className='text-centre px-[4.5px] font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>Email: info@positivus.com</span>
            </div>
            <div className='flex justify-center'>
              <span className='text-centre font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>Phone: 555-567-8901</span>
            </div>
            <div className='flex flex-col justify-center'>
              <span className='text-centre px-[4.5px] font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>Address: 1234 Main St</span>
              <span className='text-centre px-[4.5px] font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>Moonstone City, Stardust State 12345</span>
            </div>
          </div>
          <div className='flex flex-col pt-[40px] px-[20px]'>{/* Blocks */}
            <div className='flex flex-col bg-customColorBlackGray rounded-[45px]'>
              <div className='flex flex-col p-[30px] space-y-[22px]'>
                <div className='flex justify-center'>{/* Button */}
                  <button className='flex border broder-white rounded-[14px]'><span className='flex pl-[25px] pr-[245px] py-[21px] font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>Email</span></button>
                </div>
                <div className='flex justify-center'>{/* Button */}
                  <button className='flex bg-customColorGreen rounded-[14px]'><span className='flex px-[75.5px] py-[20px] font-space-grotesk font-normal text-[20px] leading-[28px] text-black'>Subscribe to news</span></button>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex px-[150px] space-x-[20px] py-[37px] place-content-center'>{/* Social Media */}
            <div className='flex justify-center'>
              <div className='flex justify-center justify-items-center'>
                <img src={myImage4} alt="My Image" />
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='flex justify-center justify-items-center'>
                <img src={myImage4} alt="My Image" />
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='flex justify-center justify-items-center'>
                <img src={myImage4} alt="My Image" />
              </div>
            </div>
          </div>
          <div className='px-[20px]'>{/* Border */}
            <div className='border border-white'></div>
          </div>
          <div className='flex flex-col px-[71px] space-y-[15px] pt-[37px] pb-[30px]'>{/* All Rights Reserved */}
            <div className='flex justify-center'>
              <span className='text-centre px-[4.5px] font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>© 2023 Positivus. All Rights Reserved.</span>
            </div>
            <div className='flex justify-center'>
              <span className='text-centre font-space-grotesk font-normal text-[16px] leading-[24px] text-white'>Privacy Policy</span>
            </div>
          </div>
      </div>

       </section>
      </header>
    </div>
  );
}

export default App;
