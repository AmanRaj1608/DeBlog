import { task } from "hardhat/config";
import { DBlog } from "../typechain";

import { TASK_DISLIKE } from "./task-names";

task(TASK_DISLIKE, "Dislike a Post")
    .addParam("post", "The tx hash for the post you want to dislike")
    .setAction(async ({ post }, { ethers }) => {
        const deployer = await ethers.getNamedSigner("admin");

        const blog = (await ethers.getContract("DBlog", deployer)) as DBlog;
        console.log("Disliking post with id: ", post);
        const dislike = await (await blog.dislike(post)).wait();
        console.log("Dislike!", dislike);
    });
