const SearchBar = (props : SearchBarProps) => {
    const searchOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }
    return <div>
        <input className="form-control" 
            type="text"
            value={ props.value }
            onChange={ searchOnChange } />
    </div>
}

interface SearchBarProps { 
    value: string; 
    onChange: (value: string) => void 
}

export default SearchBar