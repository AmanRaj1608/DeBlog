import { task } from "hardhat/config";
import { DBlog } from "../typechain";

import { TASK_LIKE } from "./task-names";

task(TASK_LIKE, "Like a Post")
  .addParam("post", "The tx hash for the post you want to like")
  .setAction(async ({post}, {ethers}) => {
    const deployer = await ethers.getNamedSigner("admin");

    const blog = (await ethers.getContract("DBlog", deployer)) as DBlog
    console.log("Liking post with id: ", post)
    const like = await (await blog.like(post)).wait()
    console.log("like!", like)
});
