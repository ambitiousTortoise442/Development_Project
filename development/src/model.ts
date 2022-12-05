interface item  {
    name: string;
    price: number;
    genre: string;
    handleClick:React.MouseEventHandler<HTMLButtonElement>;
    count: number
    // Add alt
}

export interface items {
    items: item[]
}


export default item
