
const List = ({ setCount }) => {
    return (
      <div>
        <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
      </div>
    );
  };
  
  export default List;