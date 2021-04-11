import { Contract } from "@ethersproject/contracts";
import { Signer } from "@ethersproject/abstract-signer";

import mumbaiContract from "../../smart_contract/deployments/mumbai/DBlog.json";

/**
 * Get the contract for Posting
 * @param signer
 * @returns
 */
const getContract = (signer: Signer): Contract =>
  new Contract(mumbaiContract.address, mumbaiContract.abi, signer);
export default getContract;
