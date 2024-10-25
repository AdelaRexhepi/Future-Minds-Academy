export default function Detail(){
    return(
        <>
        <div className="grid conatiner-fluid">
                <div className="text-center m-5">
                    <h1 className="text-5xl darkBrown">Your benefits</h1>
                    <hr className="darkBrown"/>
                </div>
                <div className="detailsCards grid gap-2 m-3 ">
                    <div className="detailsCard w-full relative just-center align-center flex left-shadow right-shadow">
                        <h1>Best quality</h1>
                        <div className="detailsCard__content absolute w-full h-full">
                            <p className="detailsCard__title ">Best quality</p>
                            <p className="detailsCard__description ">Made exclusively using the premium quality of
                                materials
                                available in
                                the
                                city.Made exclusively using the premium quality of materials available in
                                the
                                city.
                            </p>
                        </div>
                    </div>
                    <div className="detailsCard w-full relative just-center align-center flex left-shadow right-shadow">
                        <h1>Many Promos</h1>
                        <div className="detailsCard__content absolute w-full h-full">
                            <p className="detailsCard__title">Many Promos</p>
                            <p className="detailsCard__description">There are many promos that make your wallet more
                                economical in your
                                pocket.There are many promos that make your wallet more economical in your
                                pocket.
                            </p>
                        </div>
                    </div>
                    <div className="detailsCard w-full relative just-center align-center flex left-shadow right-shadow">
                        <h1>Fast Shipping</h1>
                        <div className="detailsCard__content absolute w-full h-full">
                            <p className="detailsCard__title">Fast Shipping</p>
                            <p className="detailsCard__description ">No need to worry about shipping. Our
                                furnitures
                                delivered as soon as
                                possible.No need to worry about shipping. Our furnitures delivered as soon as
                                possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}