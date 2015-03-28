Schools = new Mongo.Collection('schools');

if (Meteor.isClient) {

  // Meteor.call('getSchoolData', function (error, result) {
  //   if (error) {
  //     console.log("error", error);
  //   };

  //   console.log("result in getSchoolData", result);

  // });

  Template.dataTable.helpers({
    schools: function () {
      return Schools.find().fetch();
    }
  });

}

if (Meteor.isServer) {
  // Meteor.startup(function () {
  //   var cheerio = Meteor.npmRequire('cheerio');

  //   Meteor.methods({
  //     getSchoolData: function () {
  //       result = Meteor.http.get("http://www.fin.gov.on.ca/en/publications/salarydisclosure/pssd/orgs-tbs.php?pageNum_tbs=0&organization=schoolboards&year=2014");
  //       $ = cheerio.load(result.content);

  //       var headers = $('#right_column > div:nth-child(2) > table > thead > tr:nth-child(3) th strong')
  //           .clone() //clone the element
  //           .children() //select all the children
  //           .remove() //remove all the children
  //           .end() //again go back to selected element
  //           .text()
  //           .split(" / ");

  //       var data = $('#right_column > div:nth-child(2) > table > tbody > tr')
  //               .map(function (i) {
  //                   var row = {};
  //                   $(this).find('td').each(function (i) {
  //                       var rowName = headers[i];
  //                       row[rowName] = $(this).text();
  //                   });
  //                   // Schools.insert(row);
  //                   return row;
  //               }).get();
            
            
  //           return data;                    
        
  //     },

  //   })

  // });
}
