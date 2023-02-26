import { Box } from '@mantine/core'
import { Button } from '@mui/material'
import CustomCard from 'Components/CustomCard'
import React from 'react'

const recentEvent = () => {
    return (
        <div>
            <div className="container text-center my-4">
                <div className="row">
                    <div className="col-sm-12 col-md-8 offset-sm-0 offset-md-2">
                        <h1>Popular Events</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt quaerat, officiis natus quis sed? Minima quibusdam aperiam sapiente laboriosam!</p>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <Box sx={{ width: '100%' }}>
                    <div className="container">
                        <div className="row g-2  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <CustomCard
                                    title="Sarina Event Faisalabad"
                                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                                    url="https://img.freepik.com/free-photo/people-having-fun-wedding-hall_1303-19593.jpg?size=626&ext=jpg&ga=GA1.2.446418847.1674213321&semt=sph"
                                />
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <CustomCard
                                    title="The Dinesty Lahore"
                                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                                    url="https://img.freepik.com/free-photo/shine-wedding-altar-newlyweds-stands-backyard-decorated-with-balloons_8353-8415.jpg?size=626&ext=jpg&ga=GA1.2.446418847.1674213321&semt=sph"
                                />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <CustomCard
                                    title="Oxygym Faisalabad"
                                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                                    url="https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?size=626&ext=jpg&ga=GA1.2.446418847.1674213321&semt=sph"
                                />
                            </div>
                            <div className="col">
                                <Button variant="contained" className=' px-5 py-3 my-4'>Discover more</Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default recentEvent
