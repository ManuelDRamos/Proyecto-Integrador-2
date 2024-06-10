const { CarritoCompra } = require("./index.js")  

describe("class CarritoCompra", () => {


    it("el carrito de compra debe existir", () => {
        expect(typeof CarritoCompra).toBe("function")
        expect(CarritoCompra).toBeInstanceOf(Function)
    })

    it("puedo crear una nueva instancia de CarritoCompra", () => {
        const nuevoCarrito = new CarritoCompra()
        expect(nuevoCarrito).toBeInstanceOf(CarritoCompra)
    })

    it("la clase CarritoCompra debe tener los siguientes metodos:", () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined()
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined()
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined()
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined()
    })
})

describe("constructor:", () => {

    it("debe inicializar el carrito con un array vacio", () => {
        const nuevoCarrito = new CarritoCompra()
        expect(nuevoCarrito.listaDeCompras).toEqual([])
    })
})

describe("agregarProducto", () => {

    it("recibe un objeto el producto y lo agrega al carrito", () => {
        const nuevoProducto = {
            nombre: "TV",
            precio: 500,
            cantidad: 4
        }
        const nuevoCarrito = new CarritoCompra()
        nuevoCarrito.agregarProducto(nuevoProducto)
        expect(nuevoCarrito.listaDeCompras).toEqual([nuevoProducto])
        expect(nuevoCarrito.listaDeCompras.length).toBe(1)
        expect(nuevoCarrito.listaDeCompras).toContain(nuevoProducto)
    })

    it("recibe muchos objetos productos y los agrega al carrito", () => {
        const arrayProductos = [
            {
                nombre: "TV",
                precio: 500,
                cantidad: 4
            },
            {
                nombre: "TV2",
                precio: 300,
                cantidad: 5
            },
            {
                nombre: "TV3",
                precio: 700,
                cantidad: 8
            },
            {
                nombre: "TV4",
                precio: 200,
                cantidad: 3
            }
        ]
        const nuevoCarrito = new CarritoCompra()
        arrayProductos.forEach((producto) => nuevoCarrito.agregarProducto(producto))

        expect(nuevoCarrito.listaDeCompras).toEqual(arrayProductos)
        expect(nuevoCarrito.listaDeCompras.length).toBe(4)
        expect(nuevoCarrito.listaDeCompras).toContainEqual({
            nombre: "TV3",
            precio: 700,
            cantidad: 8
        })
        expect(nuevoCarrito.listaDeCompras).toContainEqual({
            nombre: "TV4",
            precio: 200,
            cantidad: 3
            })
        })
    })

describe("calcularTotal", () => {
        it("debe calcular el total de compra sumando los precios de los productos en el carrito", () => {
            const arrayProductos = [
                {
                    nombre: "TV",
                    precio: 500,
                    cantidad: 4
                },
                {
                    nombre: "TV2",
                    precio: 300,
                    cantidad: 5
                },
                {
                    nombre: "TV3",
                    precio: 700,
                    cantidad: 8
                },
                {
                    nombre: "TV4",
                    precio: 200,
                    cantidad: 3
                }
            ]
            const nuevoCarrito = new CarritoCompra()
            arrayProductos.forEach((producto) => nuevoCarrito.agregarProducto(producto))

            expect(nuevoCarrito.calcularTotal()).toBe(9700)

        })
    })

describe("aplicarDescuento", () => {
    it("aplica un descuento segun el % especificado", () => {

        const arrayProductos = [
            {
                nombre: "TV",
                precio: 500,
                cantidad: 4
            },
            {
                nombre: "TV2",
                precio: 300,
                cantidad: 5
            },
            {
                nombre: "TV3",
                precio: 700,
                cantidad: 8
            },
            {
                nombre: "TV4",
                precio: 200,
                cantidad: 3
            }
        ]
        const nuevoCarrito = new CarritoCompra()
        arrayProductos.forEach((producto) => nuevoCarrito.agregarProducto(producto))
        

        expect(nuevoCarrito.aplicarDescuento(0)).toBe(9700)
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(8730)
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(4850)
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
    })
})