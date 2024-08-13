// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ServiceContract {
    struct Service {
        string title;
        string description;
        string photoURL;
        string serviceLocation;
        string baseServiceDetails;
        string[] upcharges;
        uint256[] upchargePrices;
        string providerName;
        uint validityTime;
        uint servicePrice;
        bool isAuthentic;
    }

    struct Order {
        address buyer;
        string buyerName;
        string serviceLocation;
        uint quantity;
        string customInstructions;
        string[] selectedUpcharges;
        uint totalPrice;
        bool isCompleted;
        string receiptImageURL;
    }

    struct ContractInfo {
        Service service;
        address provider;
        uint servicePrice;
        uint contractTimestamp;
        address contractAddress;
    }

    Service public service;
    address public provider;
    mapping(address => Order) public orders;
    address[] public customers;
    uint public totalOrders;
    uint public contractTimestamp;

    event ServiceListed(address provider, Service service);
    event OrderPlaced(address customer, Order order);
    event OrderCompleted(address customer, Order order);

    modifier onlyProvider() {
        require(msg.sender == provider, "Only service provider can perform this action");
        _;
    }

    modifier validOrder() {
        require(orders[msg.sender].buyer == address(0), "Order already placed");
        _;
    }

    constructor(
        string memory _title,
        string memory _description,
        string memory _photoURL,
        string memory _serviceLocation,
        string memory _baseServiceDetails,
        string[] memory _upcharges,
        uint256[] memory _upchargePrices,
        string memory _providerName,
        uint _validityTime,
        uint _servicePrice,
        uint _contractTimestamp
    ) {
        require(_upcharges.length == _upchargePrices.length, "Upcharges and prices must be of the same length");

        provider = msg.sender;
        service = Service({
            title: _title,
            description: _description,
            photoURL: _photoURL,
            serviceLocation: _serviceLocation,
            baseServiceDetails: _baseServiceDetails,
            upcharges: _upcharges,
            upchargePrices: _upchargePrices,
            providerName: _providerName,
            validityTime: _validityTime,
            servicePrice: _servicePrice,
            isAuthentic: false
        });
        contractTimestamp = _contractTimestamp;

        emit ServiceListed(provider, service);
    }

    function placeOrder(
        string memory _buyerName,
        string memory _serviceLocation,
        uint _quantity,
        string memory _customInstructions,
        string[] memory _selectedUpcharges
    ) public payable validOrder {
        require(_quantity > 0, "Invalid quantity");

        uint totalPrice = calculateTotalPrice(_quantity, _selectedUpcharges);
        require(msg.value >= totalPrice, "Insufficient payment");

        orders[msg.sender] = Order({
            buyer: msg.sender,
            buyerName: _buyerName,
            serviceLocation: _serviceLocation,
            quantity: _quantity,
            customInstructions: _customInstructions,
            selectedUpcharges: _selectedUpcharges,
            totalPrice: totalPrice,
            isCompleted: false,
            receiptImageURL: ""
        });

        customers.push(msg.sender);
        totalOrders += 1;

        emit OrderPlaced(msg.sender, orders[msg.sender]);
    }

    function completeOrder(
        address _customer,
        string memory _receiptImageURL
    ) public onlyProvider {
        require(orders[_customer].buyer != address(0), "Order does not exist");
        orders[_customer].isCompleted = true;
        orders[_customer].receiptImageURL = _receiptImageURL;

        emit OrderCompleted(_customer, orders[_customer]);
    }

    function calculateTotalPrice(
        uint _quantity,
        string[] memory _selectedUpcharges
    ) internal view returns (uint) {
        uint totalPrice = _quantity * service.servicePrice;

        for (uint i = 0; i < _selectedUpcharges.length; i++) {
            for (uint j = 0; j < service.upcharges.length; j++) {
                if (keccak256(abi.encodePacked(_selectedUpcharges[i])) == keccak256(abi.encodePacked(service.upcharges[j]))) {
                    totalPrice += service.upchargePrices[j];
                }
            }
        }
        return totalPrice;
    }

    function getOrder(address _customer) public view returns (Order memory) {
        return orders[_customer];
    }

    function withdraw() public onlyProvider {
        require(totalOrders > 0, "No orders placed");
        bool allOrdersCompleted = true;

        for (uint i = 0; i < customers.length; i++) {
            if (!orders[customers[i]].isCompleted) {
                allOrdersCompleted = false;
                break;
            }
        }

        require(allOrdersCompleted, "All orders must be completed before withdrawal");
        payable(provider).transfer(address(this).balance);
    }

    function getContractInfo() public view returns (ContractInfo memory) {
        return ContractInfo({
            service: service,
            provider: provider,
            servicePrice: service.servicePrice,
            contractTimestamp: contractTimestamp,
            contractAddress: address(this)
        });
    }
}
