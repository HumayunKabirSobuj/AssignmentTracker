
const About = () => {
    return (
        <div className="bg-gray-100 text-gray-900 py-12">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg">Learn more about the team behind AssignmentTracker.</p>
                </div>

                <div className="mb-12">
                    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                        <p className="text-base">
                            Welcome to AssignmentTracker, your go-to platform for managing and tracking assignments with ease.
                            Our team is dedicated to helping students and professionals stay organized and on top of their tasks.
                            With innovative features and a user-friendly interface, we aim to make assignment management
                            as effortless as possible.
                        </p>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-base">
                            At AssignmentTracker, our mission is to empower users to achieve their academic and professional goals
                            by providing a comprehensive tool for tracking and managing assignments. We believe that with
                            the right tools, everyone can reach their full potential and succeed in their endeavors.
                        </p>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
                        <div className="flex flex-wrap -mx-4">
                            {/* Team Member 1 */}
                            <div className="w-full md:w-1/3 px-4 mb-8 ">
                                <div className="bg-gray-200 p-4 rounded-lg text-center  h-[320px]">
                                    <img
                                        src="https://i.ibb.co/QP3qR6m/autor-image-5-modified.png"

                                        className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                                    />
                                    <h3 className="text-lg font-semibold">John Doe</h3>
                                    <p className="text-gray-600">Founder & CEO</p>
                                    <p className="mt-2">
                                        John is the visionary behind AssignmentTracker, dedicated to bringing innovative solutions
                                        to the world of assignment management.
                                    </p>
                                </div>
                            </div>
                            {/* Team Member 2 */}
                            <div className="w-full md:w-1/3 px-4 mb-8">
                                <div className="bg-gray-200 p-4 rounded-lg text-center  h-[320px]">
                                    <img
                                        src="https://i.ibb.co/HPnqjBJ/autor-image-3-modified.png"

                                        className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                                    />
                                    <h3 className="text-lg font-semibold">Jane Smith</h3>
                                    <p className="text-gray-600">CTO</p>
                                    <p className="mt-2">
                                        Jane leads our tech team, ensuring that AssignmentTracker remains cutting-edge and reliable
                                        for all our users.
                                    </p>
                                </div>
                            </div>
                            {/* Team Member 3 */}
                            <div className="w-full md:w-1/3 px-4 mb-8">
                                <div className="bg-gray-200 p-4 rounded-lg text-center  h-[320px]">
                                    <img
                                        src="https://i.ibb.co/B3JTD3f/autor-image-1-modified.png"

                                        className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                                    />
                                    <h3 className="text-lg font-semibold">Alice Johnson</h3>
                                    <p className="text-gray-600">Marketing Lead</p>
                                    <p className="mt-2">
                                        Alice is passionate about spreading the word about AssignmentTracker and connecting with our
                                        community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-base mb-4">
                            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
                        </p>
                        <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-1/2 mb-4 sm:mb-0 sm:pr-4">
                                <h3 className="text-lg font-semibold mb-2">Email</h3>
                                <p>contact@assignmenttracker.com</p>
                            </div>
                            <div className="sm:w-1/2 sm:pl-4">
                                <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                                <p>
                                    Follow us on <a href="https://twitter.com" className="text-blue-500 hover:underline">Twitter</a>,
                                    <a href="https://facebook.com" className="text-blue-500 hover:underline">Facebook</a>, and
                                    <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
