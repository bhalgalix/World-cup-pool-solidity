pragma solidity^0.4.20;

contract PoolMain2 {
	address[100] players;
	mapping(address => uint) groupResults;
	mapping(address => uint) playOffResults;
	mapping(address => uint8) playerPoints;
	uint wcGroupResults;
	uint wcPlayOffresults;
	uint8 counter = 0;
	//uint pg = 11001100110011001100110011001101 + 21212121212121212121212121212122;
	uint rrr = 111315171921232527293133353739411115192327313541;
	
	function test1() public view returns(uint) {
	    uint res = rrr + rrr;
	    return(res);
	}
	function test2() public pure returns(uint) {
		uint a = 10;
		return(a);
	}
    function abc(uint a, uint b, uint c, uint d, uint e, uint f) public pure returns(uint) { 
		uint result = (a*(10**65)+b*(10**52)+c*(10**39)+d*(10**26)+e*(10**13)+f);
		return(result);
	}


    function getResults(uint _wcGroupResults, uint a, uint b, uint c, uint d, uint e, uint f) public {
        wcGroupResults = _wcGroupResults;
        wcPlayOffresults = abc(a,b,c,d,e,f);
    }
	function getBet(uint _groupResults, uint a, uint b, uint c, uint d, uint e, uint f) public {
		players[counter] = msg.sender;
		groupResults[msg.sender] = _groupResults;
		playOffResults[msg.sender] = abc(a,b,c,d,e,f);
		counter = counter + 1;
	}

	function compareBetGroup(uint8 _playerNumber)public {
		//for(uint8 i = 0; i<=counter; i++) {
			uint8 internCounter = 0;
			uint pg = groupResults[players[_playerNumber]] + wcGroupResults;
			for(uint j=1; j<33; j++) {
				uint temp = (pg%(10**j)-pg%(10**(j-1)))/(10**(j-1));
				if(temp/3 == 1) {
				    internCounter++;
				}
			}
			playerPoints[_playerNumber] = internCounter;
		//}
	}
	function compareBetAllElse(uint8 _playerNumber) public returns(uint){
		uint wp = wcPlayOffresults;
		//uint pp = playOffResults[_playerNumber];
		uint pp = 11131517192123252729313335373941111519232731354111192735112711193519;
		//uint wp = 11131517192123252729313335373941111519232731354111192735112711193519;
		uint8 internCounter = 0;
		uint8 multiplier = 2;
		for(uint j=0; j<34; j++) {
			uint p = wp%(100**j) - wp%(100**(j-1));
            uint q = pp%(100**j) - pp%(100**(j-1));
            if(p == q) {
				internCounter = internCounter + (1*multiplier);
			}
		}
		playerPoints[_playerNumber] = playerPoints[_playerNumber] + internCounter;
		uint aa = internCounter;
		return(aa);
	}
	function getPoppy(uint8 _playerNumber)public view returns(uint){
	    uint8 poppy = playerPoints[_playerNumber];
	    return(poppy);
	}

}