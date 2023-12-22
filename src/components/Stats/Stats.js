import React from 'react'
import downi from '../../images/downi.png'
import usersi from '../../images/usersi.png'
import filesi from '../../images/filesi.png'
import placesi from '../../images/placesi.png'

const Stats = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="ft-head2 lg:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p className="haps lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-12 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <img className="text-purple-500 w-12 h-12 mb-3 inline-block" src={downi}/>
          <h2 className="txtp title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div className="p-12 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img className="text-purple-500 w-12 h-12 mb-3 inline-block" src={usersi}/>
          <h2 className="txtp title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
      <div className="p-12 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img className="text-purple-500 w-12 h-12 mb-3 inline-block" src={filesi}/>
          <h2 className="txtp title-font font-medium text-3xl text-gray-900">74</h2>
          <p className="leading-relaxed">Files</p>
        </div>
      </div>
      <div className="p-12 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img className="text-purple-500 w-12 h-12 mb-3 inline-block" src={placesi}/>
          <h2 className="txtp title-font font-medium text-3xl text-gray-900">46</h2>
          <p className="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Stats