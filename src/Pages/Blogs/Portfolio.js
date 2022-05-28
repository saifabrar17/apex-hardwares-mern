import React from 'react';
import dp from '../../images/dp.jpg';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='min-h-[90vh] mx-5 py-5 portfolio'>

            <div className="block lg:flex lg:flex-row gap-5 items-center">
                <div className="basis-2/5">
                    <img src={dp} className="w-56  lg:ml-auto mx-auto rounded-lg " alt="" />
                </div>

                <div className='basis-3/5 text-center lg:text-left'>
                    <h2 className='text-3xl pt-0 lg:pt-5 font-bold'>SAIF ABRAR</h2>
                    <h2 className='text-xl font-bold'>Frontend Web Developer</h2>

                    <div className="form-control  mt-2">
                        <label className="input-group justify-center lg:justify-start input-group-sm">
                            <span className='bg-primary  text-white'>Email</span>
                            <input type="text" value="saifabrar.webdev@gmail.com" disabled className="input  input-bordered input-sm w-44" />
                        </label>
                    </div>

                    <h2 className='text-xl py-1'>Studying:</h2>
                    <h2 className='text-3xl font-bold'>Computer Science and Engineering</h2>
                    <h2 className='text-xl font-bold'>Bangladesh Institute of Science & Technology</h2>


                    <h2 className='text-xl pt-5 lg:pt0 lg:pb-2 font-bold'>About Me:</h2>
                    <p className='w-full lg:w-3/4 text-justify'>I am a CSE studying student and is always passionate about programming. I've been learning programming since 2019 and currently I'm developing my skills on Frontend Development with React Js and I love to see myself as a full stack web developer in future. I always try to put my best effort on learning new elements and develop my skill. I hope to be a successful developer one day. I love to be innovative and go beyond my limit.</p>

                    <h2 className='text-xl pt-5 lg:pt0 lg:pb-2 font-bold'>Top Skills:</h2>
                    <div className='grid grid-cols-4 lg:grid-cols-6 w-fit gap-3'>
                        <p className='bg-primary inline-block px-3 py-1 text-center rounded-xl text-white'>HTML5</p>
                        <p className='bg-primary inline-block px-3 py-1 text-center rounded-xl text-white'>CSS3</p>
                        <p className='bg-primary inline-block px-3 py-1 text-center rounded-xl text-white'>JavaScript</p>
                        <p className='bg-primary inline-block px-3 py-1 text-center rounded-xl text-white'>ReactJs</p>
                        <p className='bg-primary inline-block px-3 py-1 text-center rounded-xl text-white'>Mongodb</p>
                        <p className='bg-primary inline-block px-3 py-1 text-center rounded-xl text-white'>Express</p>
                        <p className='bg-primary inline-block px-3 py-1 text-center rounded-xl text-white'>Firebase</p>
                        <p className='bg-primary inline-block px-3 py-1 text-center rounded-xl text-white'>Bootstrap5</p>
                        <p className='bg-primary inline-block px-3 py-1 text-center rounded-xl text-white'>TailwindCSS</p>

                    </div>
                </div>
            </div>

            <h1 className='text-center text-primary text-2xl pt-5 pb-3'>Latest Projects</h1>
            <div className='grid mx-auto lg:mx-20 grid-cols-1 lg:grid-cols-3 gap-5'>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Inventory Management</h2>
                        <div className="card-actions justify-center">
                         <a href="https://inventory-management-a11-ec4a6.web.app/" className="btn btn-primary text-white">Visit</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">The Artsy Lens</h2>
                        <div className="card-actions justify-center">
                         <a href="https://the-artsy-lens-f13b5.web.app/" className="btn btn-primary text-white">Visit</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Portfolio Personal Website</h2>
                        <div className="card-actions justify-center">
                         <a href="https://saifabrar17.github.io/portfolio/" className="btn btn-primary text-white">Visit</a>
                        </div>
                    </div>
                </div>

               

                
            </div>

        </div>
    );
};

export default Portfolio;