# How to customize the landing page ?

## Introduction 

The landing page was built with [Next.js](https://nextjs.org/). <br>
It's a React framework and is not a CMS. <br>
The good thing is that you can customize like every texts and images in your landing page.


To interact with the text and images of the website, you will have to use Google's cloud services: <u>Firebase</u>

To URL to the Firebase Dashboard of the Landing is : 
https://console.firebase.google.com/project/inrealartlanding-3a094/overview

You need credentials to authenticate. Ask them to Timothée

### Firebase

When you are on the dashboard of Firebase, you will interact with only 2 Google cloud services : 
 - Firestore Database
 - Storage

Below is the left menu of the dashboard : 

<img src="./public/img/firebaseProcedure/firebase_left_menu.png" alt="Nginx" title="Nginx">

<i>Firestore Database</i> to modify only texts
<i>Storage</i> to modify only images

Remarks : you will be able to handle transtions with this system as wel

The <i>Firestore Database</i> contains 3 entities : 
 - Collections
 - Documents
 - Fields

<img src="./public/img/firebaseProcedure/firebase_entities.png" alt="Nginx" title="Nginx">

You will only change the entity <i>Fields</i> to modify the texts on the website

## Components

The landing page is divided into several components : 
 - Header
 - JoinMovement
 - Artists
 - HelpIra
 - NewsLetter
 - HowToJoinIra
 - Team
 - Menu
 - Footer

### <i>Header</i> Component    

<img src="./public/img/firebaseProcedure/header.png" alt="Nginx" title="Nginx">

In the header, we have 3 texts : 
 - 1 part of the title in black font called _title1_
 - 1 part of the title in purple font called _title2_
 - 1 text in the left bottom called _text1_

As you can handle translations, each of these fields contains sub-fields for translations in the 3 languages : 

 - CN (Chinese)
 - EN (English)
 - FR (French)

So, in order to modify texts of the header of the website, Go to 
_Header_ (collection) > _Header_Text_ (document) > Fields





### <i>JoinMovement</i> Component    


### <i>Artists</i> Component    


### <i>HelpIra</i> Component    

### <i>NewsLetter</i> Component    

### <i>HowToJoinIra</i> Component    

### <i>Team</i> Component    



### <i>Menu</i> Component    


### <i>Footer</i> Component    



