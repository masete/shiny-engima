// import { CartProductType, SelectedImgType } from "./ProductDetails"
import { CartProductType, SelectedImgType } from "@/lib/types" 

interface SetColorProps {
    images: SelectedImgType[],
    CartProduct: CartProductType,
    handleColorSelect: (value: SelectedImgType) => void
}

const SetColor = ({images,CartProduct, handleColorSelect }: SetColorProps) => {
  return (
    <div className="flex gap-4 items-center">
        <span className="font-semibold">COLOR:</span>
        <div className="flex gap-1">
            {images.map((image)=>{
            return <div 
            key={image.color}
            onClick={()=> handleColorSelect(image)}
            className={`
                h-7
                w-7
                rounded-full
                border-orange-300
                flex
                items-center
                justify-center
                ${
                    CartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'
                }
            `}
            >
                <div style={{background: image.colorCode}} 
                className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"></div>
            </div>
        })}</div>
    </div>
  )
}

export default SetColor
