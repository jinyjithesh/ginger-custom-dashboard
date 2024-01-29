import axios from 'axios';
import React, { useEffect, useState } from 'react'

import FormTable from '../components/FormTable';
const Inbox = () => {
    axios.defaults.baseURL = "http://localhost:5000"
    const [addSection, setAddSection] = useState(false);
    const [editSection, setEditSection] = useState(false);
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            mobile: "",
               
        }
    );
    const [formEdit, setFormEdit] = useState(
        {
            name: "",
            email: "",
            mobile: "",
            _id: ""
        }
    );
    const [dataList, setDataList] = useState([])

    const handleOnchange = (e) => {
        const { value, name } = e.target
        setFormData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await axios.post("/create", formData)
        console.log("create", data)
        if (data.data.success) {
           
            setAddSection(false)
            alert(data.data.message)
            getFetchData()
            // setFormData({name:"",email:"",mobile:""})
        }

    }
    const getFetchData = async () => {
        const data = await axios.get("/get")
        console.log("get", data)
        if (data.data.success) {
            setDataList(data.data.data)
        }

    }
    useEffect(() => {
        getFetchData()
    }, []);

    const handleDelete = async (id) => {
        const data = await axios.delete("/delete/" + id)
        if (data.data.success) {
            getFetchData()
            alert(data.data.message)
        }
    }
    const handleUpdate = async (e) => {
        e.preventDefault()
        const data = await axios.put("/update", formEdit)
        if (data.data.success) {
            getFetchData()
            alert(data.data.message)
            setEditSection(false);
        }
    }
    const handleEditOnchange = async (e) => {
        const { value, name } = e.target
        setFormEdit((preve) => {
            return {
                ...preve,
                [name]: value
            } 
        })
    }
    const handleEdit = async (el) => {
        setFormEdit(el);
        setEditSection(true);
    }
    return (
        <>
            <div className='inbox-container'>
                <button className='btn-add' onClick={() => setAddSection(true)}>Add</button>

                {addSection && (
                    <FormTable 
                    handleSubmit={handleSubmit}
                        handleOnchange={handleOnchange}
                        handleClose={() => setAddSection(false)}
                        rest={formData}
                         />
                )}
                {
                    editSection && (
                        <FormTable handleSubmit={handleUpdate}
                            handleOnchange={handleEditOnchange}
                            handleClose={() => setEditSection(false)}
                            rest={formEdit}
                             />
                    )
                }
                <div className='tableContainer'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList[0] ? (dataList.map((el) => {
                                console.log("el", el);
                                return (
                                    <tr>
                                        <td>{el.name}</td>
                                        <td>{el.email}</td>
                                        <td>{el.mobile}</td>
                                        <td><button className='btn-edit' onClick={()=>handleEdit(el)}
                                            
                                            >Edit</button>
                                            <button className='btn-delete' onClick={() => handleDelete(el._id)}>Delete</button></td>
                                    </tr>
                                )
                            })) : (<p style={{ textAlign: "center" }}>no data here</p>)}
                        </tbody>
                    </table>
                </div>
            </div></>

    )
}

export default Inbox