// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAO {
    struct Proposal {
        uint id;
        string description;
        uint voteCount;
        bool funded;
    }

    address public owner;
    mapping(address => bool) public members;
    Proposal[] public proposals;
    mapping(uint => mapping(address => bool)) public votes;

    uint public proposalCount;

    event ProposalCreated(uint id, string description);
    event Voted(uint proposalId, address voter);
    event Funded(uint proposalId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier onlyMember() {
        require(members[msg.sender], "Not a member");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addMember(address _member) public onlyOwner {
        members[_member] = true;
    }

    function createProposal(string memory _description) public onlyMember {
        proposalCount++;
        proposals.push(Proposal(proposalCount, _description, 0, false));
        emit ProposalCreated(proposalCount, _description);
    }

    function vote(uint _proposalId) public onlyMember {
        require(_proposalId > 0 && _proposalId <= proposalCount, "Invalid proposal ID");
        require(!votes[_proposalId][msg.sender], "Already voted");

        votes[_proposalId][msg.sender] = true;
        proposals[_proposalId - 1].voteCount++;
        emit Voted(_proposalId, msg.sender);
    }

    function fundProposal(uint _proposalId) public onlyOwner {
        require(_proposalId > 0 && _proposalId <= proposalCount, "Invalid proposal ID");
        require(!proposals[_proposalId - 1].funded, "Already funded");

        proposals[_proposalId - 1].funded = true;
        emit Funded(_proposalId);
    }

    function getProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
}
