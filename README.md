# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
Here's a complete README.md for your UUPS upgradeable contract project:


# UUPS Upgradeable Smart Contract Example

A practical example of UUPS (Universal Upgradeable Proxy Standard) upgradeable smart contracts using Hardhat and OpenZeppelin.

## 🚀 Features

- **UUPS Proxy Pattern**: Upgradeable smart contract implementation
- **Hardhat Development**: Complete development environment
- **OpenZeppelin Upgrades**: Safe upgrade functionality
- **Contract Versioning**: Deploy and upgrade to V2 with new features

## 📁 Project Structure

```
UUPSExample/
├── contracts/
│   ├── MyContract.sol      # Initial UUPS contract (V1)
│   └── MyContractV2.sol    # Upgraded contract with new features (V2)
├── scripts/
│   ├── deploy.js           # Deploy the initial contract
│   └── upgrade.js          # Upgrade contract to V2
├── hardhat.config.js       # Hardhat configuration
└── package.json            # Dependencies
```

## 🛠️ Smart Contracts

### MyContract (V1)
- UUPS upgradeable contract,Ownable functionality,Basic value storage and modification

### MyContractV2 (V2) 
- Inherits from MyContract,Adds `incrementValue()` function, Demonstrates seamless upgrades

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
```bash
git clone https://github.com/KudraDube/UUPSExample.git
cd UUPSExample
npm install
```

### Local Development
1. **Start local blockchain**:
   ```bash
   npx hardhat node
   ```

2. **Deploy contract** (in new terminal):
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

3. **Upgrade to V2**:
   ```bash
   npx hardhat run scripts/upgrade.js --network localhost
   ```

## 📜 Scripts

- `deploy.js` - Deploys the initial UUPS proxy contract
- `upgrade.js` - Upgrades the contract to V2 implementation
- `interact.js` - Interact with the deployed contract

## 🔧 Usage

### Deploy
```javascript
npx hardhat run scripts/deploy.js --network localhost
```

### Upgrade
```javascript
npx hardhat run scripts/upgrade.js --network localhost
```

### Test New Functionality
After upgrade, call the new `incrementValue()` function.

## 🛡️ UUPS Benefits

- **Gas Efficient**: Logic and proxy in single contract
- **Flexible**: Can renounce upgradeability
- **Secure**: Only owner can upgrade
- **Preserves State**: Data maintained during upgrades

## 📚 Learn More

- [OpenZeppelin UUPS Documentation](https://docs.openzeppelin.com/contracts/4.x/api/proxy#UUPSUpgradeable)
- [Hardhat Upgrades Plugin](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-upgrades)
- [UUPS vs Transparent Proxies](https://docs.openzeppelin.com/contracts/4.x/proxies)

## 👤 Author

Kudra Dube
