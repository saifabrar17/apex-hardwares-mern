import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-primary text-4xl py-3'>BLOGS</h1>

            <div className='mx-2 lg:mx-20'>
                <div tabindex="0" className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        1. How will we improve the performance of a React Application?
                    </div>
                    <div className="collapse-content">
                        <p>Stop Unnecessery Component Rendering
                            using State Locally
                            when loading data from expternal resources,using useEffect. So that data doesn't render again and again.If needed we can use dependencies
                            using hooks to render component or load data</p>
                    </div>
                </div>

                <div tabindex="0" className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        2. What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>We can manage states in 4 ways: <br />

                            Locally<br />
                            Globaly<br />
                            From server<br />
                            From Url</p>
                    </div>
                </div>

                <div tabindex="0" className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        3. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </div>
                    <div className="collapse-content">
                        <p>If we use set products = [...] instead, you use the setProducts,it'll only update the array not the component that uses the vale of this array.But on the other side if we use "setProducats" it'll update the value as well as the component that uses the value of "products"</p>
                    </div>
                </div>

                <div tabindex="0" className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        4. We have an array of products. Each product has a name, price, description, etc. How to implement a search to find products by name?
                    </div>
                    <div className="collapse-content">
                        <p>I can use array.filter method to get the searched product.</p>
                    </div>
                </div>


                <div tabindex="0" className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        5.What is a unit test? Why should write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>Unit test means checking an application if it behaves and works as expected. Its generally automated . It shound write unit test to check if the application runs prefectly as expected .</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;