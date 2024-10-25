export default function Welcome() {
    return (
        <>
            <div className="row just-between grid-cols-2 grid-cl-1 gap-4 m-20 text-center grid gap-4 tablet">
                <div className="align-tablet-center align-center">
                    <h1 className="gap-3 text-5xl darkBrown">
                        <div className="remove-tablet">
                            <span>We create home</span>
                            <span>more aesthetic.</span>
                        </div>
                        <span className="dNone block-tablet">We create home more aesthetic.</span>
                    </h1>
                    <p className="text-xl my-7 remove-tablet">
                        Enjoy fresh furniture with every move and experience the dream9
                        castle-like ambiance of your home.
                    </p>
                    <button className="pY1remX2rem customBackgroundcolor white custom-border mainButtonTransition">
                        Get Started
                    </button>
                </div>
                <figure className="relative">
                    <img className="z-1 rounded-t-full m-5 right-shadow img-xxl" src="./img/entry.jpg" alt="furniture" />
                </figure>
            </div>
        </>
    );
}
