import React from 'react';

function TextCard({ text }) {
    return (
        <div className='w-full mx-auto rounded-tr-3xl rounded-bl-3xl overflow-hidden border-green-500 border-2 my-2 px-4 py-12 md:px-6 md:py-16 lg:px-10 lg:py-24 bg-white'>
            {text}
        </div>
    );
}

export default TextCard;
