pragma solidity ^0.5.0;

import "./TradeableERC721Token.sol";
// import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract Creature is TradeableERC721Token {
  constructor(address _proxyRegistryAddress) TradeableERC721Token("Creature", "CTV", _proxyRegistryAddress) public {  }

  function baseTokenURI() public view returns (string memory) {
    return "https://opensea-creatures-api.herokuapp.com/api/creature/";
  }
 // Extra Added This function to integrate ID With URI man:
      /**
   * @dev Returns an URI for a given token ID
   */
   

   function tokenURI(uint256 _tokenId) public view returns (string memory) {
    return  Strings.strConcat(
           baseTokenURI(),
        Strings.uint2str(_tokenId)
    );
  }
}