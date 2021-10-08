# Password Manager

This is a secure Password manager CLI application.

# Setup

- Run `npm install -g` on your terminal.
- Create a ".env" file in the root directory of the project and enter the following information
    - `SECRET_KEY=` The secret key should be 32 bytes.
    - `IV=` The init vector should be 16 bytes, each utf-8 character is one byte except for emojis and flags.
- Create an "accounts.json" file in the commands sub-folder in the main directory and put an empty array `[]`.
- Enjoy using the application and contact me if you encounter any issues.

# Notes

There are still of a couple of things that I would like to improve in this project, such as adding prompts to avoid people using your system knowing your account credentials and adding authentication.