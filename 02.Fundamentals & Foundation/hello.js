// const mission = 'learn';

// if(mission=='learn'){
//     console.log('Time to write some code')
// }else{
//     console.log(`Is ${mission} really a fun`)
// }

// Taking input by user at 2nd index
const mission = process.argv[2];

if(mission=='learn'){
    console.log('Time to write some code')
}else{
    console.log(`Is ${mission} really a fun`)
}