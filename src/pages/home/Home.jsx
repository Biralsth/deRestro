import React from 'react'
import { useState } from 'react'
import { Button, List, Card, ListItem, ListItemSuffix, Chip } from '@material-tailwind/react';
import { faker } from '@faker-js/faker';




export default function Home() {
    const [count, setCount] = useState(0);
    const handleCount = () => (
        setCount((prev) => prev + 1)
    )

    const [color, setColor] = useState(null);
    const handleColor = () => {
        setColor((prev) => !prev)
    }

    const [chemi, setChemi] = useState([])
    const handleChemi = () => {
        setChemi((prev) => [...prev, faker.science.chemicalElement()])
    }



    return (
        <div className='p-5 flex gap-3'>
            <h1>{count}</h1>
            <button onClick={handleCount}>Smash</button>
            <button onClick={handleColor} className={`${color ? "bg-black" : "bg-red-800"}`}>Smash</button>

            <button onClick={handleChemi}>Chemi Smash</button>




            <Card className="w-96">
                <List>
                    <ListItem>
                        Inbox
                        <ListItemSuffix>
                            <Chip
                                value="14"
                                value2="2"
                                variant="ghost"
                                size="sm"
                                className="rounded-full"
                            />
                        </ListItemSuffix>
                    </ListItem>

                </List>
            </Card>








        </div>
    )

}
