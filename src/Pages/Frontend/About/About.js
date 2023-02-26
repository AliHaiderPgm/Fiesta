import React from 'react'
import OurServices from 'Components/Events/recentEvent';
import InstagramSection from 'Components/Instagram';

export default function About() {
    return (
        <>

            {/* Second section */}

            <div className="container mb-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-8">
                        <h3 className='text-center'>Our Journey</h3>
                        <p className='text-muted text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum fugit quae distinctio! Quia voluptatem et nobis fugit, veniam explicabo assumenda harum! Ducimus dolore, iure obcaecati recusandae in dicta sunt enim distinctio quisquam, ratione inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo enim possimus facilis repellendus, eaque culpa quidem assumenda laborum praesentium ipsa, harum est laudantium cumque?</p>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <img src='https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?size=626&ext=jpg&ga=GA1.2.446418847.1674213321&semt=sph'
                         alt="Event" className='img-fluid ps-0 ps-md-5 ps-lg-4 w-100' style={{height:"300px",objectFit:'cover'}}/>
                    </div>
                </div>
                <div className="row mt-4 mb-3 pt-3">
                    <div className="col text-center">
                        <h1 className='fw-bold text-uppercase'>We Started Our Journey From</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 col-md-8">
                        <p className='text-muted text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum fugit quae distinctio! Quia voluptatem et nobis fugit, veniam explicabo assumenda harum! Ducimus dolore, iure obcaecati recusandae in dicta sunt enim distinctio quisquam, ratione inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo enim possimus facilis repellendus, eaque culpa quidem assumenda laborum praesentium ipsa, harum est laudantium cumque?</p>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <img src='https://img.freepik.com/free-photo/person-close-up-recording-video-with-smartphone-during-concert_1153-7416.jpg?size=626&ext=jpg&ga=GA1.2.446418847.1674213321&semt=sph'
                        alt="Event" className='img-fluid ps-0 ps-md-5 ps-lg-4 w-100' style={{height:"300px",objectFit:'cover'}}/>
                    </div>
                </div>
                <div className="row mt-4 mb-3 pt-3">
                    <div className="col text-center">
                        <h1 className='fw-bold text-uppercase'>2020</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 col-md-7">
                        <p className='text-muted text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum fugit quae distinctio! Quia voluptatem et nobis fugit, veniam explicabo assumenda harum! Ducimus dolore, iure obcaecati recusandae in dicta sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore inventore maxime temporibus similique necessitatibus eaque possimus, repellendus nihil sit! Ipsa.</p>
                    </div>
                </div>
            </div>


            <InstagramSection/>
            <OurServices />
        </>
    )
}
