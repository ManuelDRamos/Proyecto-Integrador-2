class CarritoCompra {

    constructor(){
        this.listaDeCompras = []
    }

    agregarProducto(producto){
        this.listaDeCompras.push(producto)
    }

    calcularTotal(){
        return this.listaDeCompras.reduce((acum,ele) => acum += ele.precio * ele.cantidad, 0)

    }

    aplicarDescuento(descuento){
        const precioTotal = this.calcularTotal()
        return precioTotal - (precioTotal * descuento / 100) 
        
    }

};



module.exports = {
    CarritoCompra
}