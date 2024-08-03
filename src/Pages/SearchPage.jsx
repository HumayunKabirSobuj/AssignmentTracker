import { useLocation } from "react-router-dom";
import Search from "../Components/Search";
import { useEffect, useState } from "react";
import Cards from "../Components/Cards";

const SearchPage = () => {
    const location = useLocation();
    const { searchQuery } = location.state || '';
    const [allAssignments, setAllAssignments] = useState([]);
    useEffect(() => {
        fetch('assignments.json')
            .then(response => response.json())
            .then(data => setAllAssignments(data))
    }, [])

    console.log(allAssignments)
    const find = searchQuery.toLowerCase();
    // console.log(find)

    const matchedItems = allAssignments.filter(item =>
        item.name.toLowerCase().includes(find) ||
        item.description.toLowerCase().includes(find)
    );

    // console.log(matchedItems)

    return (
        <div>

            <Search></Search>
            <Cards data={matchedItems}></Cards>
        </div>
    );
};

export default SearchPage;