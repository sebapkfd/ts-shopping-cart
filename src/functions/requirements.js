const requeriments = (element, filter) => {
    return (
        element.price >= filter.minPrice && 
        element.price <= filter.maxPrice && 
        element.ram >= filter.minRam &&
        element.storage >= filter.minStorage &&
        filter.brands[element.brand]
    );
}

export default requeriments;