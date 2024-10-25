export default function BestFurniture() {
    return (
        <>
            <div className="grid-cols-2 grid-cl-1  gap-4 mx-20 mx-5  text-center grid  ">
                <figure className="relative">
                    <div className="absolute border1 w-66 h-full rounded-b-full custom-border"></div><img
                        className="bottom-shadow rounded-b-full  w-66" src="./img/living-room.jpg" alt="img" />
                </figure>
                <div className="relative">
                    <figure><img src="./icons/circle.png" alt="circle" className=" absolute smallCircle " /><img
                        src="./icons/circle.png" alt="circle" className="absolute mediumCircle w-20" />
                    </figure>
                    <h1 className="text-5xl darkBrown">The best furniture manifacturer</h1>
                    <p className="text-xl my-7">Wide range option of furnitures crafted using the best selected wood in the
                        city
                        so that it makes
                        your home look more elegant and modern</p>
                    <button className="relative buttonTransition bg-white customColor custom-border pY1remX1075rem">Learn
                        more <img className="arrow absolute" src="./icons/arrowWithLIne.png" alt="arrow" /></button>

                </div>
            </div>
        </>
    );
}