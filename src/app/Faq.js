"use client";
import React, { useState } from 'react';

export default function Faq() {

    const [faqs, setFaqs] = useState([
        {
            question: 'What is a "Credit"',
            answer: (
                "Credits are what you use to download each creative or banner that you generate on AInytime. Depending on the package you select, you will have a set number of credits available to you each month. These credits renew every month and can be used to download your generated creatives."
            ),
            visible: false,
        },
        {
            question: 'What is a "Credit"',
            answer: (
                "Credits are what you use to download each creative or banner that you generate on AInytime. Depending on the package you select, you will have a set number of credits available to you each month. These credits renew every month and can be used to download your generated creatives."
            ),
            visible: false,
        },
        {
            question: 'What is a "Credit"',
            answer: (
                "Credits are what you use to download each creative or banner that you generate on AInytime. Depending on the package you select, you will have a set number of credits available to you each month. These credits renew every month and can be used to download your generated creatives."
            ),
            visible: false,
        },
        {
            question: 'What is a "Credit"',
            answer: (
                "Credits are what you use to download each creative or banner that you generate on AInytime. Depending on the package you select, you will have a set number of credits available to you each month. These credits renew every month and can be used to download your generated creatives."
            ),
            visible: false,
        },
        {
            question: 'What is a "Credit"',
            answer: (
                "Credits are what you use to download each creative or banner that you generate on AInytime. Depending on the package you select, you will have a set number of credits available to you each month. These credits renew every month and can be used to download your generated creatives."
            ),
            visible: false,
        },
        {
            question: 'What is a "Credit"',
            answer: (
                "Credits are what you use to download each creative or banner that you generate on AInytime. Depending on the package you select, you will have a set number of credits available to you each month. These credits renew every month and can be used to download your generated creatives."
            ),
            visible: false,
        },
        {
            question: 'What is a "Credit"',
            answer: (
                "Credits are what you use to download each creative or banner that you generate on AInytime. Depending on the package you select, you will have a set number of credits available to you each month. These credits renew every month and can be used to download your generated creatives."
            ),
            visible: false,
        },
        {
            question: 'What is a "Credit"',
            answer: (
                "Credits are what you use to download each creative or banner that you generate on AInytime. Depending on the package you select, you will have a set number of credits available to you each month. These credits renew every month and can be used to download your generated creatives."
            ),
            visible: false,
        },
        {
            question: 'What is a "Credit"',
            answer: (
                "Credits are what you use to download each creative or banner that you generate on AInytime. Depending on the package you select, you will have a set number of credits available to you each month. These credits renew every month and can be used to download your generated creatives."
            ),
            visible: false,
        },
    ]);

    const toggleAnswer = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) => ({
                ...faq,
                visible: i === index ? !faq.visible : false,
            }))
        );
    };


    return (
        <>
            <div className='h-auto w-full flex py-20 items-center' style={{backgroundColor : "#FFFFFF"}}>
                <div className='w-1/2 px-6 items-center'>
                    <h1 className='text-6xl font-semibold text-start py-5 px-4'>FAQ's</h1>
                    <div
                        id="testimonial"
                        className=" justify-center mx-auto"
                    >
                        <div className="row">
                            <div className="col mx-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col rounded-lg mb-3 px-5 py-1 border border-gray-300 "
                                    >
                                        <div className="text-gray-700 font-normal text-base">
                                            <div
                                                className="flex pb-2 cursor-pointer"
                                                onClick={() => toggleAnswer(index)}
                                            >
                                                <div className="flex-grow text-[#B7007F] font-bold text-lg">{faq.question}</div>
                                                <div className="flex text-blue-600 font-bold">
                                                    <div className="mx-2 font-bold items-center text-black">
                                                        {faq.visible ? (
                                                            <span> - </span>
                                                        ) : (
                                                            <span> + </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={faq.visible ? "block text-blue-600" : "hidden"}>
                                                {/* <div className="text-blue-400">{faq.organization}</div> */}
                                                <div className="text-black">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-1/2 items-center ${faqs.some(faq => faq.visible) ? 'pt-0' : 'pt-24'}`}>
                    <img src='/images/Group 24677.png' alt='faq' className='h-auto w-auto' />
                </div>
            </div>
        </>
    )
}
