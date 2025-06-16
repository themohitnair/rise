import React from 'react';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem-4rem)]">
            <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-11/12 max-w-4xl text-center">
                <Welcome />
                <p className="mt-5 text-xl">
                    The crowdsourced and crowd-maintained website of the Information Science and Engineering branch in Ramaiah Institute of Technology, Bengaluru.
                </p>
                <p className="mt-5 text-sm">
                    We are not officially affiliated with the college or the university. We are a group of students who are trying to make the lives of our juniors easier.
                </p>
            </div>
        </div>
    );
};

export default Home