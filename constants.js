function getRndInteger(min, max) {
  
  return Math.floor(Math.random() * (max - min)) + min;
}

function userDetails(noOfItems) {
  // var ObjectID = require('mongodb').ObjectID;




  
  let firstNameDir = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter" ]
  let lastNameDir = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler" ]
  let domainDir = [
    'fotki.com',              'senate.gov',        'feedburner.com',
    'deliciousdays.com',      'rakuten.co.jp',     'mtv.com',
    'facebook.com',           'angelfire.com',     'angelfire.com',
    'zimbio.com',             'freewebs.com',      'prlog.org',
    'yale.edu',               'jalbum.net',        'cafepress.com',
    'lycos.com',              'ed.gov',            'state.tx.us',
    'sfgate.com',             'xinhuanet.com',     'google.com.hk',
    'simplemachines.org',     'umn.edu',           'google.com.br',
    'huffingtonpost.com',     'moonfruit.com',     'technorati.com',
    'rediff.com',             'csmonitor.com',     'myspace.com',
    'dmoz.org',               'facebook.com',      'creativecommons.org',
    'cornell.edu',            'comsenz.com',       'alibaba.com',
    'cdbaby.com',             'ucoz.ru',           'scribd.com',
    'yandex.ru',              'dropbox.com',       'bbc.co.uk',
    'jalbum.net',             'issuu.com',         'answers.com',
    'pen.io',                 'rediff.com',        'opera.com',
    '123-reg.co.uk',          'netlog.com',        'simplemachines.org',
    'nationalgeographic.com', 'dion.ne.jp',        'slideshare.net',
    'jigsy.com',              'goo.ne.jp',         'vkontakte.ru',
    'apple.com',              'purevolume.com',    'facebook.com',
    'unc.edu',                'mozilla.org',       'walmart.com',
    'github.io',              'google.de',         'icio.us',
    'typepad.com',            'behance.net',       'mayoclinic.com',
    'businessinsider.com',    'chron.com',         'google.de',
    'webeden.co.uk',          'go.com',            'csmonitor.com',
    'senate.gov',             'cocolog-nifty.com', 'fc2.com',
    'jiathis.com',            'ovh.net',           'last.fm',
    'exblog.jp',              'moonfruit.com',     'typepad.com',
    'woothemes.com',          'fda.gov',           'sciencedaily.com',
    'elpais.com',             'themeforest.net',   'ibm.com',
    'cnbc.com',               'shinystat.com',     'github.io',
    'biblegateway.com',       'msu.edu',           'tmall.com',
    'odnoklassniki.ru',       'oakley.com',        'techcrunch.com',
    'newsvine.com'
  ]


  let resData = [];
  const timestamp = Math.floor(new Date().getTime() / 1000).toString(16);
  for(let i=0;i<noOfItems;i++){
    let r1 = getRndInteger(0,33)
    let r2 = getRndInteger(0,150)
    let r3 = getRndInteger(0,100)
    let r4 = getRndInteger(0,4)
    let r6 = getRndInteger(3000,90000)
    let first_name = firstNameDir[r1]   // o(1)
    let last_name = lastNameDir[r2]   // o(1)
    let email = first_name+last_name.substring(0,r4)+r6+'@'+domainDir[r3]    // o(n)
    
    const objectId = timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
        return Math.floor(Math.random() * 16).toString(16);
    }).toLowerCase();

    resData.push({
      id: objectId,
      first_name: first_name,
      last_name: last_name,
      email: email,
      age:r3,
      gender:"male"
    })
  }
  return resData;
}

module.exports = {
  userDetails
}
