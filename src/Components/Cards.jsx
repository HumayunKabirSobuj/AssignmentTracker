
import PropTypes from 'prop-types';
const Cards = ({ data }) => {
    // console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                data.map((item, idx) => <div key={idx} className="card bg-base-100  shadow-xl text-left">
                    <figure>
                        <img
                            className='w-full h-[200px]'
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <p><span className='font-bold'>delivery_time</span> : {item.delivery_time}</p>
                        <p><span className='font-bold'>price</span> : {item.price} $</p>
                        
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cards;

Cards.propTypes = {
    data: PropTypes.any.isRequired,
}