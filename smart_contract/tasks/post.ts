import { task } from "hardhat/config";
import { DBlog } from "../typechain";

import { TASK_POST } from "./task-names";

task(TASK_POST, "Publish a new Post")
    .addParam("message", "The message you want to post")
    .setAction(async ({ message }, { ethers }) => {
        const deployer = await ethers.getNamedSigner("admin");

        const blog = (await ethers.getContract("DBlog", deployer)) as DBlog;
        console.log("Posting your Message", message);
        const post = await (await blog.post(message, ethers.constants.HashZero)).wait();
        console.log("Posted! with id: ", post.transactionHash);
    });
