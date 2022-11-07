const productos = [
    {
        id: "1",
        nombre: "Dance World",
        precio: "3000",
        img: "/assets/DanceWorld.jpg",
        categoria: "CBD1:1",
        descripcion: "Aceite CBD Dance World, el rico perfil de terpenos de Dance World infunde cada golpe con deliciosas notas de fruta, pino y especias.",
        stock : "8"
    },

    {
        id: "2",
        nombre: "Sour Compassion",
        precio: "3000",
        img: "/assets/SourCompassion.jpeg",
        categoria: "CBD1:1",
        descripcion: "Aceite CBD Sour Compassion, aroma a cebolla se hace mentolado al paladar, el Linalool me viene al cerebro cuando posa la lengua, con una pizca cítrica.",
        stock : "10"
    },

    {
        id: "3",
        nombre: "Swiss Dream",
        precio: "2500",
        img: "/assets/SwissDram.jpg",
        categoria: "CBD",
        descripcion: "Aceite CBD Swiss Dream, su aroma a diesel y jengibre. Tiene además un fondo de cítrico interesante. Es picante, pero de forma tenue.",
        stock : "5"
    },

    {
        id: "4",
        nombre: "Kama Kush",
        precio: "2500",
        img: "/assets/KamaKush.jpg",
        categoria: "CBD",
        descripcion: "Aceite CBD Kama Kush, sabor muy agradable en boca, con toques afrutados y tropicales.",
        stock : "12"
    }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductoById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductosByCategoria = (categoriaProductos) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoriaProductos))
        }, 500)
    })
}
