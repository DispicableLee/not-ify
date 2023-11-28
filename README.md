



While I had worked with a react-rails stack using a PostgreSQL database before, Not-Ify was the first project I worked on that utilized react-redux’s store functionalities, and so the bulk of this production read-me will be devoted to explaining this.

User Authorization and Authentication
	On top of the at-this-point usual pattern of FIGVAPEBR and CHRLLL actions for the user model and application controllers respectively, additional functionalities were added to elevate this functionality to something resembling that of a more ‘proper’ application. Emails are now required to resemble an actual email (ex. ‘email@email.com’), whether or not the inputted email is a real one.
 
 <img width="627" alt="Screenshot 2023-11-26 at 8 26 04 PM" src="https://github.com/DispicableLee/not-ify/assets/67909854/247ceb67-caaf-42a9-910a-1aa2f1453699">


To reflect these added validation patterns, the User class method ‘find_by_credentials) has likewise been updated:

<img width="588" alt="Screenshot 2023-11-26 at 8 26 44 PM" src="https://github.com/DispicableLee/not-ify/assets/67909854/3cf0762e-381d-4a05-bb38-f837feff08b9">

This leads us to the ‘login’ portion of the backend authentication, in the sessions_controller:

<img width="589" alt="Screenshot 2023-11-26 at 8 27 06 PM" src="https://github.com/DispicableLee/not-ify/assets/67909854/b1b2eef6-1b0b-4277-aca6-1a2271299758">


Notice that around line 6, there is a command to render something called ‘api/users/show’. This was the other portion of the not-ify project that stuck out to me, the conceptualization and application of something called a ‘namespace’:

<img width="587" alt="Screenshot 2023-11-26 at 8 27 21 PM" src="https://github.com/DispicableLee/not-ify/assets/67909854/9c588554-0a73-4b18-b8a5-111d4ddee5fc">


What this does is that it adds an additional ‘direction’ that incoming requests need to take to reach the desired actions in the desired controller.

<img width="241" alt="Screenshot 2023-11-26 at 8 27 42 PM" src="https://github.com/DispicableLee/not-ify/assets/67909854/864018f9-e3ac-404d-9d59-136eb2e587d2">

 - notice how the ‘controller’ files and ‘views’ folders are both nested inside a higher-order ‘api’ folder, as this is where incoming requests will be directed to go.

	




