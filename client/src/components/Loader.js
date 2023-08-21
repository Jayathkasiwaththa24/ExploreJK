import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";

function Loader() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [])
    

    return (
        <div style={{marginTop:'150px'}}>
            <div  style={{ display: 'flex', justifyContent: 'center' }}>

                <HashLoader
                    color='#000'
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />

            </div>
            
        </div>
    )
}

export default Loader