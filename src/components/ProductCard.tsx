import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div 
      className="h-full hover:shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="h-[300px] bg-transparent overflow-hidden mb-3"> {/* Changed bg-white to bg-transparent */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-normal" // Added mix-blend-normal to ensure transparency
        />
      </div>
      <div className="p-2 md:p-4">
      <div className="text-base font-['WomanFontBold'] text-[#591C1C]">
  {product.name}
</div>

        <div className="text-sm text-gray-600 uppercase">
          {product.material}<br />
          {product.color}
        </div>
        <div className="mt-2 font-bold text-black">
          $ {product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
