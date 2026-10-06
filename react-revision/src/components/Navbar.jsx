import UserMenu from "./UserMenu";

function Navbar({ data }) {
    return (
        <nav>
            <h2>Navbar</h2>
            <UserMenu userData={data} />
        </nav>
    );
}

export default Navbar;