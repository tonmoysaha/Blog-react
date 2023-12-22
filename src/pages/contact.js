import React from "react";

function Contact() {
    return (
        <section class="bg-gray-200 p-8 mt-8">
            <h2 class="text-3xl font-bold mb-6">Contact Details</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="flex items-center mb-4">
                    <div class="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             class="h-6 w-6 text-blue-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-lg font-semibold">Email</p>
                        <p class="text-gray-600"><a href="mailto:info@example.com"
                                                    class="text-blue-500 hover:underline">info@example.com</a></p>
                    </div>
                </div>

                <div class="flex items-center mb-4">
                    <div class="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             class="h-6 w-6 text-blue-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-lg font-semibold">Phone</p>
                        <p class="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                </div>

                <div class="flex items-center mb-4">
                    <div class="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             class="h-6 w-6 text-blue-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-lg font-semibold">Address</p>
                        <p class="text-gray-600">123 Street, Cityville, State, 12345</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact