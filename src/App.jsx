import React from 'react';
import './App.css';

function App() {

  return (
    <div className="relative bg-primary_paleblue w-full min-h-screen font-redhat flex justify-center items-center">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/order-summary/pattern-background-desktop.svg"/>
        <img src="/order-summary/pattern-background-mobile.svg" alt="Curved wave background" className="absolute z-10 top-0 left-0 right-0 w-full -my-[20px] h-1/3 md:h-1/2"/>
      </picture>

      <main className="z-20 w-[325px] rounded-2xl bg-white overflow-hidden text-center shadow-[0px_10px_20px_rgba(56,41,224,0.2)] md:w-[400px]">
        <img src="/order-summary/illustration-hero.svg" alt="Illustration hero image on top of card"/>

        <section className="mx-6 my-8 md:m-10">
          <h1 className="text-2xl text-darkblue font-[900]">Order Summary</h1>
          <p className="text-md mt-4 text-desaturated_blue font-[500] md:text-sm">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

          <div className="flex mt-5 p-4 bg-neutral_paleblue rounded-lg justify-between items-center md:p-6">
            <div className="flex">
              <img src="/order-summary/icon-music.svg" alt="Music icon"/>

              <div className="ml-4 text-center flex flex-col justify-center">
                <p className="text-darkblue font-[900] text-sm md:text-md">Annual Plan</p>
                <p className="text-desaturated_blue font-[500] text-sm md:text-md">$59.99/year</p>
              </div>
            </div>

            <p className="text-bright_blue font-[700] text-sm cursor-pointer underline hover:no-underline hover:text-hover_purple">Change</p>
          </div>

          <button className="mt-6 w-full bg-bright_blue px-5 py-3 text-white font-[700] text-sm rounded-lg shadow-[0px_10px_20px_rgba(56,41,224,0.3)] hover:bg-hover_purple hover:shadow-[0px_10px_20px_rgba(118,108,241,0.3)]">Proceed to Payment</button>
          <p className="mt-6 text-sm text-desaturated_blue cursor-pointer font-[900] hover:text-darkblue md:mt-7">Cancel Order</p>
        </section>
      </main>
    </div>
  )
}

export default App
