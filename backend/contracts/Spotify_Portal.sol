// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0;

import "hardhat/console.sol";

contract SpotifyPortal{

    uint totalRequestedSongs;

    struct CustomMap{
        mapping(address => uint) requestPerPerson;
        address[] keys;
    }

    CustomMap requests; 

    mapping(address => uint) requestPerPerson;

    constructor(){
        console.log("Your song is loading....");
    }

    function requestSong() public {
        bool contain = contains(msg.sender);
        totalRequestedSongs += 1;
        if(contain){
            requests.requestPerPerson[msg.sender] += 1;
        }else {
            requests.requestPerPerson[msg.sender] += 1;
            requests.keys.push(msg.sender);
        }
        
        
    }

    function getTotalRequestedSongs() public view returns(uint) {
        console.log("Total Requested Songs", totalRequestedSongs);
        return totalRequestedSongs;
    }

    function getRequestPerPerson() public view {
        uint len = requests.keys.length;
        for(uint i = 0; i < len; i++){
            console.log(requests.keys[i], " has requested", requests.requestPerPerson[requests.keys[i]], " song");
        }
        
    }

    function contains(address _addr) public view returns (bool) {
      if (requests.keys.length == 0) {
         return false;
      }
      uint len = requests.keys.length;
      for (uint i = 0 ; i < len ; i++) {
          if (requests.keys[i] == _addr) {
            return true;
          }
      }
      return false;
  } 
}