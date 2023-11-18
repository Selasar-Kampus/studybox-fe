import CategoriesEight from '@/components/homes/categories/CategoriesEight'
import CoursesEight from '@/components/homes/courses/CoursesEight'
import HeroEight from '@/components/homes/heros/HeroEight'
import HeaderEight from '@/components/layout/headers/HeaderEight'

import React from 'react'
import WhyCourse from '@/components/homes/WhyCourse'
import FeaturesEight from '@/components/homes/features/FeaturesEight'
import StatictisEight from '@/components/homes/Statistics/StatictisEight'
import InstractorsEight from '@/components/homes/instractors/InstractorsEight'
import EventsEight from '@/components/homes/events/EventsEight'
import TestimonialsEight from '@/components/homes/testimonials/TestimonialsEight'
import Brands from '@/components/common/Brands'

import BecomeInstractoeEight from '@/components/homes/instractors/BecomeInstractoeEight'
import BecomeStudentEight from '@/components/homes/students/BecomeStudentEight'
import Footer from '@/components/layout/footers/Footer'
import Preloader from '@/components/common/Preloader'

export const metadata = {
    title: 'StudyBox',
    description: 'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',

}

export default function page() {
    return (<div className="main-content  ">
            <Preloader/>

            <HeaderEight/>
            <div className="content-wrapper  js-content-wrapper overflow-hidden">
                <HeroEight/>
                <CategoriesEight/>
                <CoursesEight/>
                <WhyCourse/>
                <FeaturesEight/>
                <StatictisEight/>
                <InstractorsEight/>
                <EventsEight/>
                <TestimonialsEight/>
                <Brands brandsTwo={true} backgroundColorComponent={'bg-light-6'}/>
                <BecomeInstractoeEight/>
                <BecomeStudentEight/>
                <Footer/>
            </div>

        </div>)
}
