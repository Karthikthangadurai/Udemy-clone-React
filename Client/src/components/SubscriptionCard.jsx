import React from 'react'
import image from "../assets/images/subscriptioncard.webp"

const SubscriptionCard = () => {
  return (
    <>
    <section className="w-[88%] mx-auto my-10 p-12 rounded-4xl flex justify-between items-center bg-[#202230] text-white">
    <div>
        <h1>Build your career with a Personal Plan subscription</h1>
        <p>Subscribers save an average of ₹4,000+ in their first month, stop paying per course. Join 5 lakh+ learners, starting at ₹500/month.</p>
        <ul>
            <li><span></span> <span><strong>Get</strong>access to 28,000+ top-rated courses</span></li>
            <li><span></span> <span><strong>Learn</strong>from 9,000+ expert instructors</span></li>
            <li><span></span> <span><strong>Dev</strong>,IT, Business, Design and 50+ more topics</span></li>
            <li><span></span> <span><strong>Certification</strong>prep for AWS, Microsoft, PMI, and more</span></li>
        </ul>
        <button>Subscribe now</button>
        <a href="#">Learn more</a>
    </div>
    <div>
        <img src={image} alt="SubscriptionImage" />
    </div>
    </section>
    </>
  )
}

export default SubscriptionCard