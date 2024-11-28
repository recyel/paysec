import React from 'react'
import { Fingerprint } from 'lucide-react';
import { Key } from 'lucide-react';
const ManualReview = () => {
  return (
    <div className="mt-48 flex justify-between items-center align-middle px-32">
         <div>
        <Key height={94} size={512} strokeWidth={1}/>
        </div>
       <div className='text-right'>
       <h1 className="text-4xl font-semibold text-white scroll-m-7">Manual Reviewing</h1>
       <h1 className='text-gray-300 text-xl'>Risk Payments</h1>
       <p className='mt-4 opacity-80 space-x-2'>
       Manually reviewing risk payments involves a thorough, hands-on examination of financial transactions related to risk management, ensuring that payments align with contractual agreements, regulatory requirements, and internal policies. This process typically requires scrutinizing payment amounts, verifying the accuracy of risk assessments, and confirming that appropriate procedures were followed in the approval and processing stages. Manual reviews are critical in identifying discrepancies, potential fraud, or errors, which automated systems might overlook. This practice helps maintain financial integrity, reduce operational risks, and ensure compliance with legal or industry standards. Despite the increasing reliance on automation, manual review remains essential in complex or high-risk cases that require human judgment and expertise.
       </p>
       </div>
       
      </div>
  )
}

export default ManualReview
