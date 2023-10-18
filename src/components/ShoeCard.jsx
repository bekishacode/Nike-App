

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {

    const handleClick = () =>{
        if(bigShoeImage !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className= {`border-2 rounded-xl ${bigShoeImage === imgURL ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} 
    onClick={handleClick}
    >
        <div>
            <img
              src={imgURL.thumbnail}
              alt="shoe collection"
              width={127}
              height={103}
              className="flex justify-center items-center bg-card bg-center bg-cover sm:w-30 sm:h-20 rounded-xl max-sm:p-4 "
            />
        </div>

    </div>
  )
}

export default ShoeCard;