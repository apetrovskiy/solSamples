// (c) 2020 Narayan Prusty
contract Proof
{
    struct FileDetails
    {
        uint timestamp;
        string owner;
    }
    
    mapping (string => FileDetails) files;
    
    event logFileAddedStatus(bool status, uint timestamp,string owner,string fileHash);
    
    // function for saving the file owner and the timestamp block
    function set(string memory owner,string memory fileHash) public
    {
        // checking the default value
        if (files[fileHash].timestamp==0)
        {
            files[fileHash]=FileDetails(block.timestamp,owner);
            
            // an event the program will know that file existence and ownership preserved
            emit logFileAddedStatus(true,block.timestamp,owner,fileHash);
        }
        else
        {
            // data was saved earlier
            emit logFileAddedStatus(false,block.timestamp,owner,fileHash);
        }
    }
    
    // getting file information
    function get(string memory fileHash)public view returns (uint timestamp,string memory owner)
    {
        return (files[fileHash].timestamp, files[fileHash].owner);
    }
}