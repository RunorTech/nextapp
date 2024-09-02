
import React, { useEffect, useState } from "react";

const Input_search = () => {

    const [query, setQuery] = useState("");

    console.log(query);
    return (
        <div className="input-box">

            <input

                type="search"

                name="search-form"

                id="search-form"

                className="search-input"

                onChange={(e) => setQuery(e.target.value)}

                placeholder="Search blog"

            />

        </div>
    )
}

export default Input_search
