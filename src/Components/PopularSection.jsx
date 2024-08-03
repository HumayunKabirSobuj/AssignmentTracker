import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import './AnimatedText.css';
import Cards from "./Cards";
const PopularSection = () => {
    const [allAssignments, setAllAssignments] = useState([]);
    useEffect(() => {
        fetch('assignments.json')
            .then(response => response.json())
            .then(data => setAllAssignments(data))
    }, [])

    const sliceAssignment =allAssignments.slice(0,6)

    console.log(sliceAssignment)
    return (
        <div>
            <div className="flex justify-center items-center my-10">
                <motion.h1
                    className="lg:text-4xl text-2xl font-extrabold text-center text-blue-500 animated-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9, rotate: -10 }}
                >
                    Popular Assignments
                </motion.h1>

                </div>

                <Cards data={sliceAssignment}></Cards>
        </div>
    );
};

export default PopularSection;