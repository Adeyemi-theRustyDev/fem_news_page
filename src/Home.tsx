const Home: React.FC = () => {
    
    return (
        <main className="container mx-auto">
            <section className="flex flex-col justify-between md:flex-row" id="top">
                {/* Hero and message */}
                <div className="flex flex-col mt-4 justify-between md:mt-0 md:w-4/6 md:mr-6">
                    <div>
                        <img src="/assets/images/image-web-3-desktop.jpg" alt="" />
                    </div>
                    {/* Message */}
                    <div className="flex flex-col gap-8 md:flex-row md:items-end">
                        <div className="font-black text-5xl text-veryDarkBlue  md:w-1/2 md:mr-12">
                            The Bright Future of Web 3.0?
                        </div>
                        <div className="flex flex-col justify-between md:w-1/2">
                            <div className="text-lg mb-4 md:mb-0 text-darkGrayishBlue">
                                We dive into the next evolution of the web that claims to put
                                the power back in the hands of the people. But is it really fulfilling
                                its promise?
                            </div>
                            <button className="bg-softRed w-48 p-2 uppercase text-offWhite hover:bg-veryDarkBlue">
                            Read more
                            </button>
                        </div>
                        
                    </div>
                </div>

                {/* Side card */}
                <div className="flex flex-col p-4 bg-veryDarkBlue mt-8 md:mt-0 md:w-2/6">
                    <div className="text-softOrange text-4xl font-extrabold">New</div>
                    {/* First list item */}
                    <div className="flex flex-col py-8 border-b border-gray-500">
                        <h1 className="text-white font-extrabold mb-2 hover:text-softOrange hover:cursor-pointer">Hydrogen VS Electric Cars</h1>
                        <p className="text-darkGrayishBlue">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    {/* Second list Item*/}
                    <div className="flex flex-col py-8 border-b border-gray-500">
                        <h1 className="text-white font-extrabold mb-2 hover:text-softOrange hover:cursor-pointer">The Downside of AI Artistry</h1>
                        <p className="text-darkGrayishBlue">What are the possible adverse effects of on-demand AI image-generation?</p>
                    </div>
                    {/* Third list item */}
                    <div className="flex flex-col py-8 border-gray-500">
                        <h1 className="text-white font-extrabold mb-2 hover:text-softOrange hover:cursor-pointer">Is VC Funding Drying Up?</h1>
                        <p className="text-darkGrayishBlue">Private funding by VC firms is down by 50% YOY. We take a look on what that means.</p>
                    </div>

                </div>
            </section>

            {/* Other Stories */}
            <section className="flex flex-col mt-24 md:gap-x-4 md:flex-row">
                {/* Retro PC Story*/}
                <div className="flex flex-row gap-4 mb-8 items-end md:mb-0 md:w-1/3">
                    <div>
                        <img src="/assets/images/image-retro-pcs.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="text-darkGrayishBlue text-2xl font-light">01</h1>
                        <h2 className="font-black text-xl text-veryDarkBlue">Reviving Retro PCs</h2>
                        <p className="text-darkGrayishBlue">What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                {/* Top Laptops Story*/}
                <div className="flex flex-row gap-4 mb-8 items-end md:mb-0 md:w-1/3">
                    <div>
                        <img src="/assets/images/image-top-laptops.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="text-darkGrayishBlue text-2xl font-light">02</h1>
                        <h2 className="font-black text-xl text-veryDarkBlue">Top 10 laptops of 2022</h2>
                        <p className="text-darkGrayishBlue">Our best picks for various needs and budgets</p>
                    </div>
                </div>
                {/* Gaming Story*/}
                <div className="flex flex-row gap-4 mb-8 items-end md:mb-0 md:w-1/3">
                    <div>
                        <img src="/assets/images/image-gaming-growth.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="text-darkGrayishBlue text-2xl font-light">03</h1>
                        <h2 className="font-black text-xl text-veryDarkBlue">The Growth of Gaming</h2>
                        <p className="text-darkGrayishBlue">How the pandemic has sparked fresh opportunities</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;