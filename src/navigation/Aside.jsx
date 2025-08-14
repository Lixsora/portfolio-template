const Aside = ({ children }) => {
    // A wrapper that provides the CSS style rules only.
    return (
        <aside>
            { children }
        </aside>
    )
}

export const Dropdown = ({ name="menu", children }) => {
    return (
        <div>
            <button type="button">{ name }</button>
            <nav>
                { children }
            </nav>
        </div>
    )
}

export default Aside;