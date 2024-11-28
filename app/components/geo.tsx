import React from 'react'

import { Earth } from 'lucide-react';
const GeoLocation = () => {
  return (
    <div className="mt-48 flex justify-between items-center align-middle px-32">
       <div>
       <h1 className="text-4xl font-semibold text-white scroll-m-7">Custom Rules</h1>
       <h1 className='text-gray-300 text-xl'>Upon Geo Location</h1>
       <p className='mt-4 opacity-80 space-x-2'>
       Blocking payments based on geographic location involves implementing custom rules that restrict transactions originating from specific countries or regions. These rules are typically applied to mitigate fraud, ensure compliance with international sanctions, or adhere to regional financial regulations. For example, a business might block payments from countries identified as high-risk for fraud, or from regions under trade embargoes. Advanced systems can integrate IP geolocation, billing address verification, and payment processor data to enforce these restrictions dynamically. Additionally, exceptions can be made for legitimate transactions through manual review or by allowing users to verify their identity and location. This geo-based payment blocking enhances security while maintaining compliance and minimizing risk.
       </p>
       </div>
        <div>
        <Earth height={94} size={512} strokeWidth={1}/>
        </div>
      </div>
  )
}

export default GeoLocation
