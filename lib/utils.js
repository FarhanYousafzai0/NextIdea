import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function parseServerActionResponse(response) {
    return JSON.parse(JSON.stringify(response));
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function formatNumber(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M"; // Convert to millions
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k"; // Convert to thousands
    } else {
        return number.toString(); // Return the number as is if below 1000
    }
}