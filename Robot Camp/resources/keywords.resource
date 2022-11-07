*** Settings ***
Library     Browser


*** Keywords ***
Fill Credentials
    [Arguments]    ${email}    ${password}

    Fill Text    css=input[name=email]    ${email}
    Fill Text    css=input[name=password]    ${password}

Submit Credentials
    Click    xpath=//button[text()="Entrar no sistema"]

Validate toaster
    [Arguments]    ${expected_message}
    Wait For Elements State    css=.Toastify__toast-body >> text=${expected_message}    visible    5

Open page
    New Browser    headless=false    browser=chromium
    New Page    http://localhost:3000

Validate the user is logged in
    [Arguments]    ${user_name}
    ${logged_user}    Set Variable    css= aside strong
    Wait For Elements State    ${logged_user}    visible    5
    Get Text    ${logged_user}    equal    ${user_name}

Validate browser message
    Get Attribute    css=input[placeholder="Seu e-mail"]    type    equal    email

Validate alert    
    [Arguments]     ${field}   ${expected_alert}
    Get Text    xpath=//input[@type="${field}"] /..//span    equal    ${expected_alert}