# bedonor.org-Clone
Clone of BeDonor

This is a clone of bedonor.org, which is a crowdfunding platform where users can raise funds for a social cause or a medical emergency.
This has been implemented using ReactJS. 
The other libraries that we used: 

1) react-icons
2) axios
3) react-elastic-carousel
4) react-router-dom




The core functionalities of this project: 

1) Basic Signup and Login.
2) Raise Funds: A logged-in user can raise funds for any cause by filling in all the necessary details, and the fundraiser will be added to the list of all the existing fundraisers. The same can be accessed from the fundraisers page.
3) Pagination in the fundraisers page.
4) Donation Page: Every fundraiser has a donation page depicting the amount of money needed, the number of days by which the money is needed, along with all the other details of the fundraiser.
5) Any user can donate any amount of money to any fundraiser that is present. After donation, the amount is added to the already raised amount of money.
6) The name of the user who has donated along with the amount donated can be seen in the 'supporters' section. The top 10 donors can be seen in the 'Top Donors' section.

All the required data is stored in the db.json file. 
Kindly run the following commands to run the project after cloning:

1) cd bedonor-clone
2) json-server db.json --port 3001 --watch (In split terminal, to start the json server)
3) npm start
