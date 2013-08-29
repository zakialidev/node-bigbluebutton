var manager = require('../lib/manager')
  , assert = require('assert');


describe("Manager",function () {

  var url = "http://192.168.1.2/bigbluebutton";
  var salt = "e4e99cb3b2989d597f2549db2e41ea9e";


  describe("add",function () {

    it("should add server",function () {
      manager.add({url: url, salt:salt});
      assert.equal( true, typeof manager._servers[url] !== 'undefined');
    });

    it("shouldn't add a server with the same url",function () {
      assert.equal( false, manager.add({url: url, salt:salt}));
    });

  });


  describe("get",function () {
    
    it("should return a valid server",function (done) {
      data = {
        action: "join",
        params: {
          fullName: "Test Meeting",
          meetingID: "exampleaew",
          password: "WWoon2G8"
        }
      };

      manager.get(url).link(data,function(er,link) {
        if(er) done(er);
        assert.equal(link,"http://192.168.1.2/bigbluebutton/api/join?fullName=Test+Meeting&meetingID=exampleaew&password=WWoon2G8&checksum=b62bd20653930a9607050871891ac37017f1a156");
        done();
      });
    });
    
  });




});