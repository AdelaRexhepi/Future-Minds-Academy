export default function UniqueFurniture(){
    return(
        <>
                    <div className="grid-cols-2 grid-cl-1  gap-4 mx-20 mx-5 text-center grid  ">
                <div>
                    <h1 className="text-5xl darkBrown">Many unique furniture</h1>

                    <p className="text-xl my-7">Wide range option of furnitures crafted using the best selected wood in the
                        city
                        so that it makes
                        your home look more elegant and modern</p>
                    <button className="relative buttonTransition  bg-white customColor custom-border  pY1remX1075rem">Learn
                        more <img class="arrow absolute" src="./icons/arrowWithLIne.png" alt="arrow"/></button>
                </div>
                <figure className="relative">
                    <div className="border2 custom-border rounded-ss-full absolute w-76 h-full"></div><img
                        className=" w-76 rounded-ss-full bottom-shadow" src="./img/offices.jpg" alt="img"/>
                </figure>
            </div>
        </>
    )
}