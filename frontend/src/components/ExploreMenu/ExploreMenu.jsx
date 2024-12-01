// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ExploreMenu.css'
import { menuList } from '../../assets/asset'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>
        Discover a Menu of Endless Flavors, Crafted Just for You. Whether you are in the mood for comfort food, healthy choices, or indulgent treats, our menu offers something for every craving.         </p>
        <div className='explore-menu-list'>
            {menuList.map((item,index)=>{
                return (
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu