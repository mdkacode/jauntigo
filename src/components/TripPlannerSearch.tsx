"use client"
import { Button, DatePicker, Radio, Select, Form } from 'antd';
import React, { useState } from 'react';

const TripPlannerSearch: React.FC = () => {
    const [source, setSource] = useState<string>('');
    const [destination, setDestination] = useState<string>('');
    const [travelDate, setTravelDate] = useState<string>('');
    const [modeOfTravel, setModeOfTravel] = useState<string>('');

    const handleSourceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSource(event.target.value);
    };

    const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDestination(event.target.value);
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTravelDate(event.target.value);
    };

    const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setModeOfTravel(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        // event.preventDefault();
        // Add your trip planning logic here
        console.log(event);
       
    };

    const commonTextBoxClass = "mt-1 p-2 w-full border text-black rounded-md focus:outline-none focus:border-blue-500 "
    return (
        <div className="w-full max-w-md mx-auto p-4 border-1 rounded-md shadow-md bg-black bg-opacity-70">
            <Form initialValues={{ remember: true }} onFinish={handleSubmit}>

                <div>
                    <label className="ml-2 block text-2xl font-light text-white mb-2">Source and Destination</label>
                    <div className="flex justify-between mb-4">
                        <Form.Item className='w-full m-2 h-12' name={"source"}>
                            <Select className='w-full m-2 h-12' placeholder="Starting Place" options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]} />
                        </Form.Item>
                        <Form.Item className='w-full m-2 h-12' name={"destination"}>
                            <Select className='w-full m-2 h-12' placeholder="End Place" options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]} />
                        </Form.Item>
                    </div>
                </div>
                <div>
                    <label className="ml-2 block  text-xl font-light text-white mb-2">Start and End Date</label>
                    <div className="mb-4 flex flex-1 justify-between">
                        <Form.Item className='w-full m-2 h-12' name={"startDate"}>
                            <DatePicker className='w-full m-2 h-12' placeholder='Start Date' onChange={() => console.log('sksksk')} />
                        </Form.Item>
                        <Form.Item className='w-full m-2 h-12' name={"endDate"}>
                            <DatePicker className='w-full m-2 h-12' placeholder='End Date' onChange={() => console.log('sksksk')} />
                        </Form.Item>
                    </div>
                </div>

                <div> <label className="ml-2 block text-xl font-light text-white mb-2">Activites and People Count</label></div>
                <div className="mb-4 flex">
                    {/* <label className="block text-sm font-medium text-white">Mode of Travel</label> */}
                    <Form.Item className='w-full m-2 h-12 opacity-80' name={"activities"}>
                        <Select placeholder=" looking for ?" options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]} />
                    </Form.Item>
                    <Form.Item className='w-full m-2 h-12 opacity-80' name={"peopleCount"}>
                        <Select placeholder="No. of People" options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]} />
                    </Form.Item>
                </div>
                <div> <label className="ml-2 block text-xl font-light text-white mb-2">Traveling from</label></div>
                <Form.Item name={"modeOfTransport"} className={'flex justify-start align-middle h-12 w-full ml-2'}>

                    <Radio.Group className='h-12 ' defaultValue={'flight'} buttonStyle='solid'>
                        <Radio.Button value="train">Train</Radio.Button>
                        <Radio.Button value="flight">Flight</Radio.Button>
                        <Radio.Button value="car">Car</Radio.Button>
                        <Radio.Button value="bike">Bike</Radio.Button>
                    </Radio.Group>

                </Form.Item>

                <Button htmlType='submit' ghost className='w-full m-2 h-12'>Search</Button>
            </Form>
        </div>
    );
};

export default TripPlannerSearch;
