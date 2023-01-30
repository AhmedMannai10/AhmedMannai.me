import React from 'react'

export default function NewsletterCard() {
    return (
        <section className=" border border-gray-200  dark:border-gray-700 shadow-3xl bg-secondary dark:bg-dark_secondary p-6 rounded-xl " >
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto  sm:text-center">
                    <h2 className=" mt-0 font-extrabold tracking-tighter text-gray-900 text-2xl sm:text-3xl mb-4 dark:text-gray-100 ">Get Updates straite to your inbox</h2>
                    <p className="mb-2 mx-auto max-w-2xl font-light text-gray-500 md:mb-5 sm:text-xl dark:text-gray-400">
                        Stay up to date with what I am building and I will send you what I am interrested in and what could be helpful for you.
                    </p>
                    <form action="#">
                        <div className="items-center mx-auto mt-2 mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-full ">
                                <label for="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input className="block p-3 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />

                            </div>
                            <div>
                                <button type="submit" className="py-3 px-5 w-full text-md border font-medium text-center text-white rounded-lg cursor-pointer border-bg_btn  sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 bg-bg_btn">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div id="custom-substack-embed"></div>


            {/* <iframe src="https://ahmedmannai.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe> */}
        </section>
    )
}

