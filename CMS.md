# How to customize the landing page ?

## Introduction 

The landing page was built with [Next.js](https://nextjs.org/). <br>
It's a React framework and is not a CMS. <br>
The good thing is that you can customize like every texts and images in your landing page.


To interact with the text and images of the website, you will have to use Google's cloud services: <u>Firebase</u>

To URL to the Firebase Dashboard of the Landing is : 
https://console.firebase.google.com/project/inrealartlanding-3a094/overview

You need credentials to authenticate. Ask them to Timothée


### Firebase 

When you are on the dashboard of Firebase, you will interact with only 2 Google cloud services : 
 - Firestore Database
 - Storage

Below is the left menu of the dashboard : 

<img src="./public/img/firebaseProcedure/firebase_left_menu.png" >

<i>Firestore Database</i> to modify only texts
<i>Storage</i> to modify only images

Remarks : you will be able to handle transtions with this system as wel

The <i>Firestore Database</i> contains 3 entities : 
 - Collections
 - Documents
 - Fields

<img src="./public/img/firebaseProcedure/firebase_entities.png" >

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

<img src="./public/img/firebaseProcedure/header.png" >

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

<img src="./public/img/firebaseProcedure/Header_Texts.png" >

<br>
<br>
With the screenshot above, you can clearly see the matching between the text in the website and the text you can modify.

To modify the text, you must make a mouse hover on the field. <br>
Then a pen appears.
Click on the pen to modify the field

<img src="./public/img/firebaseProcedure/mouse_hover.png" >

As you can notice, there is no text in the firestore DB for the _EN_ language.
So when you want to change the _lang_ on the website with the world icon on the menu


<img src="./public/img/firebaseProcedure/lang_selector.png" >

The title is empty

<img src="./public/img/firebaseProcedure/header_en_lang.png" >

To modify this, do it in firestore DB :


<img src="./public/img/firebaseProcedure/header_modify_lang.png" >

Now, refresh the page of the website and select english language


<img src="./public/img/firebaseProcedure/header_en_lang_visible.png" >

It works !!

You can now customize everything in the page by doing like this.

There are some tricks for artists carousel and tealm carousel, but the way of chnaging texts, images, links is the same !

For instance to modify the texts of the buttons in the header component, go to the document _Header_Buttons_


### <i>HowToJoinIra</i> Component    

This component is the one just below the menu

<img src="./public/img/firebaseProcedure/JoinIRA_Component.png" >

On this component, you can modify some raw texts, some buttons texts and some links for buttons.
Go to appropriate fields in the Firestore Database

<img src="./public/img/firebaseProcedure/JoinIRA_Fields.png" >

On the example above, we just set the link for the button _Join IRA_. 
It is set to _google.com_. <br>
It means that the URL set on the button is _https://google.com_.
You can customize all the links in the page like this


### <i>JoinMovement</i> Component    

This component is this one : 

<img src="./public/img/firebaseProcedure/JoinTrend.png" >

On this component, you can modify texts, texts insiode buttons and links of the buttons
Below is the matching collection in _Firestore DB_

<img src="./public/img/firebaseProcedure/JoinTrend_Firestore.png" >


### <i>Artists</i> Component    

This component is this one : 

<img src="./public/img/firebaseProcedure/Artists.png" >

It behaves like a carousel. I mean you can scroll left and right and customize all the images you want 
for the panel #1 in the carousel and the panel #2, etc ...

To scroll left or rioght, when you do a mouse hover on the panel some light arrows appear on the left and on the right 

Example below : 

<img src="./public/img/firebaseProcedure/Artists_scroll_right.png" >

The question is : How to customize my images of each panels ?
Quite simple. 
Go to the appropriate collection in _Firestore DB_

<img src="./public/img/firebaseProcedure/Artists_Firestore.png" >

The carousel is set with document called _Artists_Carousel_


### <i>HelpIra</i> Component    

### <i>NewsLetter</i> Component    



### <i>Team</i> Component    



### <i>Menu</i> Component    


### <i>Footer</i> Component    



