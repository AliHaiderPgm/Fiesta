import { createStyles, TextInput } from '@mantine/core';
import { Button } from '@mui/material';
import { firestore } from 'Config/Firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import {Button as Button2} from '@mantine/core'
const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
    },

    input: {
        height: 'auto',
        paddingTop: 18,
    },

    label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1,
    },
    controls: {
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column-reverse',
        },
        control: {
            [theme.fn.smallerThan('xs')]: {
                width: '100%',
                textAlign: 'center',
            },
            backgroundColor: '#fd8f5e',
            ":hover":{
                backgroundColor:'#db855f'
              }
        },
    },
}));

const initialState = {
    title: '',
    eventDate: '',
    location: '',
    description: '',
    creatorName: '',
    eventTime: ''
}

export default function AddEvent() {
    const { classes } = useStyles();
    const [state, setState] = useState(initialState)
    const [file, setFile] = useState({})
    const [loading, setLoading] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const [percent, setPercent] = useState(0)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
    }

    const handleSubmit = () => {
        const { title, eventDate, location, description, creatorName, eventTime } = state

        let formData = {
            title, eventDate, location, description, creatorName, eventTime,
            id: window.getRandomId(),
            serverTimeStamp: serverTimestamp()
        }
        setLoading(true)
        if (file.name) {
            UploadFile(formData)
        } else {
            SetDocument(formData)
        }
    }

    const UploadFile = (formData) => {
        setIsUploading(true)
        const storage = getStorage();
        const storageRef = ref(storage, `images/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                setPercent(progress)
            },
            (error) => {
                window.notify('Something went wring while uploading image.', 'error')
                setIsUploading(false)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log('File available at', downloadURL);
                    const data = {...formData, photo: {name: file.name, url: downloadURL}}
                    SetDocument(data)
                });

            }
        );
    }

    const SetDocument = async (formData) => {
        try{
            await setDoc(doc(firestore, "events", window.getRandomId()), formData);
            window.notify('Event Created!', 'success')
            setState(initialState)
        }catch(err){
            window.notify('Something went wrong', 'error')
        }
        setLoading(false)
        
    }
    return (
        <div className='container w-75 my-4'>
            <h3>Add New Event</h3>
            <div className="row">
                <div className="col-12">
                    <TextInput label="Title" placeholder="My event" className={classes} name='title' value={state.title} onChange={handleChange} />
                </div>
                <div className="col-12 mt-4">
                    <input type="date" name="eventDate" value={state.value} onChange={handleChange} className='form-control py-3' />
                </div>
                <div className="col-12 mt-4">
                    <input type="time" name="eventTime" value={state.eventTime} onChange={handleChange} className='form-control py-3' />
                </div>
                <div className="col-12 mt-4">
                    <select className="form-select py-3"
                        name='location'
                        value={state.location}
                        onChange={handleChange}>
                        <option value='' disabled>Select Location</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Karachi">Karachi</option>
                    </select>
                </div>
                <div className="col-12 mt-4">
                    <TextInput label="Description" placeholder="Event Details" className={classes} name='description' value={state.value} onChange={handleChange} />
                </div>
                <div className="col-12 mt-4">
                    <TextInput label="Creator Name" placeholder="Event is orgnaized by..." className={classes} name='creatorName' value={state.creatorName} onChange={handleChange} />
                </div>
                <div className="col-12 mt-4">
                    {
                        isUploading ? 
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className={`progress-bar w-${percent}`} ></div>
                        </div>
                        :
                        <input type='file' className='form-control' name='eventImage' onChange={e => { setFile(e.target.files[0]) }} />
                    }
                </div>
                <div className="col-12 mt-4">
                    {
                        loading ? <Button2 loading className={classes.control}>Creating Event</Button2>
                            : <Button variant='contained' onClick={handleSubmit}>Create Event</Button>
                    }
                </div>
            </div>

        </div>
    );
}