import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

let users_data = [
    {id: 1, name: "John", age: 20},
    {id: 2, name: "Smith", age: 30},
    {id: 3, name: "Brad", age: 40},
    {id: 4, name: "Peter", age: 50},
    {id: 5, name: "Sam", age: 60},
    {id: 6, name: "Mark", age: 70},
]

const UserInfo = () => {

    let [user, setUser] = useState("");

    let {x} = useParams()

    useEffect(() => {

        let arr = users_data.filter(value => value.id == x);
        setUser(arr[0])
        console.log(arr);
    }, [])

    return (
        <div>
            <h1>User: {x}</h1>
            {
                user && 
                <div>
                    <h2>{user.name}</h2>
                    <h2>{user.age}</h2>
                </div>
            }
        </div>
    )

};
export default UserInfo;