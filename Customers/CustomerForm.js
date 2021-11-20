import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useState } from "react";
import { ref, push } from "@firebase/database";
import { withRouter } from "react-router-dom";
import { database } from "../../config/firebaseConfig";

const CustomerForm = (props) => {
    const [customer, setCustomer] = useState({
        name: '',
        ingredientes: '',
        precio: '',
        unidades: ''
    });

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        push(ref(database, "/customers"), customer)
            .then(() => {
                //redireccionar a /clientes
                props.history.push("/clientes");
            })
            .catch((error)=>{
                console.log(error);
            });
    };

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
                            name="name"
                            required
                            fullWidth
                            label="Tipo de hamburguesa"
                            value={customer.name}
                            onChange={handleChange}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="ingredientes"
                            required
                            fullWidth
                            label="¿Que ingredientes desea?"
                            value={customer.ingredientes}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="unidades"
                            required
                            fullWidth
                            label="¿cuantas desea?"
                            value={customer.unidades}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 5, textAlign: 'center' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            startIcon={<SaveOutlinedIcon />}>
                            Ordenar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default withRouter(CustomerForm);