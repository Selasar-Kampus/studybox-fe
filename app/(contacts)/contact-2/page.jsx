import Faq from '@/components/common/Faq'
import Preloader from '@/components/common/Preloader'

import ContactTwo from '@/components/contacts/ContactTwo'

import Footer from '@/components/layout/footers/Footer'
import Header from '@/components/layout/headers/Header'
import React from 'react'

export const metadata = {
    title: 'Contact-2',
    description:
        'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',

}

export default function page() {
    return (
        <div className="main-content  ">
            <Preloader/>
            <Header/>
            <div className="content-wrapper js-content-wrapper overflow-hidden">
                <ContactTwo/>
                <Faq/>
                <Footer/>
            </div>
        </div>
    )
}

