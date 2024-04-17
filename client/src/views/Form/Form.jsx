// Form.js

import React, { useState } from "react";
import NavBar from "../../components/NaBar/NavBar";
import axios from "axios";
import styles from "./Form.module.css"; // Importa los estilos CSS

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        height_min: "",
        weight_min: "",
        height_max: "",
        weight_max: "",
        life_span: "",
        image: "",
        createdInDB: true
    });

    const [errors, setErrors] = useState({
        name: "",
        height_min: "",
        weight_min: "",
        height_max: "",
        weight_max: "",
        life_span: "",
        image: "",
        createdInDB: true
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]: value });
        validate({ ...form, [property]: value });
    };

    const handleImageChange = (event) => {
        const fileOrUrl = event.target.value;
        if (fileOrUrl.startsWith("http")) {
            // Si la entrada es una URL, la asignamos directamente
            setForm({ ...form, imagen: fileOrUrl });
        } else {
            // Si no es una URL, es un archivo, por lo que procesamos la carga del archivo
            const imageFile = event.target.files[0];
            const imageUrl = URL.createObjectURL(imageFile);
            setForm({ ...form, imagen: imageUrl });
        }
    };

    const validate = (form) => {
        if (form.name.trim() === "") {
            setErrors({ ...errors, name: "El nombre es requerido" });
        } else {
            setErrors({ ...errors, name: "" });
        }
        // Puedes agregar más validaciones para otros campos aquí
    };

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/dogs", form)
            .then(res => alert("Formulario enviado correctamente"))
            .catch(err => alert("Error al enviar el formulario"));
    };

    return (
        
        <div className={styles.formContainer}>
            <NavBar   className={styles.navBar}/>
            <form onSubmit={submitHandler}>
                <div className={styles.formField}>
                    <label>Name: </label>
                    <input className={styles.inputField} type="text" value={form.name} onChange={changeHandler} name="name" />
                    {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Imagen: </label>
                    <input className={styles.inputField} type="text" value={form.image} onChange={changeHandler} name="image" />
                    {/* <input className={styles.inputField} type="file" accept="image/*" onChange={handleImageChange} />
                    {form.image && <img src={form.image} alt="Preview" className={styles.imagePreview} />} */}
                </div>
                <div className={styles.formField}>
                    <label>Altura min: </label>
                    <input className={styles.inputField} type="text" value={form.height_min} onChange={changeHandler} name="height_min" />
                </div>
                <div className={styles.formField}>
                    <label>Altura max: </label>
                    <input className={styles.inputField} type="text" value={form.height_max} onChange={changeHandler} name="height_max" />
                </div>
                <div className={styles.formField}>
                    <label>Peso min: </label>
                    <input className={styles.inputField} type="text" value={form.weight_min} onChange={changeHandler} name="weight_min" />
                </div>
                <div className={styles.formField}>
                    <label>Peso max: </label>
                    <input className={styles.inputField} type="text" value={form.weight_max} onChange={changeHandler} name="weight_max" />
                </div>
                <div className={styles.formField}>
                    <label>Años de Vida: </label>
                    <input className={styles.inputField} type="text" value={form.life_span} onChange={changeHandler} name="life_span" />
                </div>
                <button className={styles.submitButton} type="submit">SUBMIT </button>
            </form>
        </div>
    );
};

export default Form;
