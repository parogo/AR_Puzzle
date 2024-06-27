import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function SetPagination({ list_page, list, count }) {
    const [active, setActive] = useState(1);
    const [listingsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);
        list_page(page);
        window.scrollTo(0, 0);
    }

    const next_number = () => {
        if (currentPage !== Math.ceil(count / 8)) {
            console.log("test");
            setCurrentPage(currentPage + 1);
            setActive(currentPage + 1);
            list_page(currentPage + 1);
            window.scrollTo(0, 0);
        }
    }

    const previous_number = () => {
        if (currentPage !== 1) {
            console.log("test");
            setCurrentPage(currentPage - 1);
            setActive(currentPage - 1);
            list_page(currentPage - 1);
            window.scrollTo(0, 0);
        }
    }

    let numbers = [];

    const getNumbers = () => {
        let itemsPerPage = listingsPerPage;
        let pageNumber = 1;

        for (let i = 0; i < count; i += itemsPerPage) {
            const page = pageNumber;
            let content = null;

            if (active === page) {
                content = (
                    <div key={i} className={`hidden md:-mt-px md:flex`}>
                        <div className="border-orange-300 text-boton-naranja border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                            {pageNumber}
                        </div>
                    </div>
                );
            }
            else {
                content = (
                    <div key={i} onClick={() => {
                        visitPage(page)
                    }} className={`hidden md:-mt-px md:flex`}>
                        <div className="cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                            {pageNumber}
                        </div>
                    </div>
                )
            }
            numbers.push(content);
            pageNumber++;
        }
        return numbers;
    }
    return (
        <div className="mt-12">
            <nav className="border-t border-white px-4 flex items-center justify-between sm:px-0">
                {
                    currentPage !== 1 ?
                        <div className="-mt-px w-0 flex-1 flex text-boton-naranja hover:text-white">
                            <div
                                onClick={() => { previous_number() }}
                                className="cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium"
                            >
                                <ArrowLeftCircleIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                                Atrás
                            </div>
                        </div>
                        :
                        <div className="-mt-px w-0 flex-1 flex">
                            <div className="cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                            </div>
                        </div>
                }
                {getNumbers()}
                {
                    numbers.length === 0 || currentPage === numbers.length ?
                        <div className="-mt-px w-0 flex-1 flex justify-end">
                        </div>
                        :
                        <div className="-mt-px w-0 flex-1 flex justify-end text-boton-naranja hover:text-white">
                            <button
                                onClick={() => { next_number() }}
                                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium "
                            >
                                Siguiente
                                <ArrowRightCircleIcon className="ml-3 h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>

                }
            </nav>
        </div >

    )
}

export default SetPagination;