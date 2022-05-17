## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. Page should show a bulletin board with users' posts.
2. The header should have links to a login page and a create posts page
3. login page should have inputs for email and pw, a sign up button, a sign in button, and a home button
4. create post page should allow you to enter a title, description, and contact, and have a submit post button and a home button
5. current list of posts should be stored in supabase and displayed on page load

events:
- when you load the home page it should render the posts that have been saved to supabase
- when you click on sign in, it should take you to a new page that allows you to input your email/pw and buttons to either sign in or sign up. There should be a home button as well.
- if already signed in, the sign in button should be 'log out' instead.
- when you click create post, if you are not signed in, it should redirect you to the sign in page. If you are signed in, it should take you to the create post page.
- when you click on submit post, it should send the data from the input fields to supabase, and then return you to the home page


order:
first create the skeleton of page elements
login/logout shouldn't depend on anything else so that can be next
then create post can be done but I don't know how to send/retrieve user data from supabase yet


1) **Make a drawing of your app. Simple "wireframes"** 

<img src="./assets/bulletin board.jpg">

1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
