/* SOLUTION CODE
let user = {
	name: 'Kenneth',
	age: 28,
	data: {
		username: 'kennethCodesAllDay',
		joinDate: 'March 26, 2016',
		organization: 'Free Code Camp',
		friends: [
			'Sam',
			'Kira',
			'Tomo'
		],
		location: {
			city: 'San Francisco',
			state: 'CA',
			country: 'USA'
		}
	}
};
function addFriend(user, friend) {
	user.data.friends.push(friend);
	return user;
};
*/

let userObj = [
  {
    'name'    :'Samuel', 
    'friends' :[]
  },
  {
    'name'    : 'Ralph', 
    'friends' : []
  },
  {
    'name'    : 'Annie',
    'friends' : []
  }
];
// function addFriend(user, newFriend)  {
//   // userObj.name.friends.push(newFriend);
// 	if (userObj.name == user){
//     console.log('found ' + user);
//     this.friends.push(newFriend);
//   } 
//   // return userObj;

function addFriend( firstName, secondName ) {
	for ( let index = 0; index < arr.length; index++ ) {
		if ( arr[index].name === 'firstName' ) {
			arr[index].friends.push( secondName )
		}
	}
}

addFriend("Samuel","Ralph");
  console.log(userObj);

//mine
// function addFriend(user, newFriend)  {
// 	for (let i = 0; i < userObj.length; i++){
// 		if ( userObj[i].name === user ) {
// 				userObj[i].friends.push(newFriend)
// 		}
// 	}
// 	return userObj[i]
// };