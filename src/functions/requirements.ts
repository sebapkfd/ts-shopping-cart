const requeriments = (element: any, filter: any) => {
    return (
        element.price >= filter.minPrice && 
        element.price <= filter.maxPrice && 
        element.ram >= filter.ram &&
        element.storage >= filter.storage &&
        ((filter.pickUp) ? element.pickUp === true : true) &&
        ((filter.shipping) ? element.shipping === true : true) &&
        filter.brands[element.brand]
    );
}

export default requeriments;