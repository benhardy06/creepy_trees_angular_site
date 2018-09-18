app.service('menuService', ['$window', function($window) {
    this.bls=[{title:'Heading 1', url:'#/section1?page=heading_1'},
               {title:'Heading 2', url:'#/section1?page=heading_2'},
               {title:'Heading 3', url:'#/section1?page=heading_3'},
               {title:'Heading 4', url:'#/section1?page=heading_4'},
               {title:'Heading 5', url:'#/section1?page=heading_5'},
               {title:'Heading 6', url:'#/section1?page=heading_6'}]
    this.sector=[{title:'Heading 7', url:'#/section2?page=heading_7'},
               {title:'Heading 8', url:'#/section2?page=heading_8'},
               {title:'Heading 9', url:'#/section2?page=heading_9'},
               {title:'Heading 10', url:'#/section2?page=heading_10'},
               {title:'Heading 11', url:'#/section2?page=heading_11'},
               {title:'Heading 12', url:'#/section2?page=heading_12'},
               {title:'Heading 13', url:'#/section2?page=heading_13'}]
    return this

    // })
}])