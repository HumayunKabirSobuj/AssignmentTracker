import { useNavigate } from "react-router-dom";


const Search = () => {
    const navigate = useNavigate();
    const handleSubmit=(e)=>{

        e.preventDefault();
        const value=e.target.input.value;
        // console.log(value)
        navigate('/searchPage', { state: { searchQuery: value } });
    }
    return (
        <div>
            <div className=" flex justify-center my-10">
                <form className=" flex w-2/3 input input-bordered px-0" onSubmit={handleSubmit}>
                    <input type="text" name="input" className="input input-bordered w-full " />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Search;