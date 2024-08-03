import { motion } from 'framer-motion';
import './AnimatedText.css';
const Accordian = () => {
    return (

        <div className='my-10'>

            <div className="flex justify-center items-center my-10">
                <motion.h1
                    className="lg:text-4xl text-2xl font-extrabold text-center text-blue-500 animated-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9, rotate: -10 }}
                >
                    Why we use this
                </motion.h1>
            </div>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Efficient Assignment Management</div>
                    <div className="collapse-content">
                        <p>Streamlines the process of creating, assigning, and managing assignments.
                            Reduces the administrative workload for educators and administrators.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Improved Organization</div>
                    <div className="collapse-content">
                        <p>Centralizes all assignment-related information in one place.
                            Makes it easy to track deadlines, submissions, and grading.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Enhanced Communication</div>
                    <div className="collapse-content">
                        <p>Facilitates better communication between educators and students.
                            Allows for real-time updates and notifications about assignments.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Accessibility</div>
                    <div className="collapse-content">
                        <p>Provides students with easy access to their assignments and related resources from anywhere at any time.
                            Supports diverse learning environments, including remote and hybrid learning.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Automated Grading and Feedback</div>
                    <div className="collapse-content">
                        <p>Speeds up the grading process with automated tools.
                            Provides timely and consistent feedback to students.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Analytics and Insights</div>
                    <div className="collapse-content">
                        <p>Offers valuable data on student performance and engagement.
                        Helps educators identify areas where students may need additional support.
                        </p>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Accordian;