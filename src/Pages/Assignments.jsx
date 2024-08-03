import { useEffect,  useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cards from "../Components/Cards";
import Search from "../Components/Search";
// import { useNavigate } from "react-router-dom";
const Assignments = () => {
    // const navigate = useNavigate();
    const [allAssignments, setAllAssignments] = useState([]);
    useEffect(() => {
        fetch('assignments.json')
            .then(response => response.json())
            .then(data => setAllAssignments(data))
    }, [])

    
   

    

    const Homework = allAssignments.filter(Assignment => Assignment.category === "Homework");
    const Quizzes = allAssignments.filter(Assignment => Assignment.category === "Quizzes");

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     const value=e.target.input.value;
    //     // console.log(value)
    //     navigate('/searchPage', { state: { searchQuery: value } });
    // }


    
    return (
        <div>
            {/* <div className=" flex justify-center my-10">
                <form className=" flex w-2/3 input input-bordered px-0" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search By Name" name="input" className="input input-bordered w-full " />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div> */}

            <Search></Search>
            <div className="my-8 text-center">

                <Tabs>
                    <TabList>
                        <Tab>Homework</Tab>
                        <Tab>Quizzes</Tab>
                    </TabList>

                    <TabPanel>
                        <Cards data={Homework}></Cards>
                    </TabPanel>
                    <TabPanel>
                        <Cards data={Quizzes}></Cards>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Assignments;