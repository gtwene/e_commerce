import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'shoes', description: 'Running Shoes.', price: '$5', image: 'https://media.istockphoto.com/photos/creative-minimal-paper-idea-concept-white-shoe-with-white-background-picture-id1149654373?k=20&m=1149654373&s=612x612&w=0&h=YfIwQ1QylFJ2sxMmjKAWLONWniGq9PiMGBkVeBeB9oQ=' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' },
];

const Products = () => {
    return(
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )   
}

export default Products;