'use client'
import { Button, Input } from '@material-tailwind/react'
import {useState } from 'react'
import React from 'react'

function DeleteUser() {
    const [id, setId] = useState(''); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/users/' + id, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            alert('User deleted successfully')
           
        } catch (error) {
            alert(error.message);
        } 
    }
  return (
    <div>
        <form action="" onSubmit = {handleSubmit}>
            <Input label="User ID" type="text" placeholder="User Id" value={id} onChange = {(e) => setId(e.target.value)} />

            <Button type="submit" className = "mt-2">
                Delete
            </Button>
        </form>
    </div>
  )
}

export default DeleteUser