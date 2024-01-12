import React from 'react';
import { useEffect, useState } from 'react';

const Posts: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3100/api/posts');
                const result = await response.json();

                console.log(result);

                setData(result);
                setLoading(false);

            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <div>
                    <ul style={{ listStyleType: "none" }}>
                        {
                            data.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        Tytuł: {item.title}
                                    </div>
                                    <div>
                                        {item.text}
                                    </div>
                                    {item.image && (
                                        <div>
                                            <img src={item.image} alt={`Image ${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                        </div>
                                    )}
                                    <hr />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Posts;