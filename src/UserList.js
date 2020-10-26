import React from 'react';


 function UserList (props) {
    const {data, page} = props
    const {id, name, city, country, employer, title, favoriteMovies} = data[page]
    return(
        <div>
            <header>Home </header>
            <h1>
            <h2>{id}/25</h2>    
            <p>
            <span>{name.first} {name.last}</span> 
            <p>From: {city}</p>
            <p>Job Title: {title}</p>
            <p>Employer: {employer}</p>
            <p>Favorite Movies:</p>
            <ul className="columnList">
                <ls>1. {favoriteMovies[0]}</ls>
                <ls>2. {favoriteMovies[1]}</ls>
                <ls>3. {favoriteMovies[2]}</ls>
            </ul>
            </p>
            </h1>
        </div>
        
        )
    




}

export default UserList;