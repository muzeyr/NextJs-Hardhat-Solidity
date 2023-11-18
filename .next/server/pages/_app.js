(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./Components/Footer.jsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Footer"
    });
};
/* harmony default export */ const Components_Footer = (Footer);

;// CONCATENATED MODULE: ./Components/Logo.jsx


const Logo = ({ color  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        class: `w-8 ${color} text-teal-accent-400`,
        viewBox: "0 0 24 24",
        strokeLinejoin: "round",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
        stroke: "currentColor",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "3",
                y: "1",
                width: "7",
                height: "12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "3",
                y: "17",
                width: "7",
                height: "6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "14",
                y: "1",
                width: "7",
                height: "6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "14",
                y: "11",
                width: "7",
                height: "12"
            })
        ]
    });
};
/* harmony default export */ const Components_Logo = (Logo);

;// CONCATENATED MODULE: external "web3modal"
const external_web3modal_namespaceObject = require("web3modal");
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_namespaceObject);
;// CONCATENATED MODULE: external "ethers"
const external_ethers_namespaceObject = require("ethers");
;// CONCATENATED MODULE: ./Context/CrowdFunding.json
const CrowdFunding_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"campaigns","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountCollected","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"createCampaign","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"donateToCampaign","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getCampaigns","outputs":[{"components":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountCollected","type":"uint256"},{"internalType":"address[]","name":"donators","type":"address[]"},{"internalType":"uint256[]","name":"donations","type":"uint256[]"}],"internalType":"struct CrowdFunding.Campaign[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfCampaigns","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}');
;// CONCATENATED MODULE: ./Context/constants.js

const CrowdFundingAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const CrowdFundingABI = CrowdFunding_namespaceObject.Mt;

;// CONCATENATED MODULE: ./Context/CrowdFunding.js





const fetchContract = (signerOrProvider)=>new external_ethers_namespaceObject.ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);
const CrowdFundingContext = /*#__PURE__*/ external_react_default().createContext();
const CrowdFundingProvider = ({ children  })=>{
    const titleData = "Crowd Funding Contract";
    const [currentAccount, setCurrentAccount] = (0,external_react_.useState)("");
    const createCampaign = async (campaign)=>{
        const { title , description , amount , deadline  } = campaign;
        const web3Modal = new (external_web3modal_default())();
        const connection = await web3Modal.connect();
        const provider = new external_ethers_namespaceObject.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        console.log(currentAccount);
        try {
            const transaction = await contract.createCampaign(currentAccount, title, description, external_ethers_namespaceObject.ethers.utils.parseUnits(amount, 18), new Date(deadline).getTime());
            await transaction.wait();
            console.log("contact call success", transaction);
        } catch (e) {
            console.log("contact call  error", e);
        }
    };
    const getCampaigns = async ()=>{
        const provider = new external_ethers_namespaceObject.ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const campaigns = await contract.getCampaigns();
        const parsedCampaigns = campaigns.map((campaign, i)=>({
                owner: campaign.owner,
                title: campaign.title,
                description: campaign.description,
                target: external_ethers_namespaceObject.ethers.utils.formatEther(campaign.target.toString()),
                deadline: campaign.deadline.toNumber(),
                amountCollected: external_ethers_namespaceObject.ethers.utils.formatEther(campaign.amountCollected.toString()),
                pId: i
            }));
        return parsedCampaigns;
    };
    const getUserCampaigns = async ()=>{
        const provider = new external_ethers_namespaceObject.ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const allCampaigns = await contract.getCampaigns();
        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        });
        const currentUser = accounts[0];
        const filteredCampaigns = allCampaigns.filter((campaign)=>campaign.owner === "OxF39");
        const userData = filteredCampaigns.map((campaign, i)=>({
                owner: campaign.owner,
                title: campaign.title,
                description: campaign.description,
                target: external_ethers_namespaceObject.ethers.utils.formatEther(campaign.target.toString()),
                deadline: campaign.deadline.toNumber(),
                amountCollected: external_ethers_namespaceObject.ethers.utils.formatEther(campaign.amountCollected.toString()),
                pId: i
            }));
        return userData;
    };
    const donate = async (pId, amount)=>{
        const web3Modal = new (external_web3modal_default())();
        const connection = await web3Modal.connect();
        const provider = new external_ethers_namespaceObject.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        const campaignData = await contract.donateToCampaign(pId, {
            value: external_ethers_namespaceObject.ethers.utils.parseEther(amount)
        });
        await campaignData.wait();
        location.reload();
        return campaignData;
    };
    const getDonations = async (pId)=>{
        const provider = new external_ethers_namespaceObject.ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const donations = await contract.getDonators(pId);
        const numberOfDonations = donations[0].length;
        const parsedDonations = [];
        for(let i = 0; i > numberOfDonations; i++){
            parsedDonations.push({
                donator: donations[0][i],
                donation: external_ethers_namespaceObject.ethers.utils.formatEther(donations[1][i].toString())
            });
        }
        return parsedDonations;
    };
    const checkIfWalletConnected = async ()=>{
        try {
            if (!window.ethereum) {
                return setOpenError(true), setError("Install MetaMask");
            }
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("Account not Found");
            }
        } catch (e) {
            console.log("Error (wallet connection)", e);
        }
    };
    (0,external_react_.useEffect)(()=>{
        checkIfWalletConnected();
    }, []);
    const connectWallet = async ()=>{
        try {
            if (!window.ethereum) {
                return console.log("Install Metamask");
            }
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log("Error (connection wallet)");
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(CrowdFundingContext.Provider, {
            value: {
                titleData,
                currentAccount,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDonations,
                connectWallet
            },
            children: children
        });
    };
};

;// CONCATENATED MODULE: ./Components/NavBar.jsx




const NavBar = ()=>{
    const { currentAccount , connectWallet  } = (0,external_react_.useContext)(CrowdFundingContext);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuList = [
        "White Paper",
        "Project",
        "Donation",
        "Members"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        class: "backgroundMain ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            class: "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "relative flex items-center justify-between",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "/",
                                "aria-label": "Company",
                                title: "C",
                                class: "inline-flex item-center mr-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Components_Logo, {
                                        color: "text-white"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        class: "ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
                                    }),
                                    "Company"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: menuList.map((et, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: et
                                    }, i + 1))
                            })
                        ]
                    })
                }),
                !currentAccount && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    class: "flex items-center hidden space-x-8 lg:flex",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>connectWallet(),
                            "aria-label": "Sign Up",
                            children: "Connect Wallet"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Components_NavBar = (NavBar);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.js





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CrowdFundingProvider, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Components_NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Components_Footer, {})
        ]
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(619));
module.exports = __webpack_exports__;

})();