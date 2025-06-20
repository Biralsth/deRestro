import React from 'react'
import User from "./User";
import Image from "./Image";
import { imageData, users } from "../data/date";
import Button from "./Button";

export default function Save() {
    return (
        <div className="max-w-screen overflow-x-hidden">
            <div className="m-1 p-5 scale-70">

                {users.map((user) => {
                    return <User key={user.id} data={user} />
                })}
            </div>

            <div className="m-10 p-10  flex flex-wrap mx-auto ">
                {imageData.map((shiro) => {
                    return <Image key={shiro.id} img={shiro} />
                })}



            </div>
            <Button lable={"Click 1"} color={"bg-black"} />
            <Button lable={"Click 2"} color={'bg-red-500'} />
            <Button lable={"Click 3"} color={'bg-blue-500'} />
            <Button></Button>

        </div>
    )
}
