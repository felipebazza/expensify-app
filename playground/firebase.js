import { initializeApp } from 'firebase/app';
import { 
    getDatabase,
    ref,
    set,
    remove,
    update,
    onValue,
    off,
    push,
    onChildRemoved,
    onChildChanged,
    onChildAdded
} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDOCmAlE9aH7LzozaK6JzRaQvXgImdWIAg",
    authDomain: "expensify-5b606.firebaseapp.com",
    databaseURL: "https://expensify-5b606-default-rtdb.firebaseio.com",
    projectId: "expensify-5b606",
    storageBucket: "expensify-5b606.appspot.com",
    messagingSenderId: "563729907343",
    appId: "1:563729907343:web:7500e384ee5921c1b3bafa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

push(ref(getDatabase(), 'expenses'), {
    description: 'Water bill',
    amount: 5050,
    createdAt: 1254125123,
    note: 'This is a note'
}).then(() => {
    console.log('Data is saved successfully');
}).catch((e) => {
    console.log('Data is not saved', e);
});

onChildRemoved(ref(database, 'expenses'), 
    (dataSnapshot) => {
        console.log(dataSnapshot.key, dataSnapshot.val());
    }
);

onChildChanged(ref(database, 'expenses'), 
    (dataSnapshot) => {
        console.log(dataSnapshot.key, dataSnapshot.val());
    }
);

onChildAdded(ref(database, 'expenses'), 
    (dataSnapshot) => {
        console.log(dataSnapshot.key, dataSnapshot.val());
    }
);

// update(ref(database, 'notes/-NoIPP2UvA-n2075Rdi9'), {
//     body: 'Buy beer'
// });

// remove(ref(database, 'notes/-NoIPP2UvA-n2075Rdi9'));

// push(ref(getDatabase(), 'notes'), {
//     title: 'Course Topics 3',
//     body: 'React, Jest, Javascript, C++'
// }).then(() => {
//     console.log('Data is saved successfully');
// }).catch((e) => {
//     console.log('Data is not saved', e);
// });

// set(ref(getDatabase()), {
//     name: 'Felipe Bazzanella',
//     age: 32,
//     location: {
//         city: 'Caçador',
//         country: 'Santa Catarina'
//     },
//     isSingle: false,
//     job: 'Software Engineer',
//     notes: [
//         {
//             body: "this is a note",
//             id: '12',
//             title: 'first note'
//         },
//         {
//             body: "this is a note 2",
//             id: '122',
//             title: 'second note'
//         }
//     ]
// }).then(() => {
//     console.log('Data is saved successfully');
// }).catch((e) => {
//     console.log('Data is not saved', e);
// });

// set(ref(getDatabase(), 'age'), 31);
// set(ref(getDatabase(), 'location/city'), 'Blumenau');

// set(ref(getDatabase(), 'attributes'), {
//     height: 184,
//     weigth: 99
// });

// remove(ref(getDatabase(), 'isSingle')
// ).then(() => {
//     console.log('Data is removed successfully');
// }).catch((e) => {
//     console.log('Data is not saved', e);
// });

// update(ref(getDatabase()), {
//     job: 'Manager',
//     'location/city': 'Boston'
// });

// onValue(ref(getDatabase()), 
//     (dataSnapshot) => {
//         const val = dataSnapshot.val();
//         console.log(val);
//     },
//     // {
//     //     onlyOnce: true
//     // }
// );

// set(ref(getDatabase(), 'location/city'), 'Blumenau2');

// off(ref(getDatabase()), 'value');

// set(ref(getDatabase(), 'location/city'), 'Blumenau3');

// set(ref(getDatabase(), 'location/country'), 'Brasil');

// setTimeout(() => {
//     set(ref(getDatabase(), 'location/city'), 'Blumenau4');
// }, 3500);
