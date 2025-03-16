# Task 2: Creating simple JavaScript code and committing it to GitHub using Git.

In this task, I will learn the fundamentals of using Git to manage code efficiently and understand the concept of branching using GitHub Flow. I will also study how to initialize a repository, commit changes, and create and manage branches to understand the workflow commonly used in the industry. Additionally, I will practice writing simple scripts in JavaScript and TypeScript.

Before we begin, make sure to prepare the following:

- Code Editor: You can use any code editor, such as Sublime Text, Visual Studio Code, or others.
- Git: After installing your code editor, ensure that Git is installed on your system to manage version control and collaborate with GitHub.
- GitHub Repository: Once your code editor and Git are installed, create a GitHub account and a new repository to store and share your completed code.

# Understanding the Basics of Git
![Screenshot 2025-03-14 152341](https://github.com/user-attachments/assets/05971b56-e54c-4a8c-adad-3a21084cd68c)

We will practice using the task shown in the example image to understand the Git workflow for professional code management in an organization or company. The steps I will take are:

1. **Initializing the Repository :**
  Create a new directory, initialize Git inside it, and configure basic Git settings as needed.
2. **Making Changes and Committing :**
   Add files to the repository and make the necessary modifications. Stage the updated files, then commit the changes with a descriptive message. Finally, push the changes to GitHub to store and share them.

Basic commands in Git include:
- Creates a new Git repository
  ```bash
  git init
  ```
- Adds changes to the staging area
  ```bash
  git add <file>
  ```
- Saves changes to the repository with a descriptive message
  ```bash
  git commit -m "message"
  ```
- Uploads changes to the remote server
  ```bash
  git push
  ```
- Fetches the latest changes from the remote server
  ```bash
  git pull
  ```

  # 1. How to Use Git and GitHub

  Here are the basic steps to use Git and GitHub:

  **a. Installing Git**
  To use Git, you need to install it first. Follow these steps:

  **Windows:**
- Download and install Git from git-scm.com.
- Once installed, open the terminal or Git Bash.

  **MacOS:**
- Use the command:
  ```bash
  brew install git
  ```
  if using Homebrew.

  **Linux:**
- Use the command:
  ```bash
  sudo apt install git
  ```
- (Ubuntu/Debian) or:
  ```bash
  sudo dnf install git
  ```
  (Fedora).

  **b. Connecting Git with GitHub**

  1.Create a GitHub account at github.com.

  2.Configure Git with your GitHub account:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "email@domain.com"
  ```
  3.Generate an SSH key to connect Git with GitHub:
  ```bash
  ssh-keygen -t rsa -b 4096 -C "email@domain.com"
  ```
  4.Add the SSH key to GitHub through your account settings.

  **c. Creating a Repository and Managing Code**

  Creating a repository on GitHub:

1.Click **New Repository** on GitHub

2.Provide a name and description, then choose **public** or **private.**

3.Click **Create Repository.**

  **Connecting a Local Git Repository to GitHub:**
  ```bash
  git remote add origin https://github.com/username/repository.git
  ```
  **Uploading Code for the First Time:**
  ```bash
  git add .
  git commit -m "Initialize repository"
  git push -u origin main
  ```
  # 2.Benefits of Using Git and GitHub
  Some key benefits of using Git and GitHub include:

- Improving team efficiency through structured version control.
- Facilitating collaboration without the need to manually share code.
- Supporting automation with CI/CD features available in GitHub Actions.
- Enhancing security by enabling rollbacks to previous versions in case of errors.
 
# 3. Initializing a Git Repository
Now, we will start working with Git by creating a new repository.

Create a new directory and initialize Git:
```bash
git init
```
![1](https://github.com/user-attachments/assets/2e159f46-6bcb-4a78-8baa-2180a3064939)

After running `git status`, copy the files you want to commit `git add`.

![git add](https://github.com/user-attachments/assets/434e28cd-d53e-4ee6-bc47-658ceb6bd06c)

After adding the files, provide a commit message.

![git commit](https://github.com/user-attachments/assets/5e94c6b2-8e3f-4135-9041-3c568d707709)

Once done, create a branch using `git branch`, then push it to the GitHub repository you have created using `git push`.

![git branch](https://github.com/user-attachments/assets/fe18d611-b679-4d32-8df5-8c4625713ced)

![Screenshot 2025-03-16 173703](https://github.com/user-attachments/assets/6dfc1336-9f5e-42f7-920d-9e0d089f8c07)

Once everything is done using the previous steps, open your GitHub repository and check the files that have been committed.

![Screenshot 2025-03-16 174057](https://github.com/user-attachments/assets/91b1c963-684e-4bdc-ac61-977f8ff36cae)

![Screenshot 2025-03-16 174117](https://github.com/user-attachments/assets/6fc62ae1-c914-4447-9da6-708ed4dc7a27)

Okay, the files we committed were successfully uploaded! 🎉

# Now, let's create a simple JavaScript script.
![Screenshot 2025-03-14 152126](https://github.com/user-attachments/assets/c0397a0d-dc1d-45b0-a056-9fc634e03b26)

This exercise focuses on developing simple JavaScript scripts to solve common programming problems. Each script is designed to deepen understanding of arithmetic operations, string manipulation, and control structures in JavaScript.

The tasks to be performed include:

- Converting temperature from Fahrenheit to Celsius.
- Converting values between centimeters and kilometers.
- Determining whether a given number is odd or even.
- Removing the first occurrence of a specific substring from a string.
- Checking whether a string is a palindrome.

1.Conversion from Fahrenheit to Celsius






   
