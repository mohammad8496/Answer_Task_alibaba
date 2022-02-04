# Answer_Task_alibaba

Answer task with cypress


Project Description :

A software test written in cypress and in vscode, the purpose of which is to test the ticket search panel. (Www.alibaba.ir)
We used cypress because it is faster and more accurate than the selenium webdriver (but in long tests we have problems with slow speeds).
And in the future we will try to write smarter tests


Install and Run the Project :

1_Mode system required
MacOS 10.9 and above (64-bit only)
Windows 7 and above
Linux Ubuntu 12.04 and above, Fedora 21 and Debian.

To install cypress we need to install node.js
 Because cypress is node based, node.js is an environment for running JavaScript.
So first I download node.js based on the existing operating system and then install it.
npm is also supported automatically.
After installation, to check the correctness of the installation, you can enter the project terminal:
run code node --version

and

run npm --version


2_There are two ways to install cypress
1_Download the cypress installation file and install it, this installation does not need anything else, and after completing the installation, cypress will be fully installed.

2_Install cypress using npm go to the project directory and execute the npm init code.
This command creates the package.json file.
details like - package name, description, keywords, and author name.
Now enter the following code to install cypress
npm install cypress --save-dev



good job
You have now managed to install cypress to test alibaba



How to Use the Project : 

This is an example of starting an alibaba test project:

describe('project_first_for_alibaba', function() {
     
    it('search_Ticket', function() {
       
       cy.viewport(1536, 721)
    
       cy.visit('https://www.alibaba.ir')

        })
   
   })
   

Use https://docs.cypress.io/ to continue the test
