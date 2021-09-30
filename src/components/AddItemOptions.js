import AddButton from "./AddButton";

const AddItemOptions = ({ item }) => {

    return (item.stock > 0) ? (
        <div className='add-items-options'>
            <input type="number" name="amount" defaultValue={1} min="1" max={item.stock}/>
            <AddButton id={item.id} />
        </div>
    ): null;

}

export default AddItemOptions;