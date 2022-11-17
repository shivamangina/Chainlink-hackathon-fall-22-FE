const config = {
  CHAIN_LINK: {
    GOERLI: {
      CONTRACT_ADDRESS: "0x807273880C92cCd12b251353C546826B11419E94",
      ABI: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnerSet",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "requestId",
                  "type": "bytes32"
                },
                {
                  "internalType": "string",
                  "name": "paymentMethod",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "to",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "from",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "transactionId",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "currency",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "paymentTime",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "accountId",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "eventName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "organisationId",
                  "type": "string"
                }
              ],
              "indexed": false,
              "internalType": "struct ImmutableLedger.Transaction",
              "name": "transaction",
              "type": "tuple"
            }
          ],
          "name": "TransactionAdded",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_requestId",
              "type": "bytes32"
            },
            {
              "internalType": "string",
              "name": "_paymentMethod",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_to",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_from",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_transactionId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_currency",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_paymentTime",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_accountId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_eventName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_organisationId",
              "type": "string"
            }
          ],
          "name": "addTransaction",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "changeOwner",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "_isActive",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "_createdBy",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "_createdAt",
              "type": "string"
            }
          ],
          "name": "createOrganisation",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_id",
              "type": "string"
            }
          ],
          "name": "disableOrganisation",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_id",
              "type": "string"
            }
          ],
          "name": "getAllOrganisation",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "id",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "isActive",
                  "type": "bool"
                },
                {
                  "internalType": "address",
                  "name": "createdBy",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "createdAt",
                  "type": "string"
                }
              ],
              "internalType": "struct ImmutableLedger.Organisation",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getAllTransactions",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "requestId",
                  "type": "bytes32"
                },
                {
                  "internalType": "string",
                  "name": "paymentMethod",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "to",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "from",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "transactionId",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "currency",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "paymentTime",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "accountId",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "eventName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "organisationId",
                  "type": "string"
                }
              ],
              "internalType": "struct ImmutableLedger.Transaction[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getOwner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "organisations",
          "outputs": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "createdBy",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "createdAt",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    },
    network: "maticmum",
  },
};

export default config;
