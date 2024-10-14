"use client";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import React from "react";

function UpdateUser() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Please enter the id");
      return;
    }
    const requestedData = { id };
    if (name) {
      requestedData.name = name;
    }
    if (email) {
      requestedData.email = email;
    }
    if (password) {
      requestedData.password = password;
    }

    try {
        const response = await fetch(`/api/users/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestedData),
        });

        if(response.ok) {
            alert("User updated successfully!");
            clearForm();
        }
    } catch(e) {
        console.error("Error while updating user:", e);
      } finally {
    }

  };

  const clearForm = () => {
    setId("");
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} action="">
          <Input
            label="Id"
            type="text"
            placeholder="Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            label="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="mt-2" type="submit">
            Submit!
          </Button>
        </form>
      </div>
    </>
  );
}

export default UpdateUser;
