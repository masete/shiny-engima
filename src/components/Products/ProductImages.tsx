import Image from "next/image";
import { CartProductType, SelectedImgType } from "@/lib/types" 
// from "./ProductDetails"


interface Imageprops{
    cartProduct: CartProductType;
    product: any;
    handleColourSelect: (value: SelectedImgType) => void
}

const ProductImages = ({cartProduct, product, handleColourSelect}: Imageprops) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] ">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full
       max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.image.map((image: SelectedImgType)=>{
          return <div key={image.color} onClick={()=>handleColourSelect(image)} className={`relative w-80%
           aspect-square rounded w-full h-full border-teal-300 ${cartProduct.selectedImg.color === image.color ? 'border-[1.5px]':'border-none'}`}>
            <Image src={image.image} alt={image.color}
            //  width={24} 
            //  height={} 
             fill
             className="object-contain" />
          </div>
        })}
      </div>
      <div className="col-span-5 relative aspect-square ">
        <Image src={cartProduct.selectedImg.image} alt={cartProduct.title} fill  className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]" />
      </div>
    </div>
  )
}

export default ProductImages
