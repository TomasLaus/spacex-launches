import type { Doc, APISpaceXResponse } from "../types/api";

export const getLaunchById = async ({ id }: { id: string }) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launch = (await res.json()) as Doc;

    console.log(launch);

    return launch
}


export const getOldestLaunches = async (num: number = 20) => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "desc",
                },
                limit: 20 + num,
            },
        }),
    });
    const { docs: launches } = (await res.json()) as APISpaceXResponse;

    console.log(launches);

    return launches
}


export const getLatestLaunches = async (num: number = 20) => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 20 + num,
            },
        }),
    });
    const { docs: launches } = (await res.json()) as APISpaceXResponse;

    console.log(launches);

    return launches
}