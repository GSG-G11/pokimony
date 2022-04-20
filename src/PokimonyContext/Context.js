import React,{ useState } from 'react'
const Context = React.createContext();

function Pokemoncontext({children}) {
    const [searchText, setSearchText] = useState('');

    return (
        <div>
            <Context.Provider value={{ searchText, setSearchText }}>
                {children}
            </Context.Provider>
        </div>
    );
}

export { Pokemoncontext, Context} ;

