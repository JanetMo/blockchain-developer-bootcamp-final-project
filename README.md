# blockchain-developer-bootcamp-final-project

This DApp wants to provide secure scheduling of doctor's appointments.

![Screenshot of the front-end](https://github.com/JanetMo/blockchain-developer-bootcamp-final-project2/blob/fa31276740e2b841ecc71b4f5d5b03bf44538e59/src/images/screenshot.png)

Did you ever make an appointment at the doctor, but when you went there, yours and their schedules didn't match, so you couldn't keep the appointment?

This is even more unfruitful if this is following a long waiting period, which is often the case for medical specialists. When booking an appointment by telephone it is sometimes the case, that the appointment details are noted not correctly or get lost. Patients usually don't have the possibility to prove they made a certain appointment, as the doctor's schedule is private and there was no written conversation.

That's where the transparent and immutable structure of the blockchain could help. By booking appointments via a blockchain-connected website, the patients can make sure their appointment is registered correctly.
Additionally, they can look up the details is case they forget something or have to prove their booking. Due to the decentralized structure, changes are practically impossible. The pseudonymous setup ensures that the appointment data cannot be associated with a certain person.

A simple walkthrough could look like this:

1. Users go on the site and are invited to connect their meta mask wallet
2. Now they can see the available time slots and decide for one that fits well
3. The user now has to book the appointment by initiating a blockchain transaction
4. The selected appointment gets assigned to the user and is disabled for other users
5. Users will only be able to book one appointment in a certain time frame

This DApp should create more reliability for doctor's appointments on both sides - the patients and the medical team.

Of course, this idea is not yet really realistic. In most cases, a personal talk is necessary to set the appointment details.
To address some weaknesses, the following ideas could be implemented later:

- Possibility to cancel, respectively initiate a second transaction to "give back" an appointment
- Use the system for other sorts of appointments
- Implement that users are not able to book the next appointment as long as the last one isn't over
- Using some sort of private data storing and add some details, so the medical team already knows who booked the appointment and what the problem is

This is my first contact with coding, so I thought very basic. Therefore, I took the famous truffle pet-shop-tutorial (https://trufflesuite.com/tutorial/) and adapted it for this project.

## Resources:

- Link to the App: https://janetmo.github.io/blockchain-developer-bootcamp-final-project/ (please switch to the ropsten testnet to use it, you will need some ropsten test ether, you can get some here: https://faucet.ropsten.be/ )
- My recorded video using the DApp: https://www.loom.com/share/44392a86149049e198bfce171e85d9ff
- My Ethereum address: 0xB34c4D25f25cC296ae4c094BaB9d49e9cce0746A

## How to try the app on your local machine using truffle and Ganache:

1. Clone the repository

2. Install truffle with (make sure you have NodeJS v8.9.4 or later)

```
npm install -g truffle
```

3. Install Ganache GUI https://trufflesuite.com/ganache/ or CLI via

```
npm install -g ganache-cli
```

4. Start Ganache and make sure, you have the right "host" declared in your "truffle.config" file

5. Run

```
npm install
```

## Getting the app ready:

1. To compile and migrate the contracts, run

```
truffle compile
truffle migrate
```

2. Then start die app via

```
npm run dev
```

## Running unit tests:

```
truffle tests
```
