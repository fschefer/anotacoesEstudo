*** Settings ***
Documentation       User should login to the admin page

Resource            ../resources/keywords.resource


*** Test Cases ***
Admin login
    Open page
    Fill Credentials    admin@smartbit.com    qacademy
    Submit Credentials
    Get Text    css= aside strong    equal    Admin

Invalid e-mail
    Open page
    Fill Credentials    404@qaninja.com    admin
    Submit Credentials
    Validate toaster

Invalid password
    Open page
    Fill Credentials    admin@smartbit.com    wrongpass
    Submit Credentials
    Validate toaster

