// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

contract testContract {
    event ItemSet(bytes32 key, bytes32 value);
    event Transfer(address indexed _from, address indexed _to, uint256 _amount);

    function sendToken(address _to, uint256 num) public payable {
        emit Transfer(msg.sender, _to, num);

        emit ItemSet("abcdef", "ghijklmn");
        if (payable(msg.sender).balance < num) return;
        payable(_to).transfer(num);
    }

    uint256 counter = 0;
    event CounterLoghhhhhhhhhhhhh(bytes32 addr,uint256 w,address _from);

    function add() public {
        emit CounterLoghhhhhhhhhhhhh("abc",777,msg.sender);
        counter += 665;
        counter++;
    }
    function getBalance(address receiver) public view returns (uint256){
        return payable(receiver).balance;
    }

    // test address
    string[] public addresses;
    event ItemSet1115(bytes32 key, string[] value);
    function setAddresses() public  payable{
        addresses = ["eth17r0vew4xymjjd3u8rddfg7e7e0h83gng4cf3uq","eth17r0vew4xymjjd3u8rddfg7e7e0h83gng4cf3ua"];
        emit ItemSet1115("aaabbbccc", addresses);
    }
    event UpdateContractAddress(string key);
    function updateCA(string memory addr) public payable{
        // 0xb34437fc92dbACD8dCe76393BA322992353768f7
        emit UpdateContractAddress(addr);
    }


}