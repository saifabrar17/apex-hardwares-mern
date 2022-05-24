import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-primary text-4xl py-3'>BLOGS</h1>

            <div className='mx-2 lg:mx-20'>
                <div tabindex="0" class="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        1. How will we improve the performance of a React Application?
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>

                <div tabindex="0" class="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        2. What are the different ways to manage a state in a React application?
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>

                <div tabindex="0" class="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                       3. How does prototypical inheritance work?
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>

                <div tabindex="0" class="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        4. We have an array of products. Each product has a name, price, description, etc. How to implement a search to find products by name?
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>


                <div tabindex="0" class="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        5.What is a unit test? Why should write unit tests?
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;