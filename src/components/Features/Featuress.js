import React from 'react'
import elect from '../../images/electronics.png'
import jewel from '../../images/jewel.png'
import men from '../../images/men.png'
import elects from '../../images/electr.png'
import jewels from '../../images/jewels.png'
import mens from '../../images/mensi.png'
import { Link } from 'react-router-dom'

const Featuress = () => {

    const cards = [
        {
            id: 1,
            imgUrl: elect,
            smImg: elects,
            source : "Electronics",
            learn : "Learn More →",
            site : "electronics"
        },
        {
            id: 2,
            imgUrl: jewel,
            smImg: jewels,
            source : "Jewellery",
            learn : "Learn More →",
            site : "jewelery"
    
        },
        {
            id: 3,
            imgUrl: men,
            smImg: mens,
            source : "Men's Clothes",
            learn : "Learn More →",
            site: "men's clothing"
        }
        
    ]

    const content = cards.map((card=>(
        <div  className=''>
        <Link
          to={`/categories/${card.site}`}
                  className="p-4 md:w-1/3 cursor-pointer"
        >
            <div key={card.id} className="corve flex rounded-lg h-full border-2 border-gray-200 p-4 flex-col">
         
                <img className='corve1' src={card.imgUrl} alt='h'/>
                <div className='flex justify-between mt-8'>
                <div className='cuts'><img src={card.smImg} /><p className='hae mt-2'>{card.source}</p></div>
                <div><p className='bg-transparent text-black-500 border border-black py-2 px-4 rounded-full'>{card.learn}</p></div>
                </div>
                

              </div>  
    
              </Link>
        </div>   
        
        )))


  return (
    <div>
    <div className="container px-5 py-24 mx-auto">
     <div className="flex flex-col text-center w-full mb-20">
        
        <h1 className="ft-head lg:text-4xl text-2xl font-medium title-font text-gray-900">
          Master Cleanse Reliac Heirloom
        </h1>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-8 gits '>
      {content}
      </div>
    
    </div>
    </div>
  )
}

export default Featuress