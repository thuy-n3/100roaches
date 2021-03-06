   
   
   import React, { Component } from 'react';
   import firebase from '../Firebase';
   import { Link } from 'react-router-dom';
   
   
   
   //Get multiple documents from a collection
    inspection.collection("cities").where("capital", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


