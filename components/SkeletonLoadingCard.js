import React from 'react'

export default function SkeletonLoadingCard() {
    return (
        <div
            className="flex flex-col bg-secondary 
              dark:bg-dark_secondary overflow-hidden max-w-sm md:min-w-[300px]
                rounded-md shadow-lg hover:-translate-y-[4px] duration-300 ease-out p-4"

        >
            <div class="h-full w-full min-h-[200px] rounded-lg bg-gray-200 dark:bg-gray-600 animate-pulse " ></div>

            <div class="flex flex-col flex-1 gap-5 mt-4 ">
                <div class="flex flex-1 flex-col gap-3">
                    <div class="bg-gray-200 dark:bg-gray-600 w-full animate-pulse h-8 rounded-lg" ></div>
                    <div class="bg-gray-200 dark:bg-gray-600 w-full animate-pulse h-3 rounded-2xl" ></div>
                    <div class="bg-gray-200 dark:bg-gray-600 w-full animate-pulse h-3 rounded-2xl" ></div>
                    <div class="bg-gray-200 dark:bg-gray-600 w-full animate-pulse h-3 rounded-2xl" ></div>
                </div>
            </div>
        </div>
    )
}
