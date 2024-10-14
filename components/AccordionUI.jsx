"use client";
import { useState } from "react";
import AllUsers from "./AllUsers";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SpecificUser from "./SpecificUser";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
function AccordionUI() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="w-[40rem]">
        <h1>Names </h1>
        <Accordion open={open === 1}>
          <AccordionHeader
            className="cursor-pointer"
            id="headingOne"
            onClick={() => handleOpen(1)}
          >All Users</AccordionHeader>
          <AccordionBody>
            <AllUsers />
          </AccordionBody>
         
        </Accordion>
        <Accordion open={open === 2}>
        <AccordionHeader
            className="cursor-pointer"
            id="headingOne"
            onClick={() => handleOpen(2)}
          >Search for Specific User - </AccordionHeader>
          <AccordionBody>
            <SpecificUser />
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3}>
        <AccordionHeader
            className="cursor-pointer"
            id="headingOne"
            onClick={() => handleOpen(3)}
          >Create a User </AccordionHeader>
          <AccordionBody>
            <CreateUser />
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4}>
        <AccordionHeader
            className="cursor-pointer"
            id="headingOne"
            onClick={() => handleOpen(4)}
          >Update a User </AccordionHeader>
          <AccordionBody>
            <UpdateUser />
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5}>
        <AccordionHeader
            className="cursor-pointer"
            id="headingOne"
            onClick={() => handleOpen(5)}
          >Delete a User </AccordionHeader>
          <AccordionBody>
            <DeleteUser />
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}

export default AccordionUI;
