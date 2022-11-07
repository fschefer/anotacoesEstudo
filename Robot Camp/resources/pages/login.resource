*** Settings ***
Library     Browser


*** Keywords ***
Fill Credentials
    [Arguments]    ${email}    ${password}

    Fill Text    css=input[name=email]    ${email}
    Fill Text    css=input[name=password]    ${password}

Submit Credentials
    Click    xpath=//button[text()="Entrar no sistema"]

Open page
    New Browser    headless=false    browser=chromium
    New Page    http://localhost:3000

Validate browser message
    Get Attribute    css=input[placeholder="Seu e-mail"]    type    equal    email

Validate alert
    [Arguments]    ${field}    ${expected_alert}
    Get Text    xpath=//input[@type="${field}"] /..//span    equal    ${expected_alert}
