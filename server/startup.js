Enrollments._ensureIndex( {
  fullName: "text"
} );


Meteor.startup( function () {
  process.env.MAIL_URL = "smtp://postmaster%40app.pais.com.ph:fb8e21410cd72582bf6656f6c5712346@smtp.mailgun.org:587";
  console.log( "starting..." );
  // Create random data
  // if ( Companies.find().count() === 0 ) {
  //   Companies.insert( {
  //     "_id": "RE4d92pDug66Mfbzr",
  //     "name": "KMBI",
  //     "branchId": [
  //       "mBRy2J8qAQRXeizmZ",
  //       "qzE66TeEWXjHdXx6y",
  //       "f6D6FJWa2KGZ8rNFc",
  //       "C5uqZKRz2wuG3MzcE",
  //       "LytDnsbXK2d4cgYPX"
  //     ],
  //     "productId": [
  //       "knKTWBZ9g7XJ3WiZK"
  //     ],
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Companies.insert( {
  //     "_id": "bHBunxXdBEshv5vkB",
  //     "name": "ASKI",
  //     "branchId": [
  //       "mBRy2J8qAQRXeizmZ",
  //       "qzE66TeEWXjHdXx6y",
  //       "f6D6FJWa2KGZ8rNFc",
  //       "C5uqZKRz2wuG3MzcE",
  //       "LytDnsbXK2d4cgYPX"
  //     ],
  //     "productId": [
  //       "ma9ab4kQ9Z3kmab2G"
  //     ],
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Companies.insert( {
  //     "_id": "xXe6rrHdkGartYPzW",
  //     "name": "PAIS",
  //     "branchId": [
  //       "mBRy2J8qAQRXeizmZ",
  //       "LytDnsbXK2d4cgYPX"
  //     ],
  //     "productId": [
  //       "Ptb5Fma75Yp7Tdmzc"
  //     ],
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   }, {
  //     "_id": "8s8CGHT7uNnmvX5fq",
  //     "name": "FirstLife Insurance",
  //     "branchId": [
  //       "mBRy2J8qAQRXeizmZ",
  //       "qzE66TeEWXjHdXx6y",
  //       "f6D6FJWa2KGZ8rNFc",
  //       "C5uqZKRz2wuG3MzcE",
  //       "LytDnsbXK2d4cgYPX"
  //     ],
  //     "productId": [
  //       "knKTWBZ9g7XJ3WiZK"
  //     ],
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Companies.insert( {
  //     "_id": "CEMRkRxrn49drsZ9G",
  //     "name": "Eastwest Insurance",
  //     "branchId": [
  //       "mBRy2J8qAQRXeizmZ",
  //       "qzE66TeEWXjHdXx6y",
  //       "f6D6FJWa2KGZ8rNFc",
  //       "C5uqZKRz2wuG3MzcE",
  //       "LytDnsbXK2d4cgYPX"
  //     ],
  //     "productId": [
  //       "ma9ab4kQ9Z3kmab2G"
  //     ],
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   }, {
  //     "_id": "fyecWJbj2gS5YDGAK",
  //     "name": "Unicorn Systems",
  //     "branchId": [
  //       "LytDnsbXK2d4cgYPX"
  //     ],
  //     "productId": [
  //       "Ptb5Fma75Yp7Tdmzc"
  //     ],
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  // }
  // if ( Branches.find().count() === 0 ) {
  //   Branches.insert( {
  //     "_id": "mBRy2J8qAQRXeizmZ",
  //     "branch": "Manila",
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Branches.insert( {
  //     "_id": "qzE66TeEWXjHdXx6y",
  //     "branch": "La Union",
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Branches.insert( {
  //     "_id": "f6D6FJWa2KGZ8rNFc",
  //     "branch": "Baguio",
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Branches.insert( {
  //     "_id": "C5uqZKRz2wuG3MzcE",
  //     "branch": "Kamias",
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Branches.insert( {
  //     "_id": "LytDnsbXK2d4cgYPX",
  //     "branch": "HO",
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Branches.insert( {
  //     "_id": "6GDnamAGELDhxW2AN",
  //     "branch": "Zamboanga",
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  // }
  // if ( Meteor.users.find().count() === 0 ) {
  //   var adminId = Accounts.createUser( {
  //     profile: {
  //       name: 'PAIS Admin'
  //     },
  //     username: "admin",
  //     email: "admin@admin.com",
  //     password: "12345678"
  //   } );
  //   var marvin = Meteor.users.findOne( adminId );
  //   Meteor.users.insert( {
  //     "_id": "8uQnm7dvstZTxdgJN",
  //     "createdAt": "2016-01-03",
  //     "services": {
  //       "password": {
  //         "bcrypt": "$2a$10$qgYCNxiYLWDy8J5fN9xlbulAooJDDYi5nONF5ZDfoj4l9VKhlRdjO"
  //       },
  //       "resume": {
  //         "loginTokens": []
  //       }
  //     },
  //     "emails": [ {
  //       "address": "pais@admin.com",
  //       "verified": false
  //     } ],
  //     "profile": {
  //       "name": "PAIS Admin",
  //       "company": "xXe6rrHdkGartYPzW",
  //       "branch": "LytDnsbXK2d4cgYPX",
  //       "products": [
  //         "Ptb5Fma75Yp7Tdmzc"
  //       ],
  //       "insurer": [
  //         "xXe6rrHdkGartYPzW"
  //       ],
  //       "picture": {
  //         "fileId": "SbGKSLzfWLbrZjxZp",
  //         "url": "/gridfs/data/id/44eace76dc209eff2c58e0ad"
  //       }
  //     },
  //     "roles": [
  //       "admin"
  //     ],
  //     "status": {
  //       "online": false,
  //       "lastLogin": {
  //         "date": "2016-01-23",
  //         "ipAddr": "127.0.0.1",
  //         "userAgent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:43.0) Gecko/20100101 Firefox/43.0"
  //       }
  //     }
  //
  //   } );
  //   Meteor.users.insert( {
  //     "_id": "k8WKKx8KFusc8Z4sz",
  //     "createdAt": "2016-01-03",
  //     "services": {
  //       "password": {
  //         "bcrypt": "$2a$10$dKM9RtaIIiAAJvMp2lv9eusxSNlBbBUZtZ7qwWxapS/9xIyFZxEhy"
  //       }
  //     },
  //     "emails": [ {
  //       "address": "baguio@kmbi.com",
  //       "verified": false
  //     } ],
  //     "profile": {
  //       "name": "KMBI Baguio",
  //       "company": "RE4d92pDug66Mfbzr",
  //       "branch": "f6D6FJWa2KGZ8rNFc",
  //       "products": [
  //         "cjpy2L9E57NogeFZN",
  //         "rGWfZJ2eGJBZ9WBuq",
  //         "kaKw4hQ3WTtso572F",
  //         "e7S2ABDnvJmotqdcy",
  //         "Cra2HHgNzTHWyaF6n"
  //       ],
  //       "insurer": [
  //         "8s8CGHT7uNnmvX5fq"
  //       ]
  //     },
  //     "roles": [
  //       "Branch"
  //     ],
  //     "status": {
  //       "online": false
  //     }
  //   } );
  //   Meteor.users.insert( {
  //     "_id": "Q5MzbjgSyLPwqsFtS",
  //     "createdAt": "2016-01-03",
  //     "services": {
  //       "password": {
  //         "bcrypt": "$2a$10$tNaHq99NWCeQ3drDPZx9LOVjAqK3a6ITZEfwy1uhOaoKF6FwWtqHi"
  //       },
  //       "resume": {
  //         "loginTokens": []
  //       }
  //     },
  //     "emails": [ {
  //       "address": "launion@aski.com",
  //       "verified": false
  //     } ],
  //     "profile": {
  //       "name": "ASKI La Union",
  //       "company": "bHBunxXdBEshv5vkB",
  //       "branch": "qzE66TeEWXjHdXx6y",
  //       "products": [
  //         "ma9ab4kQ9Z3kmab2G"
  //       ],
  //       "insurer": [
  //         "CEMRkRxrn49drsZ9G"
  //       ]
  //     },
  //     "roles": [
  //       "Branch"
  //     ],
  //     "status": {
  //       "online": false,
  //       "lastLogin": {
  //         "date": "2016-02-01",
  //         "ipAddr": "127.0.0.1",
  //         "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"
  //       }
  //     }
  //   } );
  //   Meteor.users.insert( {
  //     "_id": "9qS7Rs2xPM6Rvfj7q",
  //     "createdAt": "2016-01-03",
  //     "services": {
  //       "password": {
  //         "bcrypt": "$2a$10$gWrI954yEGmWbbxBtIto1.4sjrI6kn0vNToHOYOmYbcwRMcYzn9/K"
  //       },
  //       "resume": {
  //         "loginTokens": []
  //       }
  //     },
  //     "emails": [ {
  //       "address": "hq@aski.com",
  //       "verified": false
  //     } ],
  //     "profile": {
  //       "name": "ASKI HQ",
  //       "company": "bHBunxXdBEshv5vkB",
  //       "branch": "LytDnsbXK2d4cgYPX",
  //       "products": [
  //         "cjpy2L9E57NogeFZN",
  //         "rGWfZJ2eGJBZ9WBuq",
  //         "kaKw4hQ3WTtso572F",
  //         "e7S2ABDnvJmotqdcy",
  //         "Cra2HHgNzTHWyaF6n"
  //       ],
  //       "insurer": [
  //         "CEMRkRxrn49drsZ9G"
  //       ]
  //     },
  //     "roles": [
  //       "HQ"
  //     ],
  //     "status": {
  //       "online": false,
  //       "lastLogin": {
  //         "date": "2016-01-31",
  //         "ipAddr": "127.0.0.1",
  //         "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"
  //       }
  //     }
  //   } );
  //   Meteor.users.insert( {
  //     "_id": "Eo9RKd4M7dBs2JHrp",
  //     "createdAt": "2016-01-03",
  //     "services": {
  //       "password": {
  //         "bcrypt": "$2a$10$oq/EafpVl.HG37FqINZHEOVkRV0jTS6xV9/42GX59MJW5Js/nwAg."
  //       },
  //       "resume": {
  //         "loginTokens": []
  //       }
  //     },
  //     "emails": [ {
  //       "address": "firstlife@insurer.com",
  //       "verified": false
  //     } ],
  //     "profile": {
  //       "name": "FirstLife Insurance",
  //       "company": "8s8CGHT7uNnmvX5fq",
  //       "branch": "LytDnsbXK2d4cgYPX",
  //       "products": [
  //         "cjpy2L9E57NogeFZN",
  //         "rGWfZJ2eGJBZ9WBuq",
  //         "kaKw4hQ3WTtso572F",
  //         "e7S2ABDnvJmotqdcy",
  //         "Cra2HHgNzTHWyaF6n"
  //       ],
  //       "insurer": [
  //         "8s8CGHT7uNnmvX5fq"
  //       ]
  //     },
  //     "roles": [
  //       "insurer"
  //     ],
  //     "status": {
  //       "online": false,
  //       "lastLogin": {
  //         "date": "2016-02-23",
  //         "ipAddr": "127.0.0.1",
  //         "userAgent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:44.0) Gecko/20100101 Firefox/44.0"
  //       }
  //     }
  //   } );
  //   Meteor.users.insert( {
  //     "_id": "CF2Hw6LNL5oY7TWJ9",
  //     "createdAt": "2016-01-03",
  //     "services": {
  //       "password": {
  //         "bcrypt": "$2a$10$THG/vpvZCznJg5UdP38IUu67I54f7HXeB6hRa9hpejRTiVFj4BuDS"
  //       },
  //       "resume": {
  //         "loginTokens": []
  //       }
  //     },
  //     "emails": [ {
  //       "address": "eastwest@insurer.com",
  //       "verified": false
  //     } ],
  //     "profile": {
  //       "name": "EASWEST Insurance",
  //       "company": "CEMRkRxrn49drsZ9G",
  //       "branch": "LytDnsbXK2d4cgYPX",
  //       "products": [
  //         "ma9ab4kQ9Z3kmab2G"
  //       ],
  //       "insurer": [
  //         "CEMRkRxrn49drsZ9G"
  //       ]
  //     },
  //     "roles": [
  //       "insurer"
  //     ],
  //     "status": {
  //       "online": false,
  //       "lastLogin": {
  //         "date": "2016-02-23",
  //         "ipAddr": "127.0.0.1",
  //         "userAgent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:44.0) Gecko/20100101 Firefox/44.0"
  //       }
  //     }
  //   } );
  //   Meteor.users.insert( {
  //     "_id": "Eywb8SAc2jtMDreSr",
  //     "createdAt": "2016-01-03",
  //     "services": {
  //       "password": {
  //         "bcrypt": "$2a$10$.jceQEIW7XM7BnFBmvhBquLTICfKJ8aWy52ofZVaq.S2.oGNtkQPi"
  //       }
  //     },
  //     "username": "admin",
  //     "emails": [ {
  //       "address": "admin@admin.com",
  //       "verified": false
  //     } ],
  //     "profile": {
  //       "name": "Super Admin",
  //       "company": "fyecWJbj2gS5YDGAK",
  //       "branch": "mBRy2J8qAQRXeizmZ",
  //       "products": [
  //         "Ptb5Fma75Yp7Tdmzc"
  //       ],
  //       "insurer": [
  //         "xXe6rrHdkGartYPzW"
  //       ]
  //     },
  //     "roles": [
  //       "admin"
  //     ],
  //     "status": {
  //       "online": false,
  //       "lastLogin": {
  //         "date": "2016-03-12",
  //         "ipAddr": "127.0.0.1",
  //         "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36"
  //       }
  //     }
  //   } );
  //   Meteor.users.insert( {
  //     "_id": "zMxsbQKz6AxkY2aW9",
  //     "createdAt": "2016-01-03",
  //     "services": {
  //       "password": {
  //         "bcrypt": "$2a$10$OHfTyHbnLlsXjFDTRVQTXuKVNX/qfpQuuD2KSdw/DvmpArmPWfL1G"
  //       }
  //     },
  //     "emails": [ {
  //       "address": "hq@kmbi.com",
  //       "verified": true
  //     } ],
  //     "profile": {
  //       "name": "KMBI HQ",
  //       "company": "RE4d92pDug66Mfbzr",
  //       "branch": "LytDnsbXK2d4cgYPX",
  //       "products": [
  //         "cjpy2L9E57NogeFZN",
  //         "rGWfZJ2eGJBZ9WBuq",
  //         "kaKw4hQ3WTtso572F",
  //         "e7S2ABDnvJmotqdcy",
  //         "Cra2HHgNzTHWyaF6n"
  //       ],
  //       "insurer": [
  //         "bHBunxXdBEshv5vkB",
  //         "8s8CGHT7uNnmvX5fq"
  //       ]
  //     },
  //     "roles": [
  //       "HQ"
  //     ],
  //     "status": {
  //       "online": true,
  //       "lastLogin": {
  //         "date": "2016-03-12",
  //         "ipAddr": "127.0.0.1",
  //         "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36"
  //       },
  //       "idle": false
  //     }
  //   } );
  //   Meteor.users.insert( {
  //       "_id": "EKwLqF8zxeoQXG88H",
  //       "createdAt": "2016-01-03",
  //       "services": {
  //         "password": {
  //           "bcrypt": "$2a$10$Zrscf3CMpiMKnVSX5HOAVeNMLBhP27vzdYojP2emW.zWKFQAkLPW2"
  //         }
  //       },
  //       "emails": [ {
  //         "address": "manila@kmbi.com",
  //         "verified": false
  //       } ],
  //       "profile": {
  //         "name": "KMBI Manila",
  //         "company": "RE4d92pDug66Mfbzr",
  //         "branch": "mBRy2J8qAQRXeizmZ",
  //         "products": [
  //           "cjpy2L9E57NogeFZN",
  //           "rGWfZJ2eGJBZ9WBuq",
  //           "kaKw4hQ3WTtso572F",
  //           "e7S2ABDnvJmotqdcy",
  //           "Cra2HHgNzTHWyaF6n"
  //         ],
  //         "insurer": [
  //           "8s8CGHT7uNnmvX5fq"
  //         ]
  //       },
  //       "roles": [
  //         "Branch"
  //       ],
  //       "status": {
  //         "online": false,
  //         "lastLogin": {
  //           "date": "2016-01-04",
  //           "ipAddr": "127.0.0.1",
  //           "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"
  //         }
  //       }
  //     }
  //
  //   );
  //
  // }
  // if ( Products.find().count() === 0 ) {
  //   Products.insert( {
  //     "_id": "cjpy2L9E57NogeFZN",
  //     "name": "KMBI_MI_Sibling",
  //     "productOffering": "Dependent-Sibling",
  //     "productRange": 12,
  //     "netPremium": 60,
  //     "grossProfit": 30,
  //     "premium": 90,
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Products.insert( {
  //     "_id": "rGWfZJ2eGJBZ9WBuq",
  //     "name": "KMBI_MI_Spouse",
  //     "productOffering": "Dependent-Spouse",
  //     "productRange": 4,
  //     "netPremium": 50,
  //     "grossProfit": 50,
  //     "premium": 100,
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Products.insert( {
  //     "_id": "kaKw4hQ3WTtso572F",
  //     "name": "KMBI_MI_Principal",
  //     "productOffering": "Principal",
  //     "productRange": 12,
  //     "netPremium": 20,
  //     "grossProfit": 40,
  //     "premium": 60,
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Products.insert( {
  //     "_id": "e7S2ABDnvJmotqdcy",
  //     "name": "KMBI_MI_Parent",
  //     "productOffering": "Dependent-Parent",
  //     "productRange": 6,
  //     "netPremium": 50,
  //     "grossProfit": 20,
  //     "premium": 70,
  //     "createdBy": "Eywb8SAc2jtMDreSr"
  //   } );
  //   Products.insert( {
  //     "_id": "Cra2HHgNzTHWyaF6n",
  //     "name": "KMBI_MI_Children",
  //     "netPremium": 20,
  //     "grossProfit": 20.50,
  //     "premium": 40.50,
  //     "createdBy": "Eywb8SAc2jtMDreSr",
  //     "productOffering": "Dependent-Children",
  //     "productRange": 6
  //   } );
  // }
  // if ( Enrollments.find().count() === 0 ) {
  //   Enrollments.insert( {
  //     "_id": "wyrY7GCZbdnGoqFZF",
  //     "centerNumber": "MA-002",
  //     "fullName": "Hilda Coronel",
  //     "tin": "11-5616123",
  //     "birthDate": "1972-04-07",
  //     "ageOfEnrollee": 44,
  //     "gender": "FEMALE",
  //     "phone": "2133867080",
  //     "address": "New Manila",
  //     "city": "Quezon City",
  //     "beneficiaryOne": "Myself",
  //     "maritalStatus": "ANNULED",
  //     "children": "Two Children",
  //     "childrenName": "James Coronel",
  //     "childrenBirthdate": "1994-03-10",
  //     "children2Name": "Farie Coronel",
  //     "children2Birthdate": "2000-02-15",
  //     "parent": "One Parent",
  //     "parentName": "Jaime Coronel",
  //     "parentBirthdate": "1960-06-14",
  //     "productsAvailed": "One Product",
  //     "productName": "Cra2HHgNzTHWyaF6n",
  //     "productOffering": "Dependent-Children",
  //     "premium": 40.5000000000000000,
  //     "productRange": 12,
  //     "insuredName": "James Coronel",
  //     "effectivityDate": "2016-08-06",
  //     "loanCycle": 1,
  //     "createdAt": "2016-04-08",
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "LytDnsbXK2d4cgYPX",
  //     "insurer": [
  //       "8s8CGHT7uNnmvX5fq",
  //       "bHBunxXdBEshv5vkB"
  //     ],
  //     "createdBy": "zMxsbQKz6AxkY2aW9",
  //     "products": [
  //       "Cra2HHgNzTHWyaF6n"
  //     ],
  //     "premiums": 40.5000000000000000,
  //     "childrenAge": 22,
  //     "children2Age": 16,
  //     "parentAge": 56,
  //     "efffectiveDates": [],
  //     "beneficiaryOneRelationship": "Father",
  //     "maturityDate": "2017-08-06"
  //   } );
  //   Enrollments.insert( {
  //     "_id": "eEohPiv6wMqTapeyu",
  //     "centerNumber": "MA-001",
  //     "fullName": "Marvin Villanueva",
  //     "tin": "23-1131654",
  //     "birthDate": "1980-08-16",
  //     "ageOfEnrollee": 35,
  //     "gender": "MALE",
  //     "phone": "2133867080",
  //     "address": "1721-B Malabon St",
  //     "city": "Manila",
  //     "beneficiaryOne": "Myself",
  //     "maritalStatus": "MARRIED",
  //     "spouseName": "Vikki Poblete",
  //     "spouseBirthdate": "1971-11-23",
  //     "spouseAge": 44,
  //     "children": "One Child",
  //     "childrenName": "Amihan Villanueva",
  //     "childrenBirthdate": "2013-03-26",
  //     "childrenAge": 3,
  //     "parent": "One Parent",
  //     "parentName": "Misael Villanueva",
  //     "parentBirthdate": "1954-12-16",
  //     "parentAge": 61,
  //     "siblings": "One Sibling",
  //     "siblingName": "Macy Villanueva",
  //     "siblingBirthdate": "2000-12-27",
  //     "siblingAge": 15,
  //     "createdAt": "2016-03-31",
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "mBRy2J8qAQRXeizmZ",
  //     "insurer": [
  //       "8s8CGHT7uNnmvX5fq"
  //     ],
  //     "createdBy": "EKwLqF8zxeoQXG88H",
  //     "productsAvailed": "Five Products",
  //     "productName": "e7S2ABDnvJmotqdcy",
  //     "productOffering": "Dependent-Parent",
  //     "premium": 70,
  //     "insuredName": "Misael Villanueva",
  //     "effectivityDate": "2016-05-01",
  //     "loanCycle": 1,
  //     "productName1": "Cra2HHgNzTHWyaF6n",
  //     "productOffering1": "Dependent-Children",
  //     "premium1": 40.5000000000000000,
  //     "insuredName1": "Amihan Villanueva",
  //     "effectivityDate1": "2016-04-27",
  //     "loanCycle2": 1,
  //     "productRange1": 12,
  //     "productName2": "rGWfZJ2eGJBZ9WBuq",
  //     "productOffering2": "Dependent-Spouse",
  //     "premium2": 100,
  //     "productRange2": 4,
  //     "insuredName2": "Vikki Poblete",
  //     "effectivityDate2": "2016-04-20",
  //     "maturityDate2": "2016-08-20",
  //     "loanCycle3": 1,
  //     "productName3": "cjpy2L9E57NogeFZN",
  //     "productOffering3": "Dependent-Sibling",
  //     "premium3": 90,
  //     "productRange3": 12,
  //     "effectivityDate3": "2016-04-30",
  //     "maturityDate3": "2017-04-30",
  //     "loanCycle4": 1,
  //     "productRange": 6,
  //     "premiums": 370.5000000000000000,
  //     "loanCycle1": 1,
  //     "insuredName3": "Macy Villanueva",
  //     "productOffering4": "Dependent-Parent",
  //     "premium4": 70,
  //     "productRange4": 6,
  //     "insuredName4": "Misael Villanueva",
  //     "effectivityDate4": "2016-06-27",
  //     "maturityDate4": "2016-12-27",
  //     "efffectiveDates": [],
  //     "products": [
  //       "e7S2ABDnvJmotqdcy",
  //       "Cra2HHgNzTHWyaF6n",
  //       "rGWfZJ2eGJBZ9WBuq",
  //       "cjpy2L9E57NogeFZN"
  //     ],
  //     "maturityDate": "2016-11-01",
  //     "maturityDate1": "2017-04-27"
  //
  //   } );
  //   Enrollments.insert( {
  //     "_id": "jgh8jdR63x7Npobsr",
  //     "centerNumber": "MA-003",
  //     "fullName": "Joy Duran",
  //     "tin": "12-3131555",
  //     "birthDate": "1978-06-14",
  //     "ageOfEnrollee": 38,
  //     "gender": "FEMALE",
  //     "phone": "2133867080",
  //     "address": "153 South Vermont Avenue",
  //     "city": "Manila",
  //     "beneficiaryOne": "Myself",
  //     "maritalStatus": "MARRIED",
  //     "spouseName": "Conrado Duran",
  //     "spouseBirthdate": "1975-07-30",
  //     "spouseAge": 41,
  //     "children": "One Child",
  //     "childrenName": "Jay Duran",
  //     "childrenBirthdate": "1995-07-20",
  //     "childrenAge": 21,
  //     "parent": "One Parent",
  //     "parentName": "Jake Reyes",
  //     "parentBirthdate": "1961-07-27",
  //     "parentAge": 55,
  //     "siblings": "One Sibling",
  //     "siblingName": "Jobby Reyes",
  //     "siblingBirthdate": "1980-06-17",
  //     "siblingAge": 36,
  //     "productsAvailed": "Four Products",
  //     "productName": "rGWfZJ2eGJBZ9WBuq",
  //     "productOffering": "Dependent-Spouse",
  //     "premium": 100,
  //     "productRange": 4,
  //     "effectivityDate": "2016-11-24",
  //     "loanCycle": 1,
  //     "productName1": "e7S2ABDnvJmotqdcy",
  //     "productOffering1": "Dependent-Parent",
  //     "premium1": 70,
  //     "productRange1": 6,
  //     "effectivityDate1": "2016-05-07",
  //     "loanCycle2": 1,
  //     "productName2": "Cra2HHgNzTHWyaF6n",
  //     "productOffering2": "Dependent-Children",
  //     "premium2": 40.5000000000000000,
  //     "productRange2": 6,
  //     "effectivityDate2": "2016-04-20",
  //     "maturityDate2": "2016-10-20",
  //     "loanCycle3": 1,
  //     "createdAt": "2016-04-24",
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "mBRy2J8qAQRXeizmZ",
  //     "insurer": [
  //       "8s8CGHT7uNnmvX5fq"
  //     ],
  //     "products": [
  //       "rGWfZJ2eGJBZ9WBuq",
  //       "e7S2ABDnvJmotqdcy",
  //       "Cra2HHgNzTHWyaF6n",
  //       "kaKw4hQ3WTtso572F"
  //     ],
  //     "premiums": 270.5000000000000000,
  //     "createdBy": "EKwLqF8zxeoQXG88H",
  //     "productName3": "kaKw4hQ3WTtso572F",
  //     "productOffering3": "Principal",
  //     "premium3": 60,
  //     "productRange3": 12,
  //     "effectivityDate3": "2016-04-27",
  //     "maturityDate3": "2017-04-25",
  //     "loanCycle4": 1,
  //     "loanCycle1": 1,
  //     "insuredName": "Conrado Duran",
  //     "insuredName1": "Jake Reyes",
  //     "insuredName2": "Jay Duran",
  //     "insuredName3": "Joy Duran",
  //     "efffectiveDates": [],
  //     "maturityDate": "2017-03-24",
  //     "maturityDate1": "2016-11-07"
  //   } );
  //   Enrollments.insert( {
  //     "_id": "EEhW7te4GPa8XXgan",
  //     "centerNumber": "MA-0001",
  //     "fullName": "Vilma Santos",
  //     "tin": "12345679",
  //     "gender": "FEMALE",
  //     "phone": "(478) 737-3901",
  //     "address": "Street St",
  //     "maritalStatus": "MARRIED",
  //     "spouseName": "Ralph",
  //     "spouseBirthdate": "1985-11-16",
  //     "parentName": "Sharon Santos",
  //     "parentBirthdate": "1953-02-14",
  //     "siblingName": "Cynthia",
  //     "siblingBirthdate": "1957-12-23",
  //     "productOffering": "Dependent-Spouse",
  //     "premium": 100,
  //     "productRange": 4,
  //     "insuredName": "Ralph",
  //     "effectivityDate": "2016-06-27",
  //     "maturityDate": "2016-10-27",
  //     "loanCycle": 1,
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "LytDnsbXK2d4cgYPX",
  //     "insurer": [
  //       "8s8CGHT7uNnmvX5fq",
  //       "bHBunxXdBEshv5vkB"
  //     ],
  //     "products": [
  //       "rGWfZJ2eGJBZ9WBuq",
  //       "kaKw4hQ3WTtso572F"
  //     ],
  //     "premiums": 160,
  //     "createdAt": "2016-06-05",
  //     "createdBy": "zMxsbQKz6AxkY2aW9",
  //     "spouseAge": 30,
  //     "productsAvailed": "Two Products",
  //     "productName": "rGWfZJ2eGJBZ9WBuq",
  //     "productName1": "kaKw4hQ3WTtso572F",
  //     "productOffering1": "Principal",
  //     "premium1": 60,
  //     "productRange1": 12,
  //     "insuredName1": "Vilma Santos",
  //     "effectivityDate1": "2016-07-31",
  //     "maturityDate1": "2017-07-31",
  //     "loanCycle1": 1,
  //     "efffectiveDates": [],
  //     "birthDate": "1971-03-11",
  //     "ageOfEnrollee": 45
  //   } );
  //   Enrollments.insert( {
  //     "_id": "brYvK3FvEY9JhZPtM",
  //     "centerNumber": "MA-0001",
  //     "fullName": "Jerry Calma",
  //     "tin": "123456789",
  //     "gender": "MALE",
  //     "phone": "(478) 737-3901",
  //     "address": "Rigbu Square",
  //     "maritalStatus": "MARRIED",
  //     "spouseName": "Nora",
  //     "spouseBirthdate": "1986-11-16",
  //     "childrenName": "David",
  //     "childrenBirthdate": "1994-03-10",
  //     "parentName": "Vernon",
  //     "parentBirthdate": "1954-02-14",
  //     "siblingName": "Claudia",
  //     "siblingBirthdate": "1958-12-23",
  //     "productOffering": "Principal",
  //     "productName": "kaKw4hQ3WTtso572F",
  //     "premium": 60,
  //     "productRange": 6,
  //     "insuredName1": "Jerry Calma",
  //     "effectivityDate1": "2016-05-15",
  //     "loanCycle": 1,
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "LytDnsbXK2d4cgYPX",
  //     "insurer": [
  //       "8s8CGHT7uNnmvX5fq",
  //       "bHBunxXdBEshv5vkB"
  //     ],
  //     "products": [
  //       "kaKw4hQ3WTtso572F"
  //     ],
  //     "premiums": 60,
  //     "efffectiveDates": [],
  //     "createdAt": "2016-07-23",
  //     "createdBy": "zMxsbQKz6AxkY2aW9",
  //     "spouseAge": 29,
  //     "productsAvailed": "One Product",
  //     "insuredName": "Jerry Calma",
  //     "effectivityDate": "2016-07-26",
  //     "maturityDate": "2017-01-25",
  //     "birthDate": "1970-02-10",
  //     "ageOfEnrollee": 46,
  //     "children": "One Child",
  //     "childrenAge": 22,
  //     "parent": "One Parent",
  //     "parentAge": 62,
  //     "siblings": "One Sibling",
  //     "siblingAge": 57
  //   } );
  // }
  // if ( Claim.find().count() === 0 ) {
  //   Claim.insert( {
  //     "_id": "694fjjpFfxosk9DAk",
  //     "enrollmentId": "eEohPiv6wMqTapeyu",
  //     "clientType": "Dependent-Children",
  //     "children": "Amihan Villanueva",
  //     "products": "Cra2HHgNzTHWyaF6n",
  //     "status": "ApprovedRB",
  //     "medical": "Hypersensitivity",
  //     "amountPaid": 20000,
  //     "dateFiled": "2016-04-06",
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "LytDnsbXK2d4cgYPX",
  //     "insurer": "8s8CGHT7uNnmvX5fq",
  //     "createdBy": "zMxsbQKz6AxkY2aW9",
  //     "createdAt": "2016-04-06"
  //   } );
  //   Claim.insert( {
  //     "_id": "zR9tKRbn8G9WvYzm4",
  //     "enrollmentId": "wyrY7GCZbdnGoqFZF",
  //     "clientType": "Dependent-Children",
  //     "children": "James Coronel",
  //     "products": "Cra2HHgNzTHWyaF6n",
  //     "status": "Approved",
  //     "medical": "Hypertension",
  //     "amountPaid": 20000,
  //     "dateFiled": "2016-04-08",
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "LytDnsbXK2d4cgYPX",
  //     "insurer": "8s8CGHT7uNnmvX5fq",
  //     "createdBy": "zMxsbQKz6AxkY2aW9",
  //     "createdAt": "2016-04-08",
  //     "file": {
  //       "fileId": "7MFJxpwWsuWsng5tH",
  //       "url": "/gridfs/data/id/7f4dce175c5f33fd1fc675d0"
  //     }
  //   } );
  //   Claim.insert( {
  //     "_id": "rojKoN7LW5DuxPLzY",
  //     "enrollmentId": "eEohPiv6wMqTapeyu",
  //     "clientType": "Dependent-Spouse",
  //     "spouseName": "Vikki Poblete",
  //     "products": "rGWfZJ2eGJBZ9WBuq",
  //     "status": "Approved",
  //     "medical": "Hypersensitivity",
  //     "amountPaid": 40000,
  //     "dateFiled": "2016-04-13",
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "mBRy2J8qAQRXeizmZ",
  //     "insurer": "8s8CGHT7uNnmvX5fq",
  //     "createdBy": "EKwLqF8zxeoQXG88H",
  //     "createdAt": "2016-04-13",
  //     "file": {
  //       "fileId": "iDoKmuH9GspzSxBKg",
  //       "url": "/gridfs/data/id/ff9dc8eba474ac75efd1c52d"
  //     }
  //   } );
  //   Claim.insert( {
  //     "_id": "XFEyq5nNS9vtCmSDe",
  //     "enrollmentId": "wyrY7GCZbdnGoqFZF",
  //     "clientType": "Dependent-Children",
  //     "children": "Farie Coronel",
  //     "products": "Cra2HHgNzTHWyaF6n",
  //     "status": "Denied",
  //     "medical": "Hypertension",
  //     "dateFiled": "2016-04-20",
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "LytDnsbXK2d4cgYPX",
  //     "insurer": "8s8CGHT7uNnmvX5fq",
  //     "createdBy": "zMxsbQKz6AxkY2aW9",
  //     "createdAt": "2016-04-20"
  //   } );
  //   Claim.insert( {
  //     "_id": "zRcgSsbFEYuFtqJEs",
  //     "enrollmentId": "jgh8jdR63x7Npobsr",
  //     "clientType": "Dependent-Sibling",
  //     "siblingName": "Jobby Reyes",
  //     "products": "cjpy2L9E57NogeFZN",
  //     "status": "Approved",
  //     "medical": "Animal/Insect bite",
  //     "amountPaid": 30000,
  //     "dateFiled": "2016-04-24",
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "mBRy2J8qAQRXeizmZ",
  //     "insurer": "8s8CGHT7uNnmvX5fq",
  //     "createdBy": "EKwLqF8zxeoQXG88H",
  //     "createdAt": "2016-04-24"
  //   } );
  //   Claim.insert( {
  //     "_id": "QJYFKYLEcoDRyiPPG",
  //     "enrollmentId": "jgh8jdR63x7Npobsr",
  //     "clientType": "Dependent-Parent",
  //     "parentName": "Jake Reyes",
  //     "products": "e7S2ABDnvJmotqdcy",
  //     "status": "Approved",
  //     "causeOfDeath": "Respiratory",
  //     "amountPaid": 40000,
  //     "dateFiled": "2016-04-24",
  //     "company": "RE4d92pDug66Mfbzr",
  //     "branch": "mBRy2J8qAQRXeizmZ",
  //     "insurer": "8s8CGHT7uNnmvX5fq",
  //     "createdBy": "EKwLqF8zxeoQXG88H",
  //     "createdAt": "2016-04-24"
  //   } );

  if ( Meteor.error ) {
    return error.reason;
  } else {
    console.log( "--- PAIS Easy IMS is already started ---" );
  }

} );
