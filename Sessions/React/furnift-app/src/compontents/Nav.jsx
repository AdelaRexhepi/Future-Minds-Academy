export default function Nav() {
    return (
        <>
            <nav className="row just-between text-center relative">
                <ul className="row just-between">
                    <li><img src="./icons/logoF.png" alt="logo" /></li>
                    <li className="text-center p-0"><b>Furnicor</b></li>
                </ul>
                <ul className="row just-between gap-3 remove-tablet">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Cart</a></li>
                </ul>
                <ul className="row just-between">
                    <li><a href=""><img className="img-xs m-0" src="./icons/menu.png" alt="menu" /></a></li>
                </ul>
            </nav>
        </>
    );
}
