import React from 'react';
import error from '../../../images/error.jpg';
const NotFound = () => {
    return (
     <div>
            <div className="items-center min-h-[80vh]">
                <div>
                    <img className='mx-auto w-[350px]' src={error} alt="" />
                </div>
            </div>
     </div>
    );
};

export default NotFound;