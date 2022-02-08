export default (posts = [],action) => {
    switch(action.type){
        case 'FETCH_ALL':
                return action.payload;
         case 'CREATE':
             console.log(posts)//posts is the previous state
                return [...posts,action.payload];
          default:
              return posts;      
    }
}