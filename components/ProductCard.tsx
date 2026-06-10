type ProductCardProps = {
    nombre: string;
    categoria: string;
    imagen: string;
  };
  
  export default function ProductCard({
    nombre,
    categoria,
    imagen,
  }: ProductCardProps) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        
        {/* IMAGEN */}
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-72 object-cover"
        />
  
        {/* INFO */}
        <div className="p-5">
  
          <span className="text-sm text-yellow-500 font-semibold uppercase">
            {categoria}
          </span>
  
          <h3 className="text-xl font-bold mt-2 mb-4">
            {nombre}
          </h3>
  
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
            Cotizar
          </button>
  
        </div>
      </div>
    );
  }