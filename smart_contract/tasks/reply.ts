import { task } from "hardhat/config";
import { DBlog } from "../typechain";

import { TASK_REPLY } from "./task-names";

task(TASK_REPLY, "Reply to a Post")
    .addParam("message", "The message you want to post")
    .addParam("post", "The Post you want to reply to")
    .setAction(async ({ message, post }, { ethers }) => {
        const deployer = await ethers.getNamedSigner("admin");

        const blog = (await ethers.getContract("DBlog", deployer)) as DBlog;
        console.log("Posting your reply", message);
        const reply = await (await blog.post(message, post)).wait();
        console.log("Replied!", reply);
    });
