// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

contract DBlog {
    // replyTo address(0) for new post, else use txHash
    event Post(address indexed author, string content, string replyTo);

    event Like(address indexed author, string postId);
    event Dislike(address indexed author, string postId);

    function post(string memory content, string memory replyTo) public {
        emit Post(msg.sender, content, replyTo);
    }

    function like(string memory postId) public {
        emit Like(msg.sender, postId);
    }

    function dislike(string memory postId) public {
        emit Dislike(msg.sender, postId);
    }
}
