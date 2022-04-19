import React from 'react'
const Context = React.createContext();


function Context({Children}) {
    return (
        <div>
            <Context.Provider>
                {Children}
            </Context.Provider>
        </div>
    );
}

export default Context;

