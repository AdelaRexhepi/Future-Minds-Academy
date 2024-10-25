export default function NewsLetter(){
    return(
        <>
        <div className="newsletter-form col right-shadow ">
                <p className="heading text-center brown p-2"> Subscribe to Our Newsletter</p>
                <form className="form">
                    <input required="" placeholder="Enter your email address" name="email" id="email" type="email" className="w-full p-0 col"/>
                    <input value="Subscribe" type="submit" className="w-full p-0"/>
                </form>
            </div>
        </>
    )
}