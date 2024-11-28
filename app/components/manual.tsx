import React from 'react'
import { Fingerprint } from 'lucide-react';

const DdosProtection = () => {
  return (
    <div className="mt-48 flex justify-between items-center align-middle px-32">
         
       <div className='text-left'>
       <h1 className="text-4xl font-semibold text-white scroll-m-7">Ddos Protection</h1>
       <h1 className='text-gray-300 text-xl'>Using Cloudflare</h1>
       <p className='mt-4 opacity-80 space-x-2'>
       Our DDoS (Distributed Denial of Service) protection services are designed to safeguard your network, servers, and online platforms from malicious traffic and cyber-attacks aimed at overwhelming your systems. We utilize advanced monitoring tools and automated systems that detect unusual traffic patterns in real time, allowing us to identify potential DDoS attacks before they cause significant disruption. Our approach involves traffic filtering, rate limiting, and rerouting malicious requests to prevent service downtime and maintain optimal performance. By leveraging cloud-based mitigation strategies and robust security protocols, we ensure that your online services remain accessible and secure, even during high-volume attacks. Our proactive monitoring, combined with rapid response teams, ensures comprehensive protection from all forms of DDoS threats, allowing you to focus on your business without worrying about service interruptions.
       </p>
       </div>
       <div>
        <Fingerprint height={94} size={512} strokeWidth={1}/>
        </div>
      </div>
  )
}

export default DdosProtection
