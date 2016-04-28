# The Viaplay Code Challenge

In this document I am going to explain about the Notification web page app.

## How to use

### Preparation of the system

To begin with since this project was implemented in NodeJS, Mondgodb and Angular JS, you will need to install these and follow steps below

* install NodeJS and MongoDB
* navigate to the project folder and run `npm install` in order to install the necessary libraries.
* next you have to open from another terminal the database by runing `mongod` or `sudo mongod`
* run on the project folder `node server.js` in order to have the project up and running.

Now we have to setup the database

I run the database on the `test` database and you have to create a collection called `notifications` since the program does not create any objects. And fil the database with the objects you want. I used random data. the database has these fields:

* title: String
* text: String
* url: String
* img: String
* date: String
* isRead: Boolean
* isArchive: Boolean

### User Guide

Now run `localhost:8080` on your browser and let's start with the fun part.

We can see on top the total notifications that exist on the system and on the tabs above we have categorized the notifications to **Inbox** and **Archive**. Everything is going to be in the supposingly from the beginning.

The data are represented as a list and we can see the **title**, **date** and if they have been **read**.
We can sort the notifications based on each of these 3 categories, even though they are sorted by date by default.

If we clcik on one of the notiications a panel will appear on the bottom providing more informations about the notification and automatically the notification is checked as Read. 

In the panel we have the option to archive the notification. The opposite happens if we have put the notification on the archive an want to unarchive back to inbox. So when the button is clicked it will send it to the appropriate tab.

## Design Options

### User Interface

On the top of the Web app the user can see the total notifications that exist in the system.

Then I categorise the notifications in 2 categories:
* Inbox
* Archive

These 2 are shown in tabs with their names and next to it there is a number with the total notifications existing in the specific category.

Then a list is loaded in the form of table in order to give simple data to the user like the title, date and if it's read or not.

To show all the details of the notification a panel is used under the list which is activated when the user will click on the desired notification on the list.

This panel has every information that can be provided from the database. Title on top, then under the title there are image, text with url, date, button (Archive or Unarchive) in this order.

NOTE: Since I wasn't sure what the image could be I assumed that it might need a small one for avatar of the user or a thumbnail so I made the image to take the size 100X100 px.

### System

**Database:** The database has one collection and every field is String, except **isRead** and **isArchive** which are booleans in order to use them as flags.

**Backend:** The backend has 5 apis:
* Get all notifications
* Get Inbox notifications (Archive is false)
* Get Archived notifications (Archive is true)
* Update a notification if it's archived or not
* Update a notification if it has bean read

**Frontend:** The frontend has the functionallity described below:
* On loading the page it retrieves the data from the backend for **total** notifications, **inbox** and **archive**. Since the category for the inbox is active the list for inbox notifications is loaded.
* When a category is clicked on the tab becomes active and retrieves the data neeed accordingly. 2 different functions used for the 2 categories. When changing the tab while we have a notification open it will close the notification panel.
* If a notification is selected from the list, a function updates the data as being read and shows the panel with all the info for the notification.
* If the button is clicked then the information of this notification will be updated as Archived/Unarchived and reload all the data on the screen.
