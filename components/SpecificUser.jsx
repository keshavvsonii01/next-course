"use client";
import { Button, Card, Input, List, ListItem } from "@material-tailwind/react";
import { useState } from "react";
import React from "react";

function SpecificUser() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch(`/api/users/${userId}`);

    if (response.ok) {
      const res = await response.json();
      setUserData(res.user);
    } else {
      console.log("Failed to fetch user data");
      setUserData(null);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="w-72">
          <Input
            label="Enter User Id"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button onClick={fetchUserData}>Fetch User</Button>

          {userData ? (
            userData.map((d) => (
              <>
                <Card className="w-96 mt-5">
                  <List>
                    <ListItem>ID: {d.id}</ListItem>
                    <ListItem>Name: {d.name}</ListItem>
                    <ListItem>Age: {d.age}</ListItem>
                    <ListItem>Email: {d.email}</ListItem>

                  </List>
                </Card>
              </>
            ))
          ) : (
            <p className="mt-2">Search</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SpecificUser;
