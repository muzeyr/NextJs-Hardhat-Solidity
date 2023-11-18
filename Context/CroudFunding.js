

import React, { useState, useEffect } from "react"; import Wenb3Modal from "web3modal";
import { ethers } from "ethers";
//INTERNAL
IMPORT
import { Crowd FundingABI, Crowd FundingAddress } from "./contants";
//---FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>