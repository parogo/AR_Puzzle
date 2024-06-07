import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function SetPagination({ list_page, list, count }) {
    const [active, setActive] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(5);

}

export default SetPagination;