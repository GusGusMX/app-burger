import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';



export default function ProductCard({ product, onDelete}) {
    return (
        <Card sx={{ maxWidth: 250, m: 2, display: 'block' }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.descripcion}
                sx={{
                    p: '2px',
                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto'
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.descripcion}
                </Typography>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="h6" component="div">
                            precio: $ {product.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="h6" component="div">
                            ingredientes: {product.ingre}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {product.stock > 0 && (
                            <Chip label="Disponible" color="success" />
                        )}
                        {product.stock <= 0 && (
                            <Chip label="Agotado" color="warning" />
                        )}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }} >
                {/* <IconButton onClick={() => {onDelete(product.id) }} color="error" component="span">
                    <DeleteForeverOutlinedIcon />
                </IconButton> */}

                <IconButton oonClick={() => { }} color="success" LinkComponent={Link}
                    to={{pathname: `/`, state: {product}}} >
                    <AddShoppingCartOutlinedIcon />
                </IconButton>
                
                {/* <IconButton onClick={() => { }} color="primary" LinkComponent={Link}
                    to={{pathname: `/productos/editar`, state: {product}}} >
                    <EditOutlinedIcon />
                </IconButton> */}
            </CardActions>
        </Card>
    );
}
