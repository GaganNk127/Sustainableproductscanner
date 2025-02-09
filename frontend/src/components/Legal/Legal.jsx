import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Legal() {
  return (
    <div className='h-screen w-screen bg-blue-100 flex flex-col'>
        <ol className='mt-10 mx-6'>
            <li className='text-xl font-bold text-align-justify'>
            Information We Collect
            To serve our business objectives effectively, we collect:
            <br></br>
            1.1 Personal Information:
            Name, job title, company name, email address, phone number, and any details provided through contact forms, inquiries, or direct communication.
            <br></br>
            1.2 Business Information:
            Project requirements, business preferences, and any other details shared during consultations or transactions.
            </li>
            <br></br>
            <br></br>
            <li className='text-xl font-bold text-align-justify'>
            Purpose of Data Collection
            <br></br>
            We collect your information to:

            <br></br>
            2.1 Respond to inquiries and provide tailored solutions for your business needs and
            transactions and maintain business relationships.
            <br></br>
            2.2 Send newsletters, updates, and marketing communications related to our products and services.
            Improve our website, services, and customer interactions through data insights.
            </li>
        </ol>

    </div>
  )
}

export default Legal