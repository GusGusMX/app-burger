import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useEffect, useState } from "react";
import { ref, push, update } from "@firebase/database";
import { ref as stRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { withRouter, useLocation } from "react-router-dom";

import { database, storage } from "../../config/firebaseConfig";
import { Input } from "@mui/material";

const ProductForm = (props) => {
    const location = useLocation();

    const [product, setProduct] = useState({
        sku: '',
        descripcion: '',
        price: '',
        ingre:'',
        stock: '',
        Image: '',
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleImage = (e) => {
        if (!e.target.files[0]) return;

        const file = e.target.files[0];
        setImage({
            type: file.type.split("/")[1],
            file
        });
    }

    const saveProduct = (item) => {
        if (item.id) {//update

            const data = { ...item };
            delete data.id;
            update(ref(database, `/products/${item.id}`), data)
                .then(() => {
                    props.history.push("/productos");
                })
                .catch((error) => {
                    console.log(error);
                });

        } else {//create

            push(ref(database, "/products"), item)
                .then(() => {
                    props.history.push("/productos");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (image) {
            const imageName = `img_${Date.now()}.${image.type}`;
            const imageRef = stRef(storage, `/products/${imageName}`);
            uploadBytes(
                stRef(storage, imageRef),
                image.file
            )
                .then(() => {
                    //guardar en la BD

                    //primero obtener la url 
                    getDownloadURL(imageRef)
                        .then((url) => {
                            setProduct({
                                ...product,
                                image: url,
                            });

                            saveProduct({ ...product, image: url })
                        },
                            (error) => {
                                console.log(error);
                            });
                })
        } else {
            saveProduct(product);
        }
    };

    useEffect(() => {
        if (location?.state?.product) {
            setProduct({ ...location.state.product });
        }
    }, [location]);

    return (
        <Paper
            sx={{
                p: 3,
            }}
        >
            <Grid container spacing={2} component="form" onSubmit={handleSubmit}
                sx={{ mt: 3, justifyContent: 'center' }}
            >
            <Grid item container xs={12} md={6} spacing={2}>
            <Grid item xs={12}>
            <TextField
            name="sku"
            required
            fullWidth
            label="SKU"
            value={product.sku}
            onChange={handleChange}
            autoFocus
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            name="descripcion"
            required
            fullWidth
            label="Descripcion"
            value={product.descripcion}
            onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            name="stock"
            required
            fullWidth
            label="Existencias"
            value={product.stock}
            onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            name="price"
            required
            fullWidth
            label="Precio"
            value={product.price}
            onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            name="ingre"
            required
            fullWidth
            label="Ingredientes"
            value={product.ingre}
            onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
            <Input
            type ="file"
            accept="image/*"
            name="productimage"
            id="productimage"
            onChange={handleImage}
            style={{ width: '1px' }}
            />
            <label htmlFor="productimage">
            <Button variant="contained" component="span" style={{ marginLeft: -1 }}>
            imagen de producto
            </Button>
        {image && (<span style={{ marginLeft: 12 }}>
        {image.file.name}
            </span>)}
            </label>
            </Grid>
        {product.image&&(
            <Grid item xs={12} sx={{ m: 5, textAlign: 'center' }}>
                <img src={product.image}
                style={{height:'120px', width:'auto', fitObject:'center'}}
                />
                </Grid>
        )}
            <Grid item xs={12} sx={{ m: 5, textAlign: 'center' }}>
            <Button
            type ="submit"
            variant="contained"
            startIcon={<SaveOutlinedIcon />}>
            Actualizar
            </Button>
            </Grid>
            </Grid>
            </Grid>
        </Paper>
    );
};

export default withRouter(ProductForm);