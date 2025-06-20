import React from 'react'

export default function Menu() {
    return (
        <a name="menu">
            <div className='tracking-wider p-4 mt-20 mx-auto w-full max-w-screen-lg flex flex-wrap flex-rpw  border-b border-gray-300'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-4xl text-center  m-10 p-5'>Our Menu</h1>


                    <div className='space-y-6'>
                        <div>
                            <h3 className='text-2xl font-medium  '>Bread Basket</h3>
                            <p className='p-2 mb-10 '>Assortment of fresh baked fruit breads and muffins 5.50</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-medium  '>Honey Almond Granola with Fruits</h3>
                            <p className='p-2 mb-10 '>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                        </div>
                        <h3 className='text-2xl font-medium  '>Belgian Waffle</h3>
                        <p className='p-2 mb-10 '>Vanilla flavored batter with malted flour 7.50</p>
                        <div>
                            <h3 className='text-2xl font-medium  '>Scrambled eggs</h3>
                            <p className='p-2 mb-10 '>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-medium  '>Blueberry Pancakes</h3>
                            <p className='p-2 mb-10 '>With syrup, butter and lots of berries 8.50</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt=""
                        className='max-w-full h-auto rounded-xl shadow-inherit' />
                </div>
            </div></a>























    )
}
