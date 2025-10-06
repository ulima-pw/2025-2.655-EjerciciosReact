const Header = (props : HeaderProps) => {
    return <h1>
        Lista Productos
        <span className="badge text-bg-secondary">
            {
                props.totalFavoritos
            }
        </span>
    </h1>
}

interface HeaderProps { 
    totalFavoritos: number 
}

export default Header