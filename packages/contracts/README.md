
# Introduction

Welcome to the contract standard section of the code stack. This document provides a general overview of the architecture for the two smart contracts: the Service Contract and the Commerce Contract. These contracts are designed to build legally binding agreements for physical world tasks and commerce, with transactions recorded immutably on public ledgers.

The primary goal of these contracts is to enable anyone to build businesses within the Web3 ecosystem, creating an immutable portfolio of verified experiences and transactions.

I have primarily developed the Service Contract and subsequently deployed and modified the exploration page to accommodate this unique form of input. Additionally, I have enhanced the create listing section to handle these specific requirements.

## Commerce Contract
The Commerce Contract is designed to facilitate the sale and purchase of physical goods. It allows sellers to list products with detailed information, such as title, description, location, and shipping method. Buyers can then purchase these products, with all transactions securely recorded on the blockchain.

Key features of the Commerce Contract include:

1. Product Listing: Sellers can create detailed product listings, including price, quantity, and other relevant details.
2. Purchase Process: Buyers can purchase products by sending the appropriate amount of Ether. The contract ensures that the correct amount is sent and that the quantity of the product is available.
3. Delivery Confirmation: Sellers can confirm delivery, after which the funds are transferred to the seller's wallet.
4. Custom Instructions and Delivery Addresses: Buyers can set custom instructions and delivery addresses, which are securely stored and associated with their purchases.

## Service Contract

The Service Contract is tailored for listing and purchasing services rather than physical goods. This contract handles service-specific details, such as location, completion requirements, and terms of service.

Key features of the Service Contract include:
1. Service Listing: Service providers can list their services, specifying details such as location, price, and completion requirements.
2. Service Purchase: Clients can purchase services by sending Ether, with the contract ensuring the availability of the service and the correct payment.
3. Service Completion: Providers can confirm the completion of a service, triggering the release of funds to their wallet.
4. Custom Requirements and Service Locations: Clients can set custom requirements and service locations, which are securely stored and linked to their purchases.
