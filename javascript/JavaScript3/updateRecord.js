// FreeBootcamps solutions
//  of update record question

// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
      console.log(object[2548].albumTitle)
    if(prop!="tracks" && value!=""){
      object[id][prop]=value;
    }else if(prop=="tracks" && object[id][prop]==undefined){
     //create
      let arr=[];
      arr.push(value);
      object[id][prop]=arr;
    }else if(prop=="tracks" && value!=""){
      //update
         object[id][prop].push(value);
    }else if(value==""){
      // delete
      delete object[id][prop];
    }
    return object;
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');