// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
   string public message;

   constructor(string memory initMessage) {
       message = initMessage;
   }

   function update(string memory newMessage) public {
       message = newMessage;
   }
   function get() public view returns(string memory){
       return message;
   }
}