import CustomCard from 'Components/CustomCard';
import { firestore } from 'Config/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ShowEvents = () => {
    const [documents, setDocuments] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const array = []
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(firestore, "events"));
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                array.push(data)
            });
            setDocuments(array)
        }
        fetchData()
        setLoading(false)
    }, [])

    const navigate = useNavigate()
    const handleClick = (doc) => {
        navigate('/eventDetails', { state: { data: doc } })
    }
    return (
        <div className="container mt-4">
            <h1 className='text-center my-4 text-decoration-underline fw-bold'>Events</h1>
            {
                !loading ? <div className="row justify-content-center gap-2">
                    {
                        documents.map((doc, i) => {
                            return (<div className="col-3" onClick={() => handleClick(doc)} key={i}>
                                <CustomCard title={doc.title} description={doc.description} url={doc.photo?.url} />
                            </div>
                            )
                        })
                    }
                </div>
                    :
                    <div className="container">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ShowEvents
