// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9ZlCXBGO968430UD0wqCp-T6a084Xthg",
    authDomain: "e-commerce-jap-verduleria.firebaseapp.com",
    projectId: "e-commerce-jap-verduleria",
    storageBucket: "e-commerce-jap-verduleria.appspot.com",
    messagingSenderId: "241152151623",
    appId: "1:241152151623:web:dd180ce81c432b65cea162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()//reference to my bdd

/* 
CRUD 
create 
read 
update 
delate


*/

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"),
            {
                nombre: prod.nombre,
                idCategoria: prod.idCategoria,
                stock: prod.stock,
                precio: prod.precio,
                img: prod.img,
                categoria: prod.categoria
            })   //collection si existe mi prod, lo consulta, si no lo crea y lo consulta     
    });
}

//getDoc y get Docs
export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

//
export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id))
}

//CREATE AND READ ORDEN DE COMPRA

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const oC = await getDoc(doc(db, "ordenesCompra", id))
    const ordenCompra = { ...oC.data(), id: oC.id }
    return ordenCompra
}