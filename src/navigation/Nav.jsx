import Aside, { Dropdown } from "./Aside";

const Nav = () => {
    return (
        <nav>
            <div>
                <a href="#">motto</a>
            </div>
            <Aside>
                <a href="#">item a</a>
                <Dropdown name="item b">
                    <a href="#">item 1</a>
                    <a href="#">item 2</a>
                    <a href="#">item 3</a>
                    <a href="#">item 4</a>
                    <a href="#">item 5</a>
                </Dropdown>
                <Dropdown name="item c">
                    <a href="#">item 1</a>
                    <a href="#">item 2</a>
                    <a href="#">item 3</a>
                    <a href="#">item 4</a>
                </Dropdown>
                <Dropdown name="item d">
                    <a href="#">item 1</a>
                    <a href="#">item 2</a>
                    <a href="#">item 3</a>
                </Dropdown>
                <Dropdown name="item e">
                    <a href="#">item 1</a>
                    <a href="#">item 2</a>
                </Dropdown>
                <a href="#">item f</a>
            </Aside>
            <div>
                <button type="button">search</button>
                <button type="button">menu</button>
            </div>
        </nav>
    )
}

export default Nav;