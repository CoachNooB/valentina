import React from 'react';
// import './ImageLinkForm.css';

const Rank = ({ name, entries }) => {
    return (
        <div>
           <div className='f3'>
                {`Hello ${name}, Your Entry Count are ...`}
           </div>
           <div className='f1'>
                {entries}
           </div>
        </div>
    );
}

export default Rank;