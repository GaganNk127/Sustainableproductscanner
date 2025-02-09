import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null); // Start with null since API returns an object

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json()) // Call .json() to parse the response
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {data ? ( 
                <p>Followers: {data.followers}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Github;
