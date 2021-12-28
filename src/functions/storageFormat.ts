const formatStorage = (value: number) => {
    return (value >= 1024) ? `${value/1024}TB`: `${value}GB`;
}

export default formatStorage; 
