# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Bowen Wu

## GitHub Pages
- expose.html: https://Endless1010.github.io/Lab5_Starter/expose.html
- explore.html: https://Endless1010.github.io/Lab5_Starter/explore.html

## Check Your Understanding

**1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?**

No. The "message" feature involves multiple components interacting — the user interface, a network request, a backend server, and another user's client. A unit test only tests an isolated piece of code, so it cannot verify the end-to-end behavior of sending and receiving a message across the system. An integration or end-to-end test would be more appropriate here.

**2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?**

Yes. The max message length feature can be encapsulated in a single function (e.g., `isValidMessageLength(text)`) that returns true or false based on whether the input is within 80 characters. This logic is self-contained and has no external dependencies, making it an ideal candidate for a unit test.
