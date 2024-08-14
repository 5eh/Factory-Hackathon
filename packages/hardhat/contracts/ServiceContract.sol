// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ServiceContract {
	address private owner;
	address private deployer;
	string[] public listingsArray;

	mapping(string => ServiceData) public services;
	mapping(string => address) private serviceBuyers;
	mapping(address => string) private serviceLocations;
	mapping(address => string) private customRequirements;

	event ServiceListed(
		string listingID,
		address owner,
		uint price,
		uint32 quantity
	);
	event ServicePurchased(string listingID, address buyer, uint32 quantity);
	event ServiceCompleted(string listingID, address owner);
	event ServiceLocationUpdated(address user, string serviceLocation);
	event CustomRequirementsUpdated(address user, string requirements);
	event ServiceDataFetched(string listingID, ServiceData service);

	struct ServiceData {
		string title;
		string description;
		string location;
		string completionRequirements;
		string termsOfService;
		string image;
		uint price;
		uint32 timeValidity;
		uint32 quantity;
		address payable creatorWallet;
		bool isCompleted;
	}

	constructor() {
		owner = msg.sender;
		deployer = msg.sender;
	}

	modifier onlyOwnerOrDeployer() {
		require(
			msg.sender == owner || msg.sender == deployer,
			"Not authorized"
		);
		_;
	}

	function createService(
		string memory _title,
		string memory _description,
		string memory _location,
		string memory _completionRequirements,
		string memory _termsOfService,
		string memory _image,
		uint _price,
		uint32 _timeValidity,
		uint32 _quantity,
		string memory _listingID
	) public {
		require(
			services[_listingID].creatorWallet == address(0),
			"Listing ID already exists"
		);

		services[_listingID] = ServiceData({
			title: _title,
			description: _description,
			location: _location,
			completionRequirements: _completionRequirements,
			termsOfService: _termsOfService,
			image: _image,
			price: _price,
			timeValidity: _timeValidity,
			quantity: _quantity,
			creatorWallet: payable(msg.sender),
			isCompleted: false
		});
		listingsArray.push(_listingID);
		emit ServiceListed(_listingID, msg.sender, _price, _quantity);
		emit ServiceDataFetched(_listingID, services[_listingID]);
	}

	function purchaseService(
		string memory _listingID,
		uint32 _quantity
	) public payable {
		ServiceData storage service = services[_listingID];
		require(_quantity <= service.quantity, "Not enough services available");
		require(
			msg.value == service.price * _quantity,
			"Incorrect amount of Ether sent"
		);
		service.quantity -= _quantity;
		serviceBuyers[_listingID] = msg.sender;
		emit ServicePurchased(_listingID, msg.sender, _quantity);
	}

	function confirmCompletion(
		string memory _listingID,
		address clientWallet
	) public {
		require(
			msg.sender == services[_listingID].creatorWallet,
			"Only the service provider can confirm completion"
		);
		require(!services[_listingID].isCompleted, "Service already completed");

		address buyer = serviceBuyers[_listingID];
		require(
			buyer == clientWallet,
			"Client wallet address does not match the buyer"
		);
		require(buyer != address(0), "No buyer found for this listing");

		string memory serviceLocation = serviceLocations[buyer];
		require(
			bytes(serviceLocation).length > 0,
			"Client has not set a service location"
		);

		services[_listingID].isCompleted = true;
		services[_listingID].creatorWallet.transfer(address(this).balance);

		emit ServiceCompleted(_listingID, msg.sender);
	}

	function setServiceLocation(string memory _serviceLocation) public {
		serviceLocations[msg.sender] = _serviceLocation;
		emit ServiceLocationUpdated(msg.sender, _serviceLocation);
	}

	function getServiceLocation(
		address user
	) public view returns (string memory) {
		require(
			bytes(serviceLocations[user]).length > 0,
			"No service location set by this user. Are you sure they have purchased?"
		);
		return serviceLocations[user];
	}

	function setCustomRequirements(string memory _requirements) public {
		customRequirements[msg.sender] = _requirements;
		emit CustomRequirementsUpdated(msg.sender, _requirements);
	}

	function getAllListings() public view returns (string[] memory) {
		return listingsArray;
	}

	function getCustomRequirements(
		address user
	) public view returns (string memory) {
		require(
			bytes(customRequirements[user]).length > 0,
			"No custom requirements set for this user. Are you sure they have purchased?"
		);
		return customRequirements[user];
	}

	function getServiceData(
		string memory listingID
	) public view returns (ServiceData memory) {
		require(
			services[listingID].creatorWallet != address(0),
			"Service does not exist"
		);
		return services[listingID];
	}

	function getAllServiceData()
		public
		view
		returns (string[] memory, ServiceData[] memory)
	{
		uint256 length = listingsArray.length;
		ServiceData[] memory allServices = new ServiceData[](length);

		for (uint256 i = 0; i < length; i++) {
			allServices[i] = services[listingsArray[i]];
		}

		return (listingsArray, allServices);
	}
}
