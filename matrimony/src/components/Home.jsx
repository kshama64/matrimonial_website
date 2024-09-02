import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProfileCard = ({ title, imageUrl, description }) => (
  <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
    <img className="w-full h-3/4 object-fill" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <h2 className="text-4xl text-center font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-lg text-center">{description}</p>
    </div>
  </div>
);
export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://assets.gqindia.com/photos/60759a8d23780a7fa9a3ecfd/master/pass/4-Indian-matrimonial-portal-that-cater-only-to-HNIs-and-can-cost-upto-Rs-5-lakh-just-to-get-registered.jpg'}}>
      <div className="absolute inset-0 bg-black opacity-25"></div>
      {/* Banner with Heading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="relative z-10 text-white">
            <h2 className="text-3xl font-bold mb-4"> Welcome to Our Matrimonial Portal </h2>
          </div>
        </div>
        {/* Form Section */}
        <div className="relative h-full flex items-center justify-end top-16 px-4 py-8">
          <div className="w-full max-w-md bg-transparent backdrop-blur-md border-2 rounded-lg shadow-lg p-6 z-10 opacity-85">
            <h2 className="text-3xl font-bold text-white text-center">Enquiry Now</h2>
            <form action="#" method="POST" className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="text-xl font-medium text-white">First Name</label>
                <input
                  className="mt-2 w-full bg-transparent rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  type="text"
                  placeholder="First Name"
                  id="name"/>
              </div>
              <div>
                <label htmlFor="email" className="text-xl font-medium text-white">Email Address</label>
                <input
                  className="mt-2 w-full bg-transparent rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  type="email"
                  placeholder="Email"
                  id="email"/>
              </div>
              <div>
                <label htmlFor="phone" className="text-xl font-medium text-white">Phone Number</label>
                <input
                  className="mt-2 w-full bg-transparent rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  type="tel"
                  placeholder="Phone Number"
                  id="phone"/>
              </div>
              <div>
                <label htmlFor="message" className="text-xl font-medium text-white">Message</label>
                <textarea
                  className="mt-2 w-full bg-transparent rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  placeholder="Your Message"
                  id="message"
                  rows="4"/> 
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-red-600 px-4 py-2 text-white font-semibold flex items-center justify-center hover:bg-red-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-16 p-6">
        <ProfileCard
          title="Bride"
          imageUrl="https://media.weddingz.in/images/04167d9ff92fc110cba566214de26d2c/South-Indian-brides-who-rocked-the-South-Indian-bridal-look42.jpg"
          description="Meet our lovely bride. She brings joy and elegance to the occasion."/>
        <ProfileCard
          title="Groom"
          imageUrl="https://thumbs.dreamstime.com/b/hindu-groom-wedding-day-stage-wearing-maroon-dress-turban-indian-photography-rajputana-style-venue-smiling-marriage-images-185735916.jpg"
          description="Meet our dashing groom. He embodies charm and sophistication."/>
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-md border">
            <img
              src="https://content.jdmagicbox.com/comp/nizamabad/h6/9999p8462.8462.190202210000.a3h6/catalogue/janta-matrimony-nizamabad-vhfuj8nnk9.jpg"
              alt="Product"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] object-cover" />
            <div className="p-4">
              <h1 className="text-lg font-semibold">Amit</h1>
              <p className="mt-3 text-sm text-gray-600">Date-of-Birth: dd/mm/yyyy</p>
              <p className="mt-3 text-sm text-gray-600">Marital Status: Never Married</p>
              <p className="mt-3 text-sm text-gray-600">Location: Address</p>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-red-300 px-2 py-1.5 text-sm font-semibold text-red-600 shadow-sm hover:bg-black/80">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Enquiry Now</h2>
              <p className="mt-2 text-base text-gray-600">
                {' '}
                <a
                  href="#"
                  title=""
                  className="font-medium text-black transition-all duration-200 hover:underline">
                  
                </a>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-base font-medium text-gray-900">
                      {' '}
                      First Name{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        type="text"
                        placeholder="First Name"
                        id="name"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                      {' '}
                      Email address{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        type="email"
                        placeholder="Email"
                        id="email"/>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="phone" className="text-base font-medium text-gray-900">
                        {' '}
                        Phone Number{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        type="tel"
                        placeholder="Phone Number"
                        id="phone"/>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="text-base font-medium text-gray-900">
                        {' '}
                        Message{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <textarea
                        className="flex h-36 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Message"
                        id="message"/>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-red-400 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-red-500">
                      Submit <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="h-full w-full">
            <img
              className="mx-auto h-full w-full rounded-md object-cover"
              src="https://bibahabd.net/wp-content/uploads/2022/11/Popular-Matrimony-websites-in-Bangladesh-1.jpg"
              alt=""/>
          </div>
        </div>
      </section>
    </>
  );
}
