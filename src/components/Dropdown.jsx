import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"

export default function DropdownComponent({buttonText}) {
  return (
    <Dropdown
        id="campus"
      color="lightGreen"
      placement="bottom-start"
      buttonText={buttonText}
      buttonType="outline"
      size="regular"
      rounded={true}
      block={false}
      ripple="dark"
      
      
    >
      <DropdownItem
        href="#"
        color="lightGreen"
        ripple="light"
        // onClick={(e) => {
        //     e.preventDefault()
        //     console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling)
        // }}
      >
        Sai Gon South Campus
      </DropdownItem>
      <DropdownItem
        href="#"
        color="lightGreen"
        ripple="light"
        onClick={(e) => e.preventDefault()}
      >
        Hanoi Campus
      </DropdownItem>
      <DropdownItem
        href="#"
        color="lightGreen"
        ripple="light"
        onClick={(e) => e.preventDefault()}
      >
       Others
      </DropdownItem>
    </Dropdown>
  )
}