import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <div class="hero min-h-screen bg-hero-tools bg-no-repeat bg-cover" >
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <h1 class="mb-5 text-4xl text-white font-bold">CUSTOMERS AND EXPERTS AGREE</h1>
                                <h1 class="mb-5 text-3xl text-white font-bold">APEX HARDWARE PROVIDES BEST TOOLS</h1>

                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <div class="hero min-h-screen bg-hero-cutter bg-no-repeat bg-cover" >
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <div class="hero min-h-screen bg-hero-hammer bg-no-repeat bg-cover" >
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <h1 class="mb-5 text-6xl text-white font-bold">15% OFF</h1>
                                <h1 class="mb-5 text-5xl text-white font-bold">on HAND TOOLS</h1>

                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
        // <div class="hero min-h-screen bg-hero-pattern bg-no-repeat bg-cover" >
        //     <div class="hero-overlay bg-opacity-60"></div>
        //     <div class="hero-content text-center text-neutral-content">
        //         <div class="max-w-md">
        //             <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        //             <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

        //         </div>
        //     </div>
        // </div>



        // <div  className="hero min-h-screen bg-base-100 bg-hero-pattern bg-no-repeat bg-cover" >
        //         <div className="hero-content content-center">
        //            <h1>SOMETHING</h1>

        //         </div>
        //     </div>
    );
};

export default Banner;