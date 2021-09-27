const requeriments = (element, filter) => {
    return (
        element.price >= filter.minPrice && 
        element.price <= filter.maxPrice && 
        element.ram >= filter.ram &&
        element.storage >= filter.storage &&
        element.pickUp === filter.pickUp &&
        element.shipping === filter.shipping &&
        filter.brands[element.brand]
    );
}

export default requeriments;