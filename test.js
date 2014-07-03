

( function ( $, window, document, undefined) {




    $( document ).ready( function (argument) {
        var $test1 = $( '#test1' );
        var testTmpl = Handlebars.compile( $( '#test1-template' ).html() );
        var test2Tmpl = Handlebars.compile( $( '#test2-template' ).html() );
        var context = {
            "title": "타이틀",
            "body" : "바디부분"
        };
        $test1.html( testTmpl( context ) );
        var context2 = {
            datas : [{
                subject : "주제1",
                body: "내용1"
            },{
                subject : "주제2",
                body: "내용2"
            }]
        };
        $( '#test2' ).html( test2Tmpl( context2 ) );
        var context3 = {
            "dContent": "탭 영역입니다. ",
            "gContent": "header 부분 영역입니다. "
        };
        var test3Tmpl = Handlebars.compile( $( '#test3-template' ).html() );
        $( '#test3' ).html( test3Tmpl( context3 ) );
        var context4 = {
            title: {
                "text" : "텍스트",
                "p": "<p>ddd</p>"
            },
            inner : [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        };
        var test4Tmpl = Handlebars.compile( $( '#test4-template' ).html() );
        $( '#test4' ).html( test4Tmpl( context4 ) );

        var context5= {
            articles: []
        };
        var test5Tmpl = Handlebars.compile( $( '#test5-template' ).html() );
        $( '#test5' ).html( test5Tmpl( context5 ) );

        var context6 = {
            nav: [
                {url: 'foo', test: true, title: 'bar'},
                {url: 'bar'}
            ]
        };
        var test6Tmpl = Handlebars.compile( $( '#test6-template' ).html() );
        $( '#test6' ).html( test6Tmpl( context6 ) );

        var context7 = {
            title: "My first post!",
            author: {
                firstName: "Charles",
                lastName: "Jolley"
            }
        };
        var test7Tmpl = Handlebars.compile( $( '#test7-template' ).html() );
        $( '#test7' ).html( test7Tmpl( context7 ) );

        var context8 = {
            people: [
                "Yehuda Katz",
                "Alan Johnson",
                "Charles Jolley"
            ],
            notData: [],
            object : { a: 1, b: 2}
        };
        var test8Tmpl = Handlebars.compile( $( '#test8-template' ).html() );
        $( '#test8' ).html( test8Tmpl( context8 ) );

        var context9 = {
            value: true,
            notData : false
        };
        var test9Tmpl = Handlebars.compile( $( '#test9-template' ).html() );
        $( '#test9' ).html( test9Tmpl( context9 ) );

        var context10 = {
            value: true,
            notData : false
        };
        var test10Tmpl = Handlebars.compile( $( '#test10-template' ).html() );
        $( '#test10' ).html( test10Tmpl( context10 ) );

        var customContext = {
            author: {firstName: "Alan", lastName: "Johnson"},
            body: "I Love Handlebars",
            comments: [{
                author: {firstName: "Yehuda", lastName: "Katz"},
                body: "Me too!"
            }]
        };
        Handlebars.registerHelper('fullName', function(person) {
            return person.firstName + " " + person.lastName;
        });
        var customTmpl = Handlebars.compile( $( '#custom-template' ).html() );
        $( '#custom' ).html( customTmpl( customContext ) );

        var custom2Context = {
            author: {firstName: "Alan", lastName: "Johnson"},
            body: "I Love Handlebars",
            comments: [{
                author: {firstName: "Yehuda", lastName: "Katz"},
                body: "Me too!"
            }]
        };
        Handlebars.registerHelper('custom2', function(context, context2, options) {
            if ( options.hash.value === 1 ){
                console.log( options.hash.test );
                console.log( context2 );

                return " value 1";
            } else {
               return context.firstName + " " + context.lastName;
            }
        });
        var custom2Tmpl = Handlebars.compile( $( '#custom2-template' ).html() );
        $( '#custom2' ).html( custom2Tmpl( custom2Context ) );


    });
}( jQuery, window, document ));
