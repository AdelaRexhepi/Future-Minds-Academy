import Nav from "./Nav";

export default function HomeHeader() {
    return (
        <>
            <header className="relative p-2">
                <Nav />
                <div className="circle absolute rounded-b-full remove-tablet"></div>
            </header>
        </>
    );
}
