import React from 'react';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-4rem-4rem)]">
            <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-11/12 max-w-4xl text-center">
                <Welcome />
                <p className="mt-5 text-xl">
                    The official website of the Information Science and Engineering branch in Ramaiah Institute of Technology, Bengaluru.
                </p>
            </div>
        </div>
    );
};

export default Home